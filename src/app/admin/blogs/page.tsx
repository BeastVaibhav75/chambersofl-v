'use client'

import { useEffect, useState } from 'react'

type Post = {
  slug: string
  title: string
  excerpt: string
}

export default function AdminBlogsPage() {
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [form, setForm] = useState({ title: '', excerpt: '', content: '', category: '' })

  const fetchPosts = () => {
    fetch('/api/blogs')
      .then(async (r) => (r.ok ? r.json() : Promise.reject(await r.text())))
      .then((d) => setPosts(d.items || []))
      .catch(() => setPosts([]))
  }

  useEffect(() => { fetchPosts() }, [])

  const login = async () => {
    setLoading(true); setError(null)
    const res = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) })
    setLoading(false)
    if (res.ok) { setIsAuthed(true); fetchPosts() } else { setError('Invalid password') }
  }

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    setIsAuthed(false)
  }

  const createPost = async () => {
    setLoading(true); setError(null)
    const res = await fetch('/api/blogs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setLoading(false)
    if (res.ok) { setForm({ title: '', excerpt: '', content: '', category: '' }); fetchPosts() } else { setError('Failed to create post') }
  }

  if (!isAuthed) {
    return (
      <div className="pt-16 section-padding">
        <div className="container-custom max-w-md">
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Admin Password" className="w-full px-4 py-3 border rounded-lg mb-3" />
          <button onClick={login} className="btn-primary w-full" disabled={loading}>Login</button>
          {error && <p className="text-red-600 mt-3">{error}</p>}
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 section-padding">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Manage Blog Posts</h1>
          <button onClick={logout} className="btn-secondary">Logout</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="font-semibold mb-4">Create New Post</h2>
            <div className="space-y-3">
              <input className="w-full px-4 py-3 border rounded-lg" placeholder="Title" value={form.title} onChange={(e)=>setForm({...form, title: e.target.value})} />
              <input className="w-full px-4 py-3 border rounded-lg" placeholder="Excerpt" value={form.excerpt} onChange={(e)=>setForm({...form, excerpt: e.target.value})} />
              <input className="w-full px-4 py-3 border rounded-lg" placeholder="Category" value={form.category} onChange={(e)=>setForm({...form, category: e.target.value})} />
              <textarea className="w-full px-4 py-3 border rounded-lg h-40" placeholder="Content (HTML or plain text)" value={form.content} onChange={(e)=>setForm({...form, content: e.target.value})} />
              <button onClick={createPost} className="btn-primary">Publish</button>
              {error && <p className="text-red-600">{error}</p>}
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Existing Posts</h2>
            <div className="space-y-3">
              {posts.map(p => (
                <div key={p.slug} className="card flex items-center justify-between">
                  <div>
                    <p className="font-medium">{p.title}</p>
                    <p className="text-sm text-gray-500">/{p.slug}</p>
                  </div>
                  <a className="btn-secondary" href={`/blog/${p.slug}`} target="_blank">View</a>
                </div>
              ))}
              {posts.length === 0 && <p className="text-gray-600">No posts yet.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


