import { Download, Mail } from 'lucide-react'
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa'
import { ScrambleButton } from '../ui/scramble-button'
import { CyclingScramble } from '../ui/scramble-text'

const scrambleText = [
  'AI engineering',
  'agentic systems',
  'shipping production-grade software',
  'multi-agent architectures',
  'building tools agents can use',
  'designing clean APIs',
]

export default function Hero() {
  return (
    <section className="mt-45">
      <div className="grid items-center gap-10 md:grid-cols-[3fr_2fr]">
        <div className="flex max-w-2xl flex-col items-start text-left">
          <img
            src="hero.png"
            alt="title image"
            className="invert mix-blend-screen"
          />

          <p className="mt-4 text-l text-term-text-dim leading-relaxed">
            {"I'm a Melbourne-based software developer focused on "}
            <span className="text-term-white">AI engineering</span>
            {" and "}
            <span className="text-term-white">full-stack systems</span>
            {". I build agentic AI applications with the "}
            <span className="text-term-white">OpenAI Agents SDK</span>
            {" and "}
            <span className="text-term-white">MCP</span>
            {", backed by full-stack experience across Python, TypeScript, and PostgreSQL. I care about shipping production-grade systems and writing code that holds up under real use."}
          </p>

          <div className="mt-3 flex">
            <p className="text-term-text-dim text-xl">I am passionate about </p>
            <CyclingScramble
              className="ml-2 text-xl"
              texts={scrambleText}
              delay={3000}
              speed={0.6}
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="mt-1.5">/</span>
            <ScrambleButton icon={<Mail />} label="Contact" href="#contact" />
            <span className="mt-1.5">/</span>
            <ScrambleButton icon={<FaFilePdf />} label="Resume" href="/Gabriel_Riven_Wahnich_Resume.pdf" />
            <span className="mt-1.5">/</span>
            <ScrambleButton icon={<FaGithub />} label="Github" href="https://github.com/Riiiviii" />
            <span className="mt-1.5">/</span>
            <ScrambleButton icon={<FaLinkedin />} label="LinkedIn" href="https://www.linkedin.com/in/gabriel-riven-wahnich" />
            <span className="mt-1.5">/</span>
          </div>
        </div>
      </div>
    </section>
  )
}
