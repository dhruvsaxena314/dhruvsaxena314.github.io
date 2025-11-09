import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="border-t border-white/6 mt-12 py-6">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-sm text-gray-400">© {new Date().getFullYear()} Dhruv Saxena</div>
        <div className="flex gap-3">
          <a href="https://github.com/dhruvisgood" target="_blank" rel="noreferrer" className="p-2 rounded border border-white/6"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/dhruv-saxena-3a2b4e7a/" target="_blank" rel="noreferrer" className="p-2 rounded border border-white/6"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  )
}
