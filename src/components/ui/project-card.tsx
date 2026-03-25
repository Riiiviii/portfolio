import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useScramble } from 'use-scramble'

export interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
  repo: string
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const { ref: cardRef, replay: replayCard } = useScramble({
    text: project.title,
    overdrive: false,
    speed: 0.5,
  })

  const { ref: repoRef, replay: replayRepo } = useScramble({
    text: 'repo',
    overdrive: false,
    speed: 0.5,
  })
  const { ref: liveRef, replay: replayLive } = useScramble({
    text: 'live',
    overdrive: false,
    speed: 0.5,
  })

  return (
    <div
      className="mt-4 border border-dotted border-term-grey-3 p-5 hover:border-term-grey-2 transition-colors"
      onMouseEnter={replayCard}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="text-term-text-muted text-sm">
            {String(index + 1).padStart(2, '0')}.
          </span>
          <h2 className="text-term-white font-bold text-xl">
            <span ref={cardRef} />
          </h2>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-term-text-muted hover:text-term-white"
            onMouseEnter={replayRepo}
          >
            <FaGithub />
            <span ref={repoRef} />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-term-text-muted hover:text-term-white"
            onMouseEnter={replayLive}
          >
            <ExternalLink size={12} />
            <span ref={liveRef} />
          </a>
        </div>
      </div>

      <p className="mt-3 text-sm text-term-text-dim leading-relaxed">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="border border-term-grey-3 px-2 py-0.5 text-xs text-term-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
