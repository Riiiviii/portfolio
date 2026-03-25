import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '../ui/button'

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

            <Button variant="glitch">
              <Mail />
              Contact
            </Button>
            <span className="mt-2">/</span>
            <Button variant="glitch">
              <Download />
              Resume
            </Button>
            <span className="mt-2">/</span>
            <Button variant="glitch">
              <Github />
              Github
            </Button>
            <span className="mt-2">/</span>
            <Button variant="glitch">
              <Linkedin />
              Linkdin
            </Button>
            <span className="mt-2">/</span>
          </div>
        </div>
      </div>
    </section>
  )
}
