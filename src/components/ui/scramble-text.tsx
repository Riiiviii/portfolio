import { useEffect, useState } from 'react'
import { useScramble } from 'use-scramble'

interface CyclingScrambleProps {
  texts: string[]
  delay?: number
  speed?: number
  className?: string
}

export function CyclingScramble({
  texts,
  delay = 4000,
  speed = 0.5,
  className,
}: CyclingScrambleProps) {
  const [index, setIndex] = useState(0)

  const { ref, replay } = useScramble({
    text: texts[index],
    overdrive: false,
    speed,
    onAnimationEnd: () => {
      setTimeout(() => {
        setIndex((i) => (i + 1) % texts.length)
      }, delay)
    },
  })

  useEffect(() => {
    replay()
  }, [index])

  return <span ref={ref} className={className} />
}
