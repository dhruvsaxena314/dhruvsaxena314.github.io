import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

export default function Projects(){
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem('projects') || '[]')
    setProjects(p)
  },[])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold" style={{color:'#00ff8a'}}>Selected Projects</h3>
        <p className="text-sm text-gray-400">Selected works & research prototypes</p>
      </div>

      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="grid md:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.id} p={p} />)}
      </motion.div>
    </div>
  )
}
