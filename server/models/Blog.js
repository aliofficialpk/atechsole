import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, trim: true },
    date: { type: String, default: () => new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) },
    description: { type: String, required: true },
    content: { type: String, default: '' },
    tag: { type: String, default: 'Tech Team' },
    image: { type: String, default: '' },
    isPublished: { type: Boolean, default: true },
    author: { type: String, default: 'ATechSole Team' }
  },
  { timestamps: true }
)

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
