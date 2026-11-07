import bcrypt from 'bcryptjs'
import Admin from './models/Admin.js'

export async function seedDefaultAdmin() {
  const adminEmail = (process.env.ADMIN_EMAIL || 'admin@atechsole.com').trim().toLowerCase()
  const adminPassword = process.env.ADMIN_PASSWORD || '@dmin234@DMIN'

  try {
    let admin = await Admin.findOne({ email: adminEmail })
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(adminPassword, salt)

    if (!admin) {
      admin = await Admin.create({
        name: 'Super Admin',
        email: adminEmail,
        password: hashedPassword,
        role: 'superadmin'
      })
      console.log(`[Seed] Created default admin account: ${adminEmail}`)
    } else {
      // Ensure the requested password is synchronized
      const isMatch = await admin.comparePassword(adminPassword)
      if (!isMatch) {
        admin.password = hashedPassword
        await admin.save()
        console.log(`[Seed] Updated admin password for: ${adminEmail}`)
      }
    }
  } catch (err) {
    console.error('[Seed] Error configuring default admin account:', err.message)
  }
}
