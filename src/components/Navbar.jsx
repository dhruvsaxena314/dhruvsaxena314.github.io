import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion } from 'framer-motion'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav initial={{y:-20, opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}} className="fixed w-full z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold text-xl" style={{color:'#00ff8a'}}>Dhruv<span className="text-gray-200">.</span></a>
        <div className="hidden md:flex gap-6 items-center">
          {items.map(i => (
            <a key={i.id} href={`#${i.id}`} className="hover:text-white transition">{i.label}</a>
          ))}
          <a href="#admin" className="ml-4 text-sm border border-white/10 px-3 py-2 rounded-lg hover:bg-white/4">Admin</a>
        </div>

        <div className="md:hidden">
          <button onClick={()=>setOpen(!open)} className="p-2">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#001624] border-t border-white/6">
          <div className="flex flex-col px-6 py-4 gap-3">
            {items.map(i => (<a key={i.id} href={`#${i.id}`} onClick={()=>setOpen(false)}>{i.label}</a>))}
            <a href="#admin" className="mt-2">Admin</a>
          </div>
        </div>
      )}
    </motion.nav>
  )
}
