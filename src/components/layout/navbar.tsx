import { useScramble } from 'use-scramble'
import { Button } from '../ui/button'

const navbarItems = [
  { href: '#home', name: 'Home' },
  { href: '#projects', name: 'Projects' },
  { href: '#experience', name: 'Experience' },
  { href: '#skills', name: 'Skills' },
  { href: '#contact', name: 'Contact' },
]

function NavItem({ href, name }: { href: string; name: string }) {
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
      >
        <span ref={ref} />
      </a>
    </Button>
  )
}

export default function Navbar() {
  return (
    <nav>
      {navbarItems.map((link) => (
        <NavItem key={link.href} href={link.href} name={link.name} />
      ))}
    </nav>
  )
}
