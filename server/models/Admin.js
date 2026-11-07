import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, default: 'Admin' },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' },
    lastLogin: { type: Date }
  },
  { timestamps: true }
)

// Method to verify password
AdminSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema)
