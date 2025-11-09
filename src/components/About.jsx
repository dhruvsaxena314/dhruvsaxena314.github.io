import React from 'react'
import { motion } from 'framer-motion'
import resumeData from '../data/seed'

export default function About(){
  // use resume text from uploaded file via localStorage? We'll show a short bio using the provided resume.
  const summary = `A dedicated ResearchGate Fellow with background in AI development, scientific writing and ImagoPedia creation. Interested in AI for research, biology-inspired models and practical ML tools.`
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="grid md:grid-cols-2 gap-8 items-center">
      <div className="card">
        <div className="flex items-center gap-6">
          <div className="w-36 h-36 rounded-full overflow-hidden ring-2 ring-white/8">
            <img src="https://placehold.co/600x600?text=Dhruv" alt="Dhruv Saxena" className="w-full h-full object-cover"/>
          </div>
          <div>
            <h3 className="text-2xl font-bold" style={{color:'#00ff8a'}}>Dhruv Saxena</h3>
            <p className="mt-2 text-gray-200">Research Fellow · AI & ML developer · Student Partner</p>
            <p className="mt-4 text-sm text-gray-300">{summary}</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-3" style={{color:'#00ff8a'}}>Quick highlights</h4>
        <ul className="space-y-3 text-gray-300">
          <li>• Junior Research Fellow @ ResearchGate — literature & project research</li>
          <li>• Developed ImagoPedia — an AI tool for images and annotation</li>
          <li>• Winner of international quizzes; strong scientific writing & presentations</li>
          <li>• Languages: English (C1), Hindi (C2), French (A2), Japanese (A1)</li>
        </ul>
      </div>
    </motion.div>
  )
}
