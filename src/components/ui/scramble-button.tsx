import { useScramble } from 'use-scramble'
import { Button } from './button'

interface ScrambleButtonProps {
  icon?: React.ReactNode
  label: string
}

export function ScrambleButton({ icon, label }: ScrambleButtonProps) {
  const { ref, replay } = useScramble({
    text: label,
    overdrive: false,
    speed: 0.5,
  })

  return (
    <Button variant="glitch" onMouseEnter={replay}>
      {icon}
      <span ref={ref} />
    </Button>
  )
}
