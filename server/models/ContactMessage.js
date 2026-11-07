import mongoose from 'mongoose'

const ContactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: '', trim: true },
    subject: { type: String, default: '', trim: true },
    message: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['unread', 'read', 'replied', 'archived'],
      default: 'unread'
    },
    adminNotes: { type: String, default: '' },
    repliedAt: { type: Date }
  },
  { timestamps: true }
)

export default mongoose.models.ContactMessage || mongoose.model('ContactMessage', ContactMessageSchema)
