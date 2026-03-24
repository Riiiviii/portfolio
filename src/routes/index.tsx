import Hero from '#/components/sections/hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="flex flex-col justify-center">
      <Hero />
    </main>
  )
}
