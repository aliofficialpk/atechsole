import React, { useState, useEffect } from 'react'
import './AdminPanel.css'

const API_BASE = import.meta.env.VITE_API_URL || ''

const AdminPanel = () => {
  const [token, setToken] = useState(() => localStorage.getItem('atechsole_token') || '')
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('atechsole_user') || 'null')
    } catch {
      return null
    }
  })

  // Login form state
  const [loginEmail, setLoginEmail] = useState('admin@atechsole.com')
  const [loginPassword, setLoginPassword] = useState('@dmin234@DMIN')
  const [loginError, setLoginError] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  // Active view state
  const [activeTab, setActiveTab] = useState('inquiries') // 'overview' | 'inquiries' | 'blogs' | 'careers' | 'settings'

  // Dashboard Data State
  const [stats, setStats] = useState({ totalInquiries: 0, unreadInquiries: 0, totalBlogs: 0, activeCareers: 0 })
  const [contacts, setContacts] = useState([])
  const [blogs, setBlogs] = useState([])
  const [careers, setCareers] = useState([])
  const [loadingData, setLoadingData] = useState(false)
  const [alertMsg, setAlertMsg] = useState({ type: '', text: '' })

  // Filters
  const [contactStatusFilter, setContactStatusFilter] = useState('all')
  const [contactSearch, setContactSearch] = useState('')
  const [activeMessageModal, setActiveMessageModal] = useState(null)

  // Forms state
  const [newBlog, setNewBlog] = useState({ title: '', tag: 'Tech Team', image: '', description: '' })
  const [newCareer, setNewCareer] = useState({ title: '', location: 'Lahore, Pakistan', type: 'Full Time', department: 'Engineering', description: '' })
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })

  const showAlert = (text, type = 'success') => {
    setAlertMsg({ type, text })
    setTimeout(() => setAlertMsg({ type: '', text: '' }), 4000)
  }

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError('')
    setIsLoggingIn(true)

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword })
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setToken(data.token)
        setCurrentUser(data.user)
        localStorage.setItem('atechsole_token', data.token)
        localStorage.setItem('atechsole_user', JSON.stringify(data.user))
      } else {
        setLoginError(data.message || 'Login failed. Please verify credentials.')
      }
    } catch {
      setLoginError('Could not reach backend API. Check server connection.')
    } finally {
      setIsLoggingIn(false)
    }
  }

  // Handle Logout
  const handleLogout = (reason = '') => {
    setToken('')
    setCurrentUser(null)
    localStorage.removeItem('atechsole_token')
    localStorage.removeItem('atechsole_user')
    if (reason) {
      setLoginError(reason)
    }
  }

  // Fetch all admin data
  const fetchData = async () => {
    if (!token) return
    setLoadingData(true)
    try {
      const headers = { Authorization: `Bearer ${token}` }

      // Fetch Stats
      const statsRes = await fetch(`${API_BASE}/api/admin/stats`, { headers })
      if (statsRes.status === 401 || statsRes.status === 403) {
        handleLogout('Session expired or unauthorized. Please log in again.')
        return
      }
      const statsData = await statsRes.json()
      if (statsData.success) setStats(statsData.stats)

      // Fetch Inquiries
      const contactsRes = await fetch(`${API_BASE}/api/admin/contacts`, { headers })
      if (contactsRes.status === 401 || contactsRes.status === 403) {
        handleLogout('Session expired or unauthorized. Please log in again.')
        return
      }
      const contactsData = await contactsRes.json()
      if (contactsData.success) setContacts(contactsData.messages)

      // Fetch Blogs
      const blogsRes = await fetch(`${API_BASE}/api/admin/blogs`, { headers })
      if (blogsRes.status === 401 || blogsRes.status === 403) {
        handleLogout('Session expired or unauthorized. Please log in again.')
        return
      }
      const blogsData = await blogsRes.json()
      if (blogsData.success) setBlogs(blogsData.blogs)

      // Fetch Careers
      const careersRes = await fetch(`${API_BASE}/api/admin/careers`, { headers })
      if (careersRes.status === 401 || careersRes.status === 403) {
        handleLogout('Session expired or unauthorized. Please log in again.')
        return
      }
      const careersData = await careersRes.json()
      if (careersData.success) setCareers(careersData.careers)
    } catch (err) {
      console.error('Error fetching admin data:', err)
    } finally {
      setLoadingData(false)
    }
  }

  useEffect(() => {
    if (token) {
      fetchData()
    }
  }, [token])

  // Update contact status
  const updateContactStatus = async (id, status) => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setContacts(prev => prev.map(c => c._id === id ? { ...c, status } : c))
        if (activeMessageModal && activeMessageModal._id === id) {
          setActiveMessageModal(prev => ({ ...prev, status }))
        }
        showAlert(`Inquiry marked as ${status}`)
      }
    } catch {
      showAlert('Failed to update status', 'error')
    }
  }

  // Delete Contact
  const deleteContact = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return
    try {
      const res = await fetch(`${API_BASE}/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        setContacts(prev => prev.filter(c => c._id !== id))
        if (activeMessageModal && activeMessageModal._id === id) {
          setActiveMessageModal(null)
        }
        showAlert('Inquiry deleted')
      }
    } catch {
      showAlert('Failed to delete message', 'error')
    }
  }

  // Create Blog
  const handleCreateBlog = async (e) => {
    e.preventDefault()
    if (!newBlog.title || !newBlog.description) {
      showAlert('Title and description are required', 'error')
      return
    }

    try {
      const res = await fetch(`${API_BASE}/api/admin/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newBlog)
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setBlogs(prev => [data.blog, ...prev])
        setNewBlog({ title: '', tag: 'Tech Team', image: '', description: '' })
        showAlert('New blog post published')
      }
    } catch {
      showAlert('Failed to create blog post', 'error')
    }
  }

  // Delete Blog
  const handleDeleteBlog = async (id) => {
    if (!window.confirm('Delete this blog post?')) return
    try {
      const res = await fetch(`${API_BASE}/api/admin/blogs/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        setBlogs(prev => prev.filter(b => b._id !== id))
        showAlert('Blog post removed')
      }
    } catch {
      showAlert('Failed to remove blog post', 'error')
    }
  }

  // Create Career
  const handleCreateCareer = async (e) => {
    e.preventDefault()
    if (!newCareer.title || !newCareer.description) {
      showAlert('Job title and description are required', 'error')
      return
    }

    try {
      const res = await fetch(`${API_BASE}/api/admin/careers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newCareer)
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setCareers(prev => [data.career, ...prev])
        setNewCareer({ title: '', location: 'Lahore, Pakistan', type: 'Full Time', department: 'Engineering', description: '' })
        showAlert('Job opening added successfully')
      }
    } catch {
      showAlert('Failed to create job opening', 'error')
    }
  }

  // Toggle Career active
  const toggleCareerActive = async (career) => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/careers/${career._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ isActive: !career.isActive })
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setCareers(prev => prev.map(c => c._id === career._id ? data.career : c))
        showAlert(`Job position ${career.isActive ? 'closed' : 'opened'}`)
      }
    } catch {
      showAlert('Failed to update job status', 'error')
    }
  }

  // Delete Career
  const handleDeleteCareer = async (id) => {
    if (!window.confirm('Delete this job opening?')) return
    try {
      const res = await fetch(`${API_BASE}/api/admin/careers/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        setCareers(prev => prev.filter(c => c._id !== id))
        showAlert('Job position deleted')
      }
    } catch {
      showAlert('Failed to delete job', 'error')
    }
  }

  // Change Password
  const handleChangePassword = async (e) => {
    e.preventDefault()
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showAlert('New passwords do not match', 'error')
      return
    }
    try {
      const res = await fetch(`${API_BASE}/api/auth/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword
        })
      })
      const data = await res.json()
      if (res.ok && data.success) {
        showAlert('Password changed successfully')
        setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      } else {
        showAlert(data.message || 'Failed to change password', 'error')
      }
    } catch {
      showAlert('Server error changing password', 'error')
    }
  }

  // Filtered contacts list
  const filteredContacts = contacts.filter(c => {
    const matchesStatus = contactStatusFilter === 'all' || c.status === contactStatusFilter
    const searchLower = contactSearch.toLowerCase()
    const matchesSearch = !contactSearch ||
      (c.name && c.name.toLowerCase().includes(searchLower)) ||
      (c.email && c.email.toLowerCase().includes(searchLower)) ||
      (c.subject && c.subject.toLowerCase().includes(searchLower)) ||
      (c.message && c.message.toLowerCase().includes(searchLower))
    return matchesStatus && matchesSearch
  })

  const unreadCount = contacts.filter(c => c.status === 'unread').length

  // ==========================================
  // Render: Login View if unauthenticated
  // ==========================================
  if (!token) {
    return (
      <div className="admin-wrapper">
        <div className="admin-login-container">
          <div className="admin-login-card">
            <div className="admin-login-header">
              <div className="admin-login-badge">🛡️ Internal Security Portal</div>
              <h1>ATechSole Admin</h1>
              <p>Authorized personnel authentication</p>
            </div>

            {loginError && (
              <div className="admin-alert admin-alert-error">
                <span>⚠️</span>
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="admin-form-group">
                <label>Administrator Email</label>
                <div className="admin-input-wrapper">
                  <input
                    type="email"
                    className="admin-input"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                    placeholder="admin@atechsole.com"
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Security Password</label>
                <div className="admin-input-wrapper">
                  <input
                    type="password"
                    className="admin-input"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <button type="submit" className="admin-btn-primary" disabled={isLoggingIn}>
                {isLoggingIn ? 'Authenticating...' : 'Sign In to Portal'}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  // ==========================================
  // Render: Authenticated Admin Portal
  // ==========================================
  return (
    <div className="admin-wrapper">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div className="admin-brand-icon">A</div>
          <div className="admin-brand-info">
            <h2>ATechSole</h2>
            <span>Admin Center</span>
          </div>
        </div>

        <nav className="admin-nav-menu">
          <button
            className={`admin-nav-btn ${activeTab === 'inquiries' ? 'active' : ''}`}
            onClick={() => setActiveTab('inquiries')}
          >
            <span>📬 Inquiries Inbox</span>
            {unreadCount > 0 && <span className="admin-nav-badge">{unreadCount}</span>}
          </button>

          <button
            className={`admin-nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span>📊 Overview & Stats</span>
          </button>

          <button
            className={`admin-nav-btn ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => setActiveTab('blogs')}
          >
            <span>📝 Blog Management</span>
          </button>

          <button
            className={`admin-nav-btn ${activeTab === 'careers' ? 'active' : ''}`}
            onClick={() => setActiveTab('careers')}
          >
            <span>💼 Career Vacancies</span>
          </button>

          <button
            className={`admin-nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <span>⚙️ Account & Security</span>
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-profile">
            <div className="admin-user-details">
              <p>{currentUser?.name || 'Administrator'}</p>
              <small>{currentUser?.email || 'admin@atechsole.com'}</small>
            </div>
            <button className="admin-logout-btn" onClick={handleLogout} title="Log Out">
              Exit
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main-content">
        {/* Global Alert Notification */}
        {alertMsg.text && (
          <div className={`admin-alert ${alertMsg.type === 'error' ? 'admin-alert-error' : 'admin-alert-success'}`}>
            <span>{alertMsg.type === 'error' ? '⚠️' : '✓'}</span>
            <span>{alertMsg.text}</span>
          </div>
        )}

        {/* Tab 1: Inquiries Inbox */}
        {activeTab === 'inquiries' && (
          <div>
            <div className="admin-top-bar">
              <div>
                <h1>Client Inquiries & Messages</h1>
                <p>Real-time inquiries received from the website contact modal</p>
              </div>
              <button className="admin-action-btn primary" onClick={fetchData}>
                ↻ Refresh Inbox
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="admin-stats-grid">
              <div className="admin-stat-card">
                <div className="admin-stat-label">Total Submissions</div>
                <div className="admin-stat-val">{contacts.length}</div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-label">Unread Inquiries</div>
                <div className="admin-stat-val">
                  {unreadCount}
                  {unreadCount > 0 && <span className="admin-stat-badge badge-unread">Needs Action</span>}
                </div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-label">Replied Messages</div>
                <div className="admin-stat-val">{contacts.filter(c => c.status === 'replied').length}</div>
              </div>
            </div>

            {/* Inquiries Table Card */}
            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Messages ({filteredContacts.length})</h3>
                <div className="admin-table-filters">
                  <input
                    type="text"
                    className="admin-search-input"
                    placeholder="Search sender, email, subject..."
                    value={contactSearch}
                    onChange={(e) => setContactSearch(e.target.value)}
                  />
                  <select
                    className="admin-filter-select"
                    value={contactStatusFilter}
                    onChange={(e) => setContactStatusFilter(e.target.value)}
                  >
                    <option value="all">All Statuses</option>
                    <option value="unread">Unread Only</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </select>
                </div>
              </div>

              <div className="admin-table-container">
                {filteredContacts.length === 0 ? (
                  <p style={{ color: 'var(--admin-text-muted)', textAlign: 'center', padding: '40px 0' }}>
                    No inquiries found matching your filter criteria.
                  </p>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Sender Name</th>
                        <th>Email & Phone</th>
                        <th>Subject</th>
                        <th>Received Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredContacts.map((item) => (
                        <tr key={item._id} style={{ fontWeight: item.status === 'unread' ? 600 : 400 }}>
                          <td>
                            <span className={`status-tag status-${item.status || 'unread'}`}>
                              {item.status || 'unread'}
                            </span>
                          </td>
                          <td style={{ color: item.status === 'unread' ? '#fff' : 'var(--admin-text-main)' }}>
                            {item.name}
                          </td>
                          <td>
                            <div style={{ color: '#fff' }}>{item.email}</div>
                            {item.phone && <small style={{ color: 'var(--admin-text-subtle)' }}>{item.phone}</small>}
                          </td>
                          <td>{item.subject || 'General Inquiry'}</td>
                          <td style={{ color: 'var(--admin-text-muted)', fontSize: '0.82rem' }}>
                            {new Date(item.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </td>
                          <td>
                            <button
                              className="admin-action-btn primary"
                              onClick={() => {
                                setActiveMessageModal(item)
                                if (item.status === 'unread') updateContactStatus(item._id, 'read')
                              }}
                            >
                              View
                            </button>
                            <button
                              className="admin-action-btn delete"
                              onClick={() => deleteContact(item._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Overview & Stats */}
        {activeTab === 'overview' && (
          <div>
            <div className="admin-top-bar">
              <div>
                <h1>ATechSole System Overview</h1>
                <p>Platform metrics and operational diagnostics</p>
              </div>
            </div>

            <div className="admin-stats-grid">
              <div className="admin-stat-card">
                <div className="admin-stat-label">Total Inquiries</div>
                <div className="admin-stat-val">{contacts.length}</div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-label">Unread Messages</div>
                <div className="admin-stat-val" style={{ color: 'var(--admin-cyan)' }}>
                  {unreadCount}
                </div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-label">Published Blogs</div>
                <div className="admin-stat-val">{blogs.length}</div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-label">Active Vacancies</div>
                <div className="admin-stat-val">{careers.filter(c => c.isActive).length}</div>
              </div>
            </div>

            <div className="admin-card">
              <h3 className="admin-card-title">Recent Submissions</h3>
              <div className="admin-table-container" style={{ marginTop: '16px' }}>
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Sender</th>
                      <th>Email</th>
                      <th>Subject</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.slice(0, 5).map(c => (
                      <tr key={c._id}>
                        <td>{c.name}</td>
                        <td>{c.email}</td>
                        <td>{c.subject}</td>
                        <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Blog Management */}
        {activeTab === 'blogs' && (
          <div>
            <div className="admin-top-bar">
              <div>
                <h1>Blog Management</h1>
                <p>Create and manage articles displayed on the website</p>
              </div>
            </div>

            {/* Create Blog Form */}
            <div className="admin-card">
              <h3 className="admin-card-title">Publish New Blog Post</h3>
              <form onSubmit={handleCreateBlog} style={{ marginTop: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div className="admin-form-group">
                    <label>Article Title</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Navigating Generative AI in 2026"
                      value={newBlog.title}
                      onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Tag / Category</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. AI Team, Cloud Team"
                      value={newBlog.tag}
                      onChange={(e) => setNewBlog({ ...newBlog, tag: e.target.value })}
                    />
                  </div>
                  <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Cover Image URL</label>
                    <input
                      type="url"
                      className="admin-input"
                      placeholder="https://images.unsplash.com/..."
                      value={newBlog.image}
                      onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label>Article Summary / Description</label>
                  <textarea
                    className="admin-input"
                    rows="3"
                    placeholder="Brief description of the article..."
                    value={newBlog.description}
                    onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="admin-btn-primary" style={{ width: 'auto', padding: '12px 28px' }}>
                  + Publish Article
                </button>
              </form>
            </div>

            {/* Blogs List */}
            <div className="admin-card">
              <h3 className="admin-card-title">Active Articles ({blogs.length})</h3>
              <div className="admin-table-container" style={{ marginTop: '16px' }}>
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map(b => (
                      <tr key={b._id}>
                        <td style={{ color: '#fff', fontWeight: 600 }}>{b.title}</td>
                        <td><span className="status-tag status-read">{b.tag}</span></td>
                        <td>{b.date || new Date(b.createdAt).toLocaleDateString()}</td>
                        <td>
                          <button className="admin-action-btn delete" onClick={() => handleDeleteBlog(b._id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Careers Management */}
        {activeTab === 'careers' && (
          <div>
            <div className="admin-top-bar">
              <div>
                <h1>Career Opportunities</h1>
                <p>Manage job listings posted to /careers</p>
              </div>
            </div>

            {/* Add Job Form */}
            <div className="admin-card">
              <h3 className="admin-card-title">Post New Job Vacancy</h3>
              <form onSubmit={handleCreateCareer} style={{ marginTop: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div className="admin-form-group">
                    <label>Position Title</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Senior Backend Engineer"
                      value={newCareer.title}
                      onChange={(e) => setNewCareer({ ...newCareer, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Location</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={newCareer.location}
                      onChange={(e) => setNewCareer({ ...newCareer, location: e.target.value })}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Employment Type</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={newCareer.type}
                      onChange={(e) => setNewCareer({ ...newCareer, type: e.target.value })}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Department</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={newCareer.department}
                      onChange={(e) => setNewCareer({ ...newCareer, department: e.target.value })}
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label>Role Overview & Requirements</label>
                  <textarea
                    className="admin-input"
                    rows="3"
                    placeholder="Responsibilities, technical skills, and experience..."
                    value={newCareer.description}
                    onChange={(e) => setNewCareer({ ...newCareer, description: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="admin-btn-primary" style={{ width: 'auto', padding: '12px 28px' }}>
                  + Post Job Listing
                </button>
              </form>
            </div>

            {/* Careers List */}
            <div className="admin-card">
              <h3 className="admin-card-title">Current Openings ({careers.length})</h3>
              <div className="admin-table-container" style={{ marginTop: '16px' }}>
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Department</th>
                      <th>Location</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {careers.map(c => (
                      <tr key={c._id}>
                        <td style={{ color: '#fff', fontWeight: 600 }}>{c.title}</td>
                        <td>{c.department || 'Engineering'}</td>
                        <td>{c.location}</td>
                        <td>
                          <span className={`status-tag ${c.isActive ? 'status-replied' : 'status-read'}`}>
                            {c.isActive ? 'Active' : 'Closed'}
                          </span>
                        </td>
                        <td>
                          <button
                            className="admin-action-btn"
                            onClick={() => toggleCareerActive(c)}
                          >
                            {c.isActive ? 'Close Role' : 'Reactivate'}
                          </button>
                          <button
                            className="admin-action-btn delete"
                            onClick={() => handleDeleteCareer(c._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Account & Security */}
        {activeTab === 'settings' && (
          <div>
            <div className="admin-top-bar">
              <div>
                <h1>Account & Security Settings</h1>
                <p>Manage credentials for the ATechSole admin portal</p>
              </div>
            </div>

            <div className="admin-card" style={{ maxWidth: '600px' }}>
              <h3 className="admin-card-title">Security Credentials</h3>
              <div style={{ marginTop: '16px', marginBottom: '24px', padding: '14px', background: 'rgba(7,9,14,0.6)', borderRadius: '10px' }}>
                <p style={{ margin: '0 0 6px 0', fontSize: '0.85rem', color: 'var(--admin-text-subtle)' }}>LOGGED IN ACCOUNT</p>
                <p style={{ margin: 0, fontWeight: 700, color: '#fff' }}>{currentUser?.email || 'admin@atechsole.com'}</p>
              </div>

              <form onSubmit={handleChangePassword}>
                <div className="admin-form-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    className="admin-input"
                    value={passwordForm.currentPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    className="admin-input"
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-form-group">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    className="admin-input"
                    value={passwordForm.confirmPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="admin-btn-primary" style={{ width: 'auto', padding: '12px 28px' }}>
                  Update Security Password
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Message Modal Details */}
      {activeMessageModal && (
        <div className="admin-modal-backdrop" onClick={() => setActiveMessageModal(null)}>
          <div className="admin-modal-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2>Client Message Details</h2>
              <span className={`status-tag status-${activeMessageModal.status}`}>
                {activeMessageModal.status}
              </span>
            </div>

            <div className="admin-modal-row">
              <span>Sender</span>
              <p>{activeMessageModal.name}</p>
            </div>

            <div className="admin-modal-row">
              <span>Email Address</span>
              <p>
                <a href={`mailto:${activeMessageModal.email}`} style={{ color: 'var(--admin-cyan)', textDecoration: 'none' }}>
                  {activeMessageModal.email}
                </a>
              </p>
            </div>

            {activeMessageModal.phone && (
              <div className="admin-modal-row">
                <span>Phone Number</span>
                <p>{activeMessageModal.phone}</p>
              </div>
            )}

            <div className="admin-modal-row">
              <span>Subject</span>
              <p>{activeMessageModal.subject || 'General Inquiry'}</p>
            </div>

            <div className="admin-modal-row">
              <span>Message</span>
              <div className="admin-modal-msg">{activeMessageModal.message}</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <a
                  href={`mailto:${activeMessageModal.email}?subject=Re: ${encodeURIComponent(activeMessageModal.subject || 'ATechSole Inquiry')}`}
                  className="admin-action-btn primary"
                  style={{ textDecoration: 'none', display: 'inline-block' }}
                  onClick={() => updateContactStatus(activeMessageModal._id, 'replied')}
                >
                  ✉ Reply via Email
                </a>
                {activeMessageModal.status !== 'replied' && (
                  <button
                    className="admin-action-btn"
                    onClick={() => updateContactStatus(activeMessageModal._id, 'replied')}
                  >
                    Mark as Replied
                  </button>
                )}
              </div>
              <button className="admin-action-btn" onClick={() => setActiveMessageModal(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPanel
