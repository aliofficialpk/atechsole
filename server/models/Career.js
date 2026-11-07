import mongoose from 'mongoose'

const CareerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    location: { type: String, default: 'Lahore, Pakistan' },
    type: { type: String, default: 'Full Time' },
    department: { type: String, default: 'Engineering' },
    description: { type: String, required: true },
    fullDescription: { type: String, default: '' },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
)

export default mongoose.models.Career || mongoose.model('Career', CareerSchema)
