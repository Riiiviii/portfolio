import { useEffect, useState } from 'react'
import Navbar from './navbar'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 flex justify-between bg-(--term-bg) py-4 transition-all duration-300 items-center ${
        scrolled ? 'border-b border-white' : 'border-b border-transparent'
      }`}
    >
      <h1 className="text-term-text">
        <span className="text-term-white">{`{ `}</span>
        {`riv.dev`}
        <span className="text-term-white">{` }`}</span>
      </h1>
      <Navbar />
    </header>
  )
}
