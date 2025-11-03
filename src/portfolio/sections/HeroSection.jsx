import React from 'react'

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4">Bishnu Thapa</h1>
      <p className="text-xl mb-6">Full Stack MERN Developer</p>
      <a href="#projects" className="px-6 py-3 bg-gray-800 text-white rounded-2xl shadow hover:opacity-80">View Projects</a>
    </div>
  )
}
