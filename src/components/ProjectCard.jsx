import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({p}){
  return (
    <motion.div whileHover={{scale:1.02}} className="relative rounded-xl overflow-hidden border border-white/6">
      <img src={p.img || 'https://placehold.co/600x400'} alt={p.title} className="w-full h-44 object-cover"/>
      <div className="p-4">
        <h4 className="font-semibold" style={{color:'#00ff8a'}}>{p.title}</h4>
        <p className="text-sm text-gray-300 mt-2">{p.description}</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-4">
        <div>
          <p className="text-sm">{p.tags?.join(' • ')}</p>
          <div className="mt-2 flex gap-2">
            {p.url ? <a href={p.url} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded bg-white/5">View</a> : null}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
