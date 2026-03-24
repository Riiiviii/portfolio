import { Button } from '../ui/button'

const navbarItems = [
  { href: '#home', name: 'Home' },
  { href: '#projects', name: 'Projects' },
  { href: '#experience', name: 'Experience' },
  { href: '#skills', name: 'Skills' },
  { href: '#contact', name: 'Contact' },
]

export default function Navbar() {
  return (
    <nav>
      {navbarItems.map((link) => (
        <Button key={link.href} asChild variant="nav">
          <a
            className="text-term-text-dim no-underline hover:text-term-white"
            href={link.href}
          >
            {link.name}
          </a>
        </Button>
      ))}
    </nav>
  )
}
