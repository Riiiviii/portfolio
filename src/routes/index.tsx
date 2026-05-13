import Contact from '#/components/sections/contact/contact'
import Hero from '#/components/sections/hero'
import Project from '#/components/sections/projects'
import Skills from '#/components/sections/skills'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="flex flex-col justify-center">
      <Hero />
      <Project />
      <Skills />
      <Contact />
    </main>
  )
}
