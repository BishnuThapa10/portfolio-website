import React from 'react'

export default function About() {
  const paragraphs = [
    " I’m an aspiring MERN stack developer passionate about building modern web applications. I’m currently learning MongoDB, Express, React, and Node.js to create full-stack projects, and I’m also exploring Next.js and TypeScript to enhance my skills.",
    "I enjoy exploring new technologies, building small projects to apply what I learn, and continuously improving my skills. I’m passionate about writing clean, maintainable code, following best practices, and creating applications that are both functional and user-friendly.",
    "I’m excited to contribute to meaningful projects, develop my skills as a web developer, and continuously expand my knowledge of modern web technologies. ",
    "When I’m not coding, I like spending time with friends and family, playing video games, and exploring the outdoors. I also enjoy learning new skills outside of tech."
  ];
  return (
    <>
      <div className='sticky top-0 z-20 mb-4 w-screen bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
      </div>
      <div>
        {paragraphs.map((text, idx) => (
          <p key={idx} className="mb-4">{text}</p>
        ))}
      </div>
    </>
  )
}
