import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useScramble } from 'use-scramble'

function FooterLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  const { ref, replay } = useScramble({
    text: label,
    overdrive: false,
    speed: 0.5,
  })

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1.5 text-sm text-term-text-muted no-underline hover:text-term-white"
      onMouseEnter={replay}
    >
      {icon}
      <span ref={ref} />
    </a>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer mt-40 py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-term-text-muted">
          <span className="text-term-text-dim">&copy; {year}</span>{' '}
          <span className="text-term-white">{`{ `}</span>
          <span className="text-term-text-dim">rivenwahnich.dev</span>
          <span className="text-term-white">{` }`}</span>
        </p>

        <div className="flex items-center gap-4">
          <FooterLink
            href="https://github.com/Riiiviii"
            icon={<FaGithub size={14} />}
            label="GitHub"
          />
          <FooterLink
            href="https://www.linkedin.com/in/gabriel-riven-wahnich"
            icon={<FaLinkedin size={14} />}
            label="LinkedIn"
          />
        </div>
      </div>
    </footer>
  )
}
