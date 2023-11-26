import Image from 'next/image'
import Hero from './coponents/hero'
import Contact from './coponents/contact'
import Project from './coponents/project'
import About from './coponents/about'
import Skill from './coponents/skill'

export default function Home() {
  return (
    <div>
      <Hero/>
      <About />
      <Skill />
      <Project />
      <Contact />
      <p></p>
    </div>
  )
}
