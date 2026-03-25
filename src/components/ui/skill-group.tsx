import { useScramble } from 'use-scramble'

export function SkillGroup({
  category,
  skills,
}: {
  category: string
  skills: string[]
}) {
  const { ref, replay } = useScramble({
    text: category,
    overdrive: false,
    speed: 0.5,
  })

  return (
    <div onMouseEnter={replay}>
      <p className="mb-3 text-sm text-term-text-muted">
        <span className="text-term-white">{'>'}</span> <span ref={ref} />
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border border-term-grey-3 px-3 py-1 text-sm text-term-text-dim hover:border-term-grey-2 hover:text-term-white transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
