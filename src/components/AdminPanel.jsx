import React, { useState, useEffect } from 'react'
import BlogList from './BlogList'
import { v4 as uuidv4 } from 'uuid'

/**
 * Client-side admin demo:
 * - Only allows login when email === 'dhruvisgood13@gmail.com'
 * - Change ADMIN_PASSWORD below before public use.
 *
 * For production: replace with server-side auth.
 */

const ADMIN_EMAIL = 'dhruvisgood13@gmail.com'
// Set an admin password. Change this constant before pushing to a public repo.
const ADMIN_PASSWORD = 'set-a-strong-password'

function useLocalStorage(key){
  const [state, setState] = useState(() => {
    try {
      const s = localStorage.getItem(key)
      return s ? JSON.parse(s) : null
    } catch(e) { return null }
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  return [state, setState]
}

export default function AdminPanel(){
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects') || '[]'))
  const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem('blogs') || '[]'))
  const [newProj, setNewProj] = useState({title:'', description:'', img:'', tags:'', url:''})
  const [newBlog, setNewBlog] = useState({title:'', summary:''})

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects])

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs))
  }, [blogs])

  function login(e){
    e.preventDefault()
    if(email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD){
      setUser({email})
      setEmail('')
      setPassword('')
      alert('Admin logged in (client demo).')
    } else {
      alert('Invalid admin credentials.')
    }
  }

  function logout(){ setUser(null) }

  function addProject(e){
    e.preventDefault()
    const p = {...newProj, id: uuidv4(), tags: newProj.tags.split(',').map(t=>t.trim()).filter(Boolean)}
    setProjects([p, ...projects])
    setNewProj({title:'', description:'', img:'', tags:'', url:''})
  }

  function addBlog(e){
    e.preventDefault()
    const b = {...newBlog, id: uuidv4(), date: new Date().toISOString().slice(0,10)}
    setBlogs([b, ...blogs])
    setNewBlog({title:'', summary:''})
  }

  function removeProject(id){
    if(confirm('Remove project?')) setProjects(projects.filter(p=>p.id!==id))
  }
  function removeBlog(id){
    if(confirm('Remove blog?')) setBlogs(blogs.filter(b=>b.id!==id))
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4" style={{color:'#00ff8a'}}>Admin</h3>

      {!user ? (
        <form onSubmit={login} className="card max-w-md">
          <p className="text-sm text-gray-300">Admin login (client demo). Use the admin email <strong>{ADMIN_EMAIL}</strong>.</p>
          <label className="block mt-3">
            <input placeholder="Email" className="w-full bg-transparent border border-white/6 rounded px-3 py-2" value={email} onChange={e=>setEmail(e.target.value)} required />
          </label>
          <label className="block mt-3">
            <input placeholder="Password" type="password" className="w-full bg-transparent border border-white/6 rounded px-3 py-2" value={password} onChange={e=>setPassword(e.target.value)} required />
          </label>
          <div className="mt-3 flex gap-3">
            <button type="submit" className="px-4 py-2 rounded bg-white/6">Login</button>
          </div>
          <p className="mt-3 text-xs text-gray-400">Change ADMIN_PASSWORD in <code>src/components/AdminPanel.jsx</code> before sharing publicly.</p>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="text-sm">Signed in as <strong>{user.email}</strong></div>
            <button onClick={logout} className="px-3 py-1 rounded border border-white/6">Logout</button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h5 className="font-semibold">Add Project</h5>
              <form onSubmit={addProject} className="mt-3 space-y-2">
                <input value={newProj.title} onChange={e=>setNewProj({...newProj, title:e.target.value})} required placeholder="Title" className="w-full bg-transparent border border-white/6 rounded px-3 py-2" />
                <input value={newProj.img} onChange={e=>setNewProj({...newProj, img:e.target.value})} placeholder="Image URL" className="w-full bg-transparent border border-white/6 rounded px-3 py-2" />
                <input value={newProj.tags} onChange={e=>setNewProj({...newProj, tags:e.target.value})} placeholder="tags (comma separated)" className="w-full bg-transparent border border-white/6 rounded px-3 py-2" />
                <input value={newProj.url} onChange={e=>setNewProj({...newProj, url:e.target.value})} placeholder="project link (optional)" className="w-full bg-transparent border border-white/6 rounded px-3 py-2" />
                <textarea value={newProj.description} onChange={e=>setNewProj({...newProj, description:e.target.value})} rows={4} placeholder="Short description" className="w-full bg-transparent border border-white/6 rounded px-3 py-2" />
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded bg-white/6">Add</button>
                </div>
              </form>
            </div>

            <div className="card">
              <h5 className="font-semibold">Add Blog / Note</h5>
              <form onSubmit={addBlog} className="mt-3 space-y-2">
                <input value={newBlog.title} onChange={e=>setNewBlog({...newBlog, title:e.target.value})} required placeholder="Title" className="w-full bg-transparent border border-white/6 rounded px-3 py-2" />
                <textarea value={newBlog.summary} onChange={e=>setNewBlog({...newBlog, summary:e.target.value})} rows={4} placeholder="Short summary" className="w-full bg-transparent border border-white/6 rounded px-3 py-2" />
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded bg-white/6">Add Blog</button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Manage Projects</h5>
            <div className="space-y-3">
              {projects.map(p => (
                <div key={p.id} className="card flex items-center justify-between">
                  <div>
                    <div className="font-semibold" style={{color:'#00ff8a'}}>{p.title}</div>
                    <div className="text-xs text-gray-400">{p.tags?.join(', ')}</div>
                  </div>
                  <div className="flex gap-2">
                    <a className="text-sm px-3 py-1 border rounded" href={p.url || '#'} target="_blank" rel="noreferrer">Open</a>
                    <button onClick={()=>removeProject(p.id)} className="text-sm px-3 py-1 border rounded">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Manage Blogs</h5>
            <div className="space-y-3">
              {blogs.map(b => (
                <div key={b.id} className="card flex items-center justify-between">
                  <div>
                    <div className="font-semibold" style={{color:'#00ff8a'}}>{b.title}</div>
                    <div className="text-xs text-gray-400">{b.date}</div>
                  </div>
                  <div>
                    <button onClick={()=>removeBlog(b.id)} className="text-sm px-3 py-1 border rounded">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
