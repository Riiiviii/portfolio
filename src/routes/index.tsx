import Hero from '#/components/layout/hero.tsx'
import Project from '#/components/layout/projects.tsx'
import Skills from '#/components/layout/skills.tsx'
import Expereience from '#/components/layout/experience.tsx'
import { createFileRoute } from '@tanstack/react-router'
import Contact from '#/components/contact/contact.tsx';
import { Chat } from '#/components/chat/chat.tsx';

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="flex flex-col justify-center">
      <Hero />
      <Project />
      <Expereience />
      <Skills />
      <Contact />
      <Chat />
    </main>
  )
}
