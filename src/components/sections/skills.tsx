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
          <div key={group.category}>
            <p className="mb-3 text-sm text-term-text-muted">
              <span className="text-term-white">{'>'}</span> {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-term-grey-3 px-3 py-1 text-sm text-term-text-dim hover:border-term-grey-2 hover:text-term-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
