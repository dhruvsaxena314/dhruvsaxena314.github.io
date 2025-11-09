import React from 'react'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <div className="min-h-[70vh] flex items-center" style={{background: 'linear-gradient(120deg,#021326 0%, #04293a 40%, #001f2d 100%)', borderRadius: '16px', padding: '48px'}}>
      <div className="max-w-3xl">
        <motion.h1 initial={{y:40, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1, duration:0.6}} className="text-5xl md:text-6xl font-extrabold leading-tight" >
          <span style={{color:'#00ff8a'}}>Dhruv Saxena</span>
        </motion.h1>
        <motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.3}} className="mt-6 text-lg text-gray-300 max-w-2xl">
          ResearchGate Fellow • AI & ML Developer • Deep learning, CV & NLP enthusiast. I build research tools, dashboards and AI prototypes — with a focus on elegant, usable design.
        </motion.p>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}} className="mt-8 flex gap-3">
          <a href="#projects" className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/4">View Projects</a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-white/4">Contact</a>
        </motion.div>
      </div>

      <div className="ml-auto hidden md:block">
        <div className="w-56 h-56 rounded-full ring-1 ring-white/6 overflow-hidden" style={{transform: 'scale(1.05)'}}>
          <img src="https://placehold.co/600x600?text=Profile" alt="profile" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  )
}
