import React from 'react'

export default function ProjectSection() {
  return (
    <div id="projects" className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-2xl shadow bg-white">
          <h3 className="text-xl font-bold mb-2">To-Do App</h3>
          <p>A simple CRUD application using MERN stack.</p>
          <a href="#" className="text-blue-500 underline">GitHub</a>
        </div>
        <div className="p-4 rounded-2xl shadow bg-white">
          <h3 className="text-xl font-bold mb-2">E-Commerce Mini Store</h3>
          <p>Product listing, cart functionality, and order summary.</p>
          <a href="#" className="text-blue-500 underline">GitHub</a>
        </div>
      </div>
    </div>
  )
}
