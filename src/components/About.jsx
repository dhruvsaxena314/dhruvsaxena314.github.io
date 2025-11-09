import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 items-center">
      <div className="card flex items-center gap-6">
        <img src="https://placehold.co/150x150?text=Dhruv" className="rounded-full ring-2 ring-white/10" />
        <div>
          <h3 className="text-accent text-2xl font-bold">Dhruv Saxena</h3>
          <p className="text-gray-300 mt-2 text-sm">
            ResearchGate Fellow and AI developer passionate about deep learning,
            computer vision & NLP, blending research with clean design.
          </p>
        </div>
      </div>
      <ul className="space-y-2 text-gray-300">
        <li>• AI / ML model building – PyTorch, Scikit-learn</li>
        <li>• Dashboard + Frontend development – React, Tailwind</li>
        <li>• Research and technical writing</li>
        <li>• Languages: English, Hindi, French, Japanese</li>
      </ul>
    </motion.div>
  );
}
