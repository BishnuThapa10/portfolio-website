import React from 'react'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Image from 'next/image.js';

export default function Project() {
  return (
    <>
      <div className='sticky top-0 z-20 mb-4 w-screen bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Projects</h2>
      </div>

      <div>
        <ul className='group/list'>
          <li className='mb-12'>
            <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50'>
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              <div className='z-10 sm:order-2 sm:col-span-6'>
                <h3>
                  <a className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base' href="https://e-commerce-seven-tau-74.vercel.app/" target='_blank' rel='noreferrer noopener' aria-label='Online Furniture Store (open in a new tab)'>
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Online Furniture{' '}
                      <span className='inline-block'>
                        Store
                        <HiMiniArrowUpRight className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' aria-hidden="true" />
                      </span>
                    </span>
                  </a>
                </h3>
                <p className='mt-2 text-sm leading-normal'>
                  Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
                </p>

                <ul className='mt-2 flex flex-wrap' aria-label='Technologies used:'>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-400'>React</div>
                  </li>

                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-400'>React</div>
                  </li>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-400'>React</div>
                  </li>
                </ul>
              </div>
              <Image className='aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1' width={200} height={48} src="/furniture_store.png" alt="Online Furniture Store Photo" />
            </div>
          </li>

          <li className='mb-12'>
            <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50'>
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              <div className='z-10 sm:order-2 sm:col-span-6'>
                <h3>
                  <a className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base' href="" target='_blank' rel='noreferrer noopener' aria-label='Online Furniture Store (open in a new tab)'>
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Online Furniture
                      <span className='inline-block'>Store
                        <HiMiniArrowUpRight className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' aria-hidden="true" />
                      </span>
                    </span>
                  </a>
                </h3>
                <p className='mt-2 text-sm leading-normal'>
                  Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
                </p>
              </div>
              <Image className='aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1' width={200} height={48} src="/furniture_store.png" alt="Online Furniture Store Photo" />
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
