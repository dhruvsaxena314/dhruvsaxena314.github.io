import React, { useEffect, useState } from 'react'

export default function BlogList(){
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    setBlogs(JSON.parse(localStorage.getItem('blogs') || '[]'))
  },[])
  return (
    <div className="mt-6">
      <h5 className="text-lg font-semibold" style={{color:'#00ff8a'}}>Notes & Blog</h5>
      <div className="mt-3 space-y-3">
        {blogs.map(b => (
          <div key={b.id} className="card">
            <div className="flex justify-between items-start">
              <div>
                <h6 className="font-semibold">{b.title}</h6>
                <p className="text-sm text-gray-300 mt-1">{b.summary}</p>
              </div>
              <div className="text-xs text-gray-400">{b.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
