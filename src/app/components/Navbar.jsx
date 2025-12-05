'use client'

import React from 'react'

export default function Navbar() {

  const links = [
    { label: 'About', to: '#about', id: 'about' },
    { label: 'Experience', to: '#experience', id: 'experience' },
    { label: 'Projects', to: '#projects', id: 'projects' },
  ];

  return (
    <>
      <h1 className='text-4xl sm:text-5xl text-slate-200 tracking-tight'>
        <a href="/">Bishnu Thapa</a>
      </h1>
      <h2 className='text-lg sm:text-xl text-slate-200 tracking-tight mt-2'>Web Developer</h2>
      <p className='max-w-xs mt-3 leading-normal'>I focus on writing clean code and building practical, scalable solutions with the MERN stack.</p>

      <nav className='hidden lg:block' aria-label="In-page jump links">
        <ul className="mt-8 w-max">
          {links.map((link, i) => (
            <li key={i}>
              <a className='group flex items-center py-3' href={link.to}>
                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest transition-colors text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 motion-reduce:transition-none'>{link.label}</span>
              </a>
            </li>
          ))}

        </ul>
      </nav>
    </>
  )
}
