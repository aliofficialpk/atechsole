import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

// Routes
import authRoutes from './routes/auth.js'
import contactRoutes from './routes/contacts.js'
import blogRoutes, { seedBlogs } from './routes/blogs.js'
import careerRoutes, { seedCareers } from './routes/careers.js'
import statsRoutes from './routes/stats.js'
import { seedDefaultAdmin } from './seedAdmin.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Middleware
app.use(cors({
  origin: true, // Allow frontend origin dynamically
  credentials: true
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// MongoDB Connection
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/atechsole'
let isDbConnected = false

async function connectDb() {
  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000
    })
    isDbConnected = true
    console.log(`[Database] MongoDB connected successfully to: ${mongoUri.replace(/:([^:@]{4})[^:@]*@/, ':****@')}`)
    
    // Run seeders
    await seedDefaultAdmin()
    await seedBlogs()
    await seedCareers()
  } catch (err) {
    isDbConnected = false
    console.warn(`[Database] MongoDB connection warning: ${err.message}`)
    console.warn('[Database] Note: Ensure MongoDB is running locally or set MONGO_URI in .env to MongoDB Atlas.')
  }
}

connectDb()

// Mount API Routes
app.use('/api/auth', authRoutes)
app.use('/api', contactRoutes)
app.use('/api', blogRoutes)
app.use('/api', careerRoutes)
app.use('/api', statsRoutes)

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    status: 'operational',
    service: 'ATechSole API Backend',
    database: isDbConnected ? 'connected' : 'disconnected (pending reconnect)',
    timestamp: new Date().toISOString()
  })
})

// Serve frontend build in production
const distPath = path.resolve(__dirname, '../dist')

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next()
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Unhandled Error]', err)
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`===============================================`)
  console.log(`🚀 ATechSole API Server running on port ${port}`)
  console.log(`🔗 Local URL: http://localhost:${port}`)
  console.log(`🛡️  Admin Login: ${process.env.ADMIN_EMAIL || 'admin@atechsole.com'}`)
  console.log(`===============================================`)
})
