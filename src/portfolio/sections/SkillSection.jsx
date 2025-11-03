import React from 'react'

export default function SkillSection() {
  return (
    <div id="skills" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-white rounded-2xl shadow">HTML</div>
        <div className="p-4 bg-white rounded-2xl shadow">CSS</div>
        <div className="p-4 bg-white rounded-2xl shadow">JavaScript</div>
        <div className="p-4 bg-white rounded-2xl shadow">React</div>
        <div className="p-4 bg-white rounded-2xl shadow">Node.js</div>
        <div className="p-4 bg-white rounded-2xl shadow">Express.js</div>
        <div className="p-4 bg-white rounded-2xl shadow">MongoDB</div>
        <div className="p-4 bg-white rounded-2xl shadow">Git</div>
      </div>
    </div>
  )
}
