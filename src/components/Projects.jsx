import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("projects") || "[]");
    if (!saved.length) {
      localStorage.setItem(
        "projects",
        JSON.stringify([
          {
            id: 1,
            title: "ImagoPedia — AI Image Assistant",
            desc: "AI tool for image summaries and annotations.",
            img: "https://placehold.co/600x400?text=ImagoPedia"
          },
          {
            id: 2,
            title: "Research Dashboard",
            desc: "Dashboard for tracking papers and collaboration.",
            img: "https://placehold.co/600x400?text=Dashboard"
          }
        ])
      );
    }
    setProjects(JSON.parse(localStorage.getItem("projects") || "[]"));
  }, []);

  return (
    <div>
      <h3 className="text-accent text-2xl font-semibold mb-6">Projects</h3>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.id} className="card overflow-hidden">
            <img src={p.img} alt="" className="rounded-md mb-3" />
            <h4 className="text-accent font-semibold">{p.title}</h4>
            <p className="text-sm text-gray-300 mt-1">{p.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
