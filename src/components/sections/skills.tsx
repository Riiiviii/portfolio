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
      <div>
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p>
              {'>'} {group.category}
            </p>
            <div>
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
