import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-[70vh] flex items-center rounded-2xl p-8 bg-hero-gradient">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          <span className="text-accent">Dhruv Saxena</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg text-gray-300"
        >
          Research Fellow · AI & ML Developer · Building elegant, intelligent, research-driven tools.
        </motion.p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5">View Projects</a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-white/10">Contact</a>
        </div>
      </div>
      <div className="ml-auto hidden md:block">
        <img src="https://placehold.co/250x250?text=Profile" alt="" className="rounded-full ring-1 ring-white/10" />
      </div>
    </div>
  );
}
