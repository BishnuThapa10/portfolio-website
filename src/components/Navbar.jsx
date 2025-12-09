'use client'

import React, { useEffect, useState } from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export default function Navbar() {

  const links = [
    { label: 'About', to: '#about', id: 'about' },
    { label: 'Projects', to: '#projects', id: 'projects' },
    { label: 'Certifications', to: '#certifications', id: 'certifications' },
  ];

  const [activeId, setActiveId] = useState(links[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -60% 0px', // middle of screen
        threshold: 0,
      }
    )

    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <h1 className='text-4xl sm:text-5xl text-slate-200 tracking-tight'>
        <a href="/">Bishnu Thapa</a>
      </h1>
      <h2 className='text-lg sm:text-xl text-slate-200 tracking-tight mt-2'>Web Developer</h2>
      <p className='max-w-xs mt-3 leading-normal'>I focus on writing clean code and building practical, scalable solutions with the MERN stack.</p>

      <nav className='hidden lg:block' aria-label="In-page jump links">
        <ul className="mt-8 w-max">
          {links.map((link) => {
            const isActive = activeId === link.id
            return (
              <li key={link.id}>
                <a
                  className='group flex items-center py-3'
                  aria-current={activeId === link.id ? "page" : undefined} // semantic active
                  onClick={() => setActiveId(link.id)}
                  href={link.to}>
                  <span className={`nav-indicator mr-4 h-px w-8  transition-all motion-reduce:transition-none ${isActive ? 'w-16 bg-slate-200' : 'bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 '}`}></span>
                  <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors  motion-reduce:transition-none ${isActive ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'}`}>{link.label}</span>
                </a>
              </li>
            )
          })}

        </ul>
      </nav>

      <ul className='ml-1 mt-8 flex items-center' aria-label='Social Media'>

        <li className='mr-5 shrink-0 text-xs'>
          <a className='block hover:text-slate-200' href="" target='_blank' rel='noreferrer noopener' aria-label='Github (open in new tab)' title='Github'>
            <span className='sr-only'>Github</span>
            <SiGithub className='h-6 w-6' aria-hidden="true" />
          </a>
        </li>

        <li className='mr-5 shrink-0 text-xs'>
          <a className='block hover:text-slate-200' href="" target='_blank' rel='noreferrer noopener' aria-label='LinkedIn (open in new tab)' title='LinkedIn'>
            <span className='sr-only'>LinkedIn</span>
            <SiLinkedin className='h-6 w-6' aria-hidden="true" />
          </a>
        </li>

      </ul>
    </>
  )
}
