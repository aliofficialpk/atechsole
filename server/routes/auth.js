import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Admin from '../models/Admin.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {}

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' })
    }

    const cleanEmail = email.trim().toLowerCase()
    const admin = await Admin.findOne({ email: cleanEmail })

    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' })
    }

    const isMatch = await admin.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' })
    }

    // Update last login
    admin.lastLogin = new Date()
    await admin.save()

    const secret = process.env.JWT_SECRET || 'atechsole_fallback_secret_key_2026'
    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: admin.role, name: admin.name },
      secret,
      { expiresIn: '7d' }
    )

    return res.json({
      success: true,
      token,
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return res.status(500).json({ success: false, message: 'Server error during login' })
  }
})

// Current user verification
router.get('/me', authenticateToken, async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).select('-password')
    if (!admin) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }
    return res.json({ success: true, user: admin })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error retrieving user' })
  }
})

// Update password
router.post('/change-password', authenticateToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body || {}
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ success: false, message: 'Current and new password required' })
    }

    const admin = await Admin.findById(req.user.id)
    if (!admin) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    const isMatch = await admin.comparePassword(currentPassword)
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Current password incorrect' })
    }

    const salt = await bcrypt.genSalt(10)
    admin.password = await bcrypt.hash(newPassword, salt)
    await admin.save()

    return res.json({ success: true, message: 'Password updated successfully' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to update password' })
  }
})

export default router
