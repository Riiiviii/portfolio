import { useScramble } from 'use-scramble'

export default function ContactLink({
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
      className="flex items-center gap-2 text-sm text-term-text-muted no-underline hover:text-term-white"
      onMouseEnter={replay}
    >
      {icon}
      <span ref={ref} />
    </a>
  )
}
