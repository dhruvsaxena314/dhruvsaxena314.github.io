import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminPanel from './components/AdminPanel'
import { seedProjects, seedBlogs } from './data/seed'

function App(){
  useEffect(() => {
    // initialize localStorage for demo/admin
    if(!localStorage.getItem('projects')) {
      localStorage.setItem('projects', JSON.stringify(seedProjects))
    }
    if(!localStorage.getItem('blogs')) {
      localStorage.setItem('blogs', JSON.stringify(seedBlogs))
    }
  },[])

  return (
    <div className="min-h-screen text-gray-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <section id="home" className="pt-20"><Home /></section>
        <section id="about" className="pt-24"><About /></section>
        <section id="skills" className="pt-24"><Skills /></section>
        <section id="projects" className="pt-24"><Projects /></section>
        <section id="contact" className="pt-24 pb-24"><Contact /></section>
        <section id="admin" className="pt-12"><AdminPanel /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
