import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contact(){
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card">
        <h4 className="text-xl font-semibold" style={{color:'#00ff8a'}}>Get in touch</h4>
        <p className="mt-3 text-gray-300">I am available for collaborations and research projects.</p>

        <div className="mt-6 flex gap-4">
          <a className="p-3 rounded-lg border border-white/6" href="https://www.linkedin.com/in/dhruv-saxena-3a2b4e7a/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a className="p-3 rounded-lg border border-white/6" href="https://github.com/dhruvisgood" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a className="p-3 rounded-lg border border-white/6" href="mailto:dhruvisgood13@gmail.com"><FaEnvelope /></a>
        </div>
      </div>

      <form className="card" action="https://formspree.io/f/xzzkvjjk" method="POST">
        <h4 className="text-xl font-semibold" style={{color:'#00ff8a'}}>Message</h4>
        <label className="block mt-4">
          <input name="name" required placeholder="Your name" className="w-full bg-transparent border border-white/6 rounded px-3 py-2" />
        </label>
        <label className="block mt-4">
          <input name="email" type="email" required placeholder="you@example.com" className="w-full bg-transparent border border-white/6 rounded px-3 py-2" />
        </label>
        <label className="block mt-4">
          <textarea name="message" rows="5" required placeholder="Message" className="w-full bg-transparent border border-white/6 rounded px-3 py-2"></textarea>
        </label>
        <div className="mt-4">
          <button type="submit" className="px-4 py-2 rounded bg-white/6">Send</button>
        </div>
      </form>
    </div>
  )
}
