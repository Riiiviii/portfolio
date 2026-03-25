import { SkillGroup } from '#/components/ui/skill-group'

const skillGroups = [
  {
    category: 'languages',
    skills: ['TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'frontend',
    skills: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'TanStack Router',
      'TanStack Query',
      'Radix UI',
      'React Hook Form',
      'Zod',
      'Vite',
    ],
  },
  {
    category: 'backend',
    skills: ['NestJS', 'Node.js', 'REST APIs', 'JWT Auth'],
  },
  {
    category: 'database',
    skills: ['PostgreSQL', 'Prisma'],
  },
  {
    category: 'tools',
    skills: ['Git', 'GitHub', 'Cloudinary', 'Resend', 'React Email'],
  },
]


export default function Skills() {
  return (
    <section id="skills" className="mt-40">
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
