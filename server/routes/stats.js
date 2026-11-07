import express from 'express'
import ContactMessage from '../models/ContactMessage.js'
import Blog from '../models/Blog.js'
import Career from '../models/Career.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/admin/stats', authenticateToken, async (req, res) => {
  try {
    const totalInquiries = await ContactMessage.countDocuments()
    const unreadInquiries = await ContactMessage.countDocuments({ status: 'unread' })
    const totalBlogs = await Blog.countDocuments()
    const activeCareers = await Career.countDocuments({ isActive: true })

    const recentInquiries = await ContactMessage.find()
      .sort({ createdAt: -1 })
      .limit(5)

    return res.json({
      success: true,
      stats: {
        totalInquiries,
        unreadInquiries,
        totalBlogs,
        activeCareers
      },
      recentInquiries
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch dashboard stats' })
  }
})

export default router
