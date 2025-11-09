import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12 py-6 text-sm flex justify-between items-center max-w-6xl mx-auto px-6">
      <span>© {new Date().getFullYear()} Dhruv Saxena</span>
      <div className="flex gap-3">
        <a href="https://github.com/dhruvisgood" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/dhruv-saxena-3a2b4e7a" target="_blank"><FaLinkedin /></a>
      </div>
    </footer>
  );
}
