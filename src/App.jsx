import React from 'react'
import HeroSection from './portfolio/sections/HeroSection.jsx'
import AboutSection from './portfolio/sections/AboutSection.jsx'
import SkillSection from './portfolio/sections/SkillSection.jsx'
import ProjectSection from './portfolio/sections/ProjectSection.jsx'
import ContactSection from './portfolio/sections/ContactSection.jsx'

export default function App() {
  return (
      <div className="font-sans">
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>

</div>
  )
}
