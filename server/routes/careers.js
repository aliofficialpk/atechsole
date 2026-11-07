import express from 'express'
import Career from '../models/Career.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

const initialCareers = [
  {
    title: 'ML Engineer',
    location: 'Lahore, Pakistan',
    type: 'Full Time',
    department: 'Artificial Intelligence',
    description: 'We are looking for experienced ML Engineers to join our team and build intelligent systems that power our AI solutions.',
    fullDescription: 'Design, develop, and deploy machine learning models and intelligent pipelines.',
    isActive: true
  },
  {
    title: 'Full Stack Developer',
    location: 'Lahore, Pakistan',
    type: 'Full Time',
    department: 'Software Engineering',
    description: 'Join our development team to create scalable web applications using React, Node.js, and modern cloud technologies.',
    fullDescription: 'Develop robust, high-performance web systems and RESTful APIs.',
    isActive: true
  },
  {
    title: 'Cybersecurity Analyst',
    location: 'Lahore, Pakistan',
    type: 'Full Time',
    department: 'Security & Infrastructure',
    description: 'Protect vital infrastructure, conduct vulnerability assessments, and implement modern security frameworks.',
    fullDescription: 'Monitor security threats, conduct audits, and ensure compliance.',
    isActive: true
  }
]

export async function seedCareers() {
  try {
    const count = await Career.countDocuments()
    if (count === 0) {
      await Career.insertMany(initialCareers)
      console.log('Seeded initial job openings')
    }
  } catch (err) {
    console.error('Error seeding careers:', err.message)
  }
}

// Public: Get all active careers
router.get('/careers', async (req, res) => {
  try {
    const careers = await Career.find({ isActive: true }).sort({ createdAt: -1 })
    return res.json({ success: true, careers })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch careers' })
  }
})

// Protected Admin: Get all careers
router.get('/admin/careers', authenticateToken, async (req, res) => {
  try {
    const careers = await Career.find().sort({ createdAt: -1 })
    return res.json({ success: true, careers })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch careers' })
  }
})

// Protected Admin: Create career
router.post('/admin/careers', authenticateToken, async (req, res) => {
  try {
    const { title, location, type, department, description, fullDescription, isActive } = req.body || {}
    if (!title || !description) {
      return res.status(400).json({ success: false, message: 'Job title and description are required' })
    }

    const career = await Career.create({
      title,
      location: location || 'Lahore, Pakistan',
      type: type || 'Full Time',
      department: department || 'Engineering',
      description,
      fullDescription: fullDescription || description,
      isActive: isActive !== undefined ? isActive : true
    })

    return res.status(201).json({ success: true, message: 'Job vacancy created successfully', career })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to create job' })
  }
})

// Protected Admin: Update career
router.put('/admin/careers/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params
    const updated = await Career.findByIdAndUpdate(id, req.body, { new: true })
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Job vacancy not found' })
    }
    return res.json({ success: true, message: 'Job vacancy updated', career: updated })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to update job' })
  }
})

// Protected Admin: Delete career
router.delete('/admin/careers/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Career.findByIdAndDelete(id)
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Job vacancy not found' })
    }
    return res.json({ success: true, message: 'Job vacancy deleted successfully' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to delete job' })
  }
})

export default router
