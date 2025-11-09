import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = ["home", "about", "skills", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-20 backdrop-blur bg-[#021326]/70"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-accent font-bold text-xl">Dhruv<span className="text-white">.</span></a>
        <div className="hidden md:flex gap-6">
          {items.map(i => <a key={i} href={`#${i}`} className="hover:text-white">{i}</a>)}
          <a href="#admin" className="border px-3 py-1 rounded-lg border-white/10 hover:bg-white/5 text-sm">Admin</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden"><GiHamburgerMenu /></button>
      </div>
      {open && (
        <div className="md:hidden bg-[#001624] border-t border-white/10 px-6 py-4 flex flex-col gap-3">
          {items.map(i => <a key={i} href={`#${i}`} onClick={() => setOpen(false)}>{i}</a>)}
          <a href="#admin">Admin</a>
        </div>
      )}
    </motion.nav>
  );
}
