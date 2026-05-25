import { SkillGroup } from '#/components/ui/skill-group'

const skillGroups = [
  {
    category: 'languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'frontend',
    skills: [
      'React',
      'Next.js',
      'TanStack Start',
      'TanStack Router',
      'TanStack Query',
      'Tailwind CSS',
      'React Hook Form',
      'Zod',
      'Vite',
    ],
  },
  {
    category: 'backend',
    skills: ['FastAPI', 'Pydantic', 'NestJS', 'Node.js', 'REST APIs', 'JWT Auth'],
  },
  {
    category: 'ai engineering',
    skills: ['OpenAI Agents SDK', 'Model Context Protocol', 'FastMCP'],
  },
  {
    category: 'database',
    skills: ['PostgreSQL', 'Prisma', 'Neon'],
  },
  {
    category: 'devops',
    skills: ['Docker', 'Git', 'GitHub', 'Fly.io'],
  },
  {
    category: 'services',
    skills: ['Cloudinary', 'Resend'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mt-40 scroll-mt-32">
      <img
        src="skills.png"
        alt="skills title image"
        className="invert mix-blend-screen"
      />
      <div className="mt-8 flex flex-col gap-6">
        {skillGroups.map((group) => (
          <SkillGroup
            key={group.category}
            category={group.category}
            skills={group.skills}
          />
        ))}
      </div>
    </section>
  )
}
