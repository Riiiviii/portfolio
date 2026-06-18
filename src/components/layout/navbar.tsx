import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useScramble } from 'use-scramble'
import { Button } from '../ui/button'

const navbarItems = [
  { href: '#home', name: 'Home' },
  { href: '#projects', name: 'Projects' },
  { href: '#experience', name: 'Experience' },
  { href: '#skills', name: 'Skills' },
  { href: '#contact', name: 'Contact' },
]

function NavItem({
  href,
  name,
  onClick,
}: {
  href: string
  name: string
  onClick?: () => void
}) {
  const { ref, replay } = useScramble({
    text: name,
    overdrive: false,
    speed: 0.5,
  })

  return (
    <Button asChild variant="nav">
      <a
        href={href}
        className="text-term-text-dim no-underline hover:text-term-white"
        onMouseEnter={replay}
        onClick={onClick}
      >
        <span ref={ref} />
      </a>
    </Button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative">
      <div className="hidden items-center sm:flex">
        {navbarItems.map((link) => (
          <NavItem key={link.href} href={link.href} name={link.name} />
        ))}
      </div>

      <Button
        variant="nav"
        size="icon"
        className="text-term-text-dim hover:text-term-white sm:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open && (
        <div className="absolute top-full right-0 z-50 mt-2 flex w-44 flex-col border border-term-grey-3 bg-(--term-bg) p-1 sm:hidden">
          {navbarItems.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              name={link.name}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  )
}
