import express from 'express'
import ContactMessage from '../models/ContactMessage.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

// Public: Submit contact message from frontend
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required' })
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' })
    }

    const doc = await ContactMessage.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      subject: subject ? subject.trim() : 'General Inquiry',
      message: message.trim(),
      status: 'unread'
    })

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully. Our team will get back to you shortly.',
      id: doc._id
    })
  } catch (error) {
    console.error('Contact submission error:', error)
    return res.status(500).json({ success: false, message: 'Server error while sending message' })
  }
})

// Protected Admin: Get all contact messages
router.get('/admin/contacts', authenticateToken, async (req, res) => {
  try {
    const { status, search } = req.query
    const query = {}

    if (status && status !== 'all') {
      query.status = status
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } }
      ]
    }

    const messages = await ContactMessage.find(query).sort({ createdAt: -1 })
    const unreadCount = await ContactMessage.countDocuments({ status: 'unread' })

    return res.json({
      success: true,
      total: messages.length,
      unreadCount,
      messages
    })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return res.status(500).json({ success: false, message: 'Failed to retrieve messages' })
  }
})

// Protected Admin: Update message status or notes
router.patch('/admin/contacts/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params
    const { status, adminNotes } = req.body

    const updateData = {}
    if (status) {
      updateData.status = status
      if (status === 'replied') {
        updateData.repliedAt = new Date()
      }
    }
    if (adminNotes !== undefined) {
      updateData.adminNotes = adminNotes
    }

    const updated = await ContactMessage.findByIdAndUpdate(id, updateData, { new: true })
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Message not found' })
    }

    return res.json({ success: true, message: 'Message updated', data: updated })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to update message' })
  }
})

// Protected Admin: Delete a message
router.delete('/admin/contacts/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await ContactMessage.findByIdAndDelete(id)
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Message not found' })
    }
    return res.json({ success: true, message: 'Message deleted successfully' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to delete message' })
  }
})

export default router
