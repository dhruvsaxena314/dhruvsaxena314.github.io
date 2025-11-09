import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {title:'Machine Learning', details:'Numpy, Pandas, Scikit-learn, DL'},
  {title:'Deep Learning', details:'CNNs, Transformers, PyTorch'},
  {title:'NLP', details:'Text embeddings, LLM tooling'},
  {title:'Computer Vision', details:'Image models, segmentation'},
  {title:'Research', details:'Paper reviews, collaboration'}
]

export default function Skills(){
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6" style={{color:'#00ff8a'}}>Skills & Experience</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, idx) => (
          <motion.div key={idx} whileHover={{y:-6}} className="card">
            <h5 className="font-semibold">{it.title}</h5>
            <p className="mt-2 text-sm text-gray-300">{it.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
