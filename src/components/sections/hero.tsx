import { Download, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useScramble } from 'use-scramble'
import { Button } from '../ui/button'

function ScrambleButton({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
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

export default function Hero() {
  return (
    <section id="home" className="mt-45">
      <div className="grid items-center gap-10 md:grid-cols-[3fr_2fr]">
        <div className="flex max-w-2xl flex-col items-start text-left">
          <img src="hero.png" alt="" className="invert mix-blend-screen" />

          <p className="mt-4 text-l text-term-text-dim leading-relaxed">
            {
              "I'm a Melbourne-based software developer with experience building and delivering "
            }
            <span className="text-term-white">real client applications</span>
            {', from simple frontend interfaces to '}
            <span className="text-term-white">full-stack systems</span>
            {' with authentication and database integration. I focus on '}
            <span className="text-term-white">backend development</span>
            {
              '—designing APIs, handling data, and writing clear, maintainable code for real-world use.'
            }
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="mt-2">/</span>
            <ScrambleButton icon={<Mail />} label="Contact" />
            <span className="mt-2">/</span>
            <ScrambleButton icon={<Download />} label="Resume" />
            <span className="mt-2">/</span>
            <ScrambleButton icon={<FaGithub />} label="Github" />
            <span className="mt-2">/</span>
            <ScrambleButton icon={<FaLinkedin />} label="LinkedIn" />
            <span className="mt-2">/</span>
          </div>
        </div>
      </div>
    </section>
  )
}
