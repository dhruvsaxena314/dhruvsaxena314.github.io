import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import AdminPanel from "./components/AdminPanel.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <section id="home" className="pt-24"><Home /></section>
        <section id="about" className="pt-24"><About /></section>
        <section id="skills" className="pt-24"><Skills /></section>
        <section id="projects" className="pt-24"><Projects /></section>
        <section id="contact" className="pt-24"><Contact /></section>
        <section id="admin" className="pt-24 pb-24"><AdminPanel /></section>
      </main>
      <Footer />
    </div>
  );
}
