import { useScramble } from 'use-scramble'
import { Button } from './button'

interface ScrambleButtonProps {
  href: string
  icon?: React.ReactNode
  label: string
}

export function ScrambleButton({ href, icon, label }: ScrambleButtonProps) {
  const { ref, replay } = useScramble({
    text: label,
    overdrive: false,
    speed: 0.5,
  })

  const isAnchor = href.startsWith('#')

  return (
    <a
      href={href}
      target={isAnchor ? undefined : '_blank'}
      rel={isAnchor ? undefined : 'noopener noreferrer'}
      onMouseEnter={replay}
    >
      <Button variant="glitch" asChild>
        <span>
          {icon}
          <span ref={ref} />
        </span>
      </Button>
    </a>
  )
}

