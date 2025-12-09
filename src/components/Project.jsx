import React from 'react'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Image from 'next/image.js';
import { projects } from '../data/project.js';
import { IoLogoGithub } from "react-icons/io";
import { HiMiniArrowRight } from "react-icons/hi2";

export default function Project() {
  return (
    <>
      <div className='sticky top-0 z-20 mb-4 w-screen bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Projects</h2>
      </div>

      <div>
        <ul className='group/list'>
          {projects && projects.map((project) => {
            return <li key={project.id} className='mb-12'>
              <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50'>
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                <div className='z-10 sm:order-2 sm:col-span-6'>
                  <h3>
                    <a className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base' href={project.links.demo} target='_blank' rel='noreferrer noopener' aria-label={project.aria_label}>
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title_first} {' '}
                        <span className='inline-block'>
                          {project.title_last}
                          <HiMiniArrowUpRight className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' aria-hidden="true" />
                        </span>
                      </span>

                    </a>
                  </h3>

                  <p className='mt-2 text-sm leading-normal'>
                    {project.summary}
                  </p>

                  <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" href={project.links.github} target='_blank' rel='noreferrer noopener' aria-label="GitHub (opens in a new tab)">
                    <span>GitHub</span>
                    <IoLogoGithub className='ml-1 h-4 w-4' />
                  </a>

                  <ul className='mt-2 flex flex-wrap' aria-label='Technologies used:'>
                    {project.tech && project.tech.map((t, i) => (
                      <li key={i} className='mr-1.5 mt-2'>
                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-400'>{t}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <Image className='aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1' width={200} height={48} src={project.images} alt={project.alt} />
              </div>
            </li>
          }
          )}
        </ul>

        <div className='mt-12'>
          <a 
          className="inline-flex items-center font-medium leading-tight text-slate-200 cursor-not-allowed group" aria-label="View Full Project Archive" href="#">
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full Project {' '}</span>
              <span className='whitespace-nowrap'>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Archive</span>
                <HiMiniArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"/>
              </span>
            </span>
          </a>
        </div>
      </div>
    </>
  )
}
