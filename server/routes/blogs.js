import express from 'express'
import Blog from '../models/Blog.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

const initialBlogs = [
  {
    title: 'Top AI Trends Shaping Business in 2025',
    date: 'Jan 15, 2025',
    description: 'Explore the latest artificial intelligence trends that are revolutionizing how businesses operate and compete in the digital landscape.',
    tag: 'Tech Team',
    image: 'https://plus.unsplash.com/premium_vector-1725372199832-32fef84e123b?q=80&w=1112&auto=format&fit=crop',
    isPublished: true
  },
  {
    title: 'Essential Cybersecurity Practices for SMBs',
    date: 'Jan 10, 2025',
    description: 'Learn how small and medium businesses can protect themselves from cyber threats with practical security measures.',
    tag: 'Security Team',
    image: 'https://plus.unsplash.com/premium_vector-1682310920702-50669014da8f?w=600&auto=format&fit=crop',
    isPublished: true
  },
  {
    title: 'Cloud Migration: A Step-by-Step Guide',
    date: 'Jan 5, 2025',
    description: 'Comprehensive guide to successfully migrating your business infrastructure to the cloud with minimal disruption.',
    tag: 'Cloud Team',
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?w=600&auto=format&fit=crop',
    isPublished: true
  },
  {
    title: 'Modern Web Development Best Practices',
    date: 'Dec 28, 2024',
    description: 'Discover the latest web development techniques and best practices for building scalable applications.',
    tag: 'Dev Team',
    image: 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop',
    isPublished: true
  }
]

// Seed blogs if collection is empty
export async function seedBlogs() {
  try {
    const count = await Blog.countDocuments()
    if (count === 0) {
      await Blog.insertMany(initialBlogs)
      console.log('Seeded initial blog posts')
    }
  } catch (err) {
    console.error('Error seeding blogs:', err.message)
  }
}

// Public: Get all published blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 })
    return res.json({ success: true, blogs })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch blogs' })
  }
})

// Protected Admin: Get all blogs (including drafts)
router.get('/admin/blogs', authenticateToken, async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 })
    return res.json({ success: true, blogs })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch admin blogs' })
  }
})

// Protected Admin: Create new blog
router.post('/admin/blogs', authenticateToken, async (req, res) => {
  try {
    const { title, description, content, tag, image, isPublished } = req.body || {}
    if (!title || !description) {
      return res.status(400).json({ success: false, message: 'Title and description are required' })
    }

    const blog = await Blog.create({
      title,
      description,
      content: content || '',
      tag: tag || 'Tech Team',
      image: image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop',
      isPublished: isPublished !== undefined ? isPublished : true
    })

    return res.status(201).json({ success: true, message: 'Blog created successfully', blog })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to create blog' })
  }
})

// Protected Admin: Update blog
router.put('/admin/blogs/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params
    const updated = await Blog.findByIdAndUpdate(id, req.body, { new: true })
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Blog post not found' })
    }
    return res.json({ success: true, message: 'Blog updated successfully', blog: updated })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to update blog' })
  }
})

// Protected Admin: Delete blog
router.delete('/admin/blogs/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Blog.findByIdAndDelete(id)
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Blog not found' })
    }
    return res.json({ success: true, message: 'Blog deleted successfully' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to delete blog' })
  }
})

export default router
