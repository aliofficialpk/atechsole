import jwt from 'jsonwebtoken'

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null

  if (!token) {
    return res.status(401).json({ success: false, message: 'Authentication required. No token provided.' })
  }

  const secret = process.env.JWT_SECRET || 'atechsole_fallback_secret_key_2026'

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Session expired or invalid token.' })
    }
    req.user = user
    next()
  })
}
