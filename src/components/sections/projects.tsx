const projects = [
  {
    title: 'Olways Pets',
    description:
      'A full-stack pet portrait artist platform featuring dual image galleries with infinite scroll, an admin panel for managing artwork and testimonials, Cloudinary-powered image hosting, contact form with email integration, and commission pricing. Includes JWT authentication with role-based access control.',
    technologies: [
      'TypeScript',
      'React',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'TanStack Router',
      'TanStack Query',
      'Tailwind CSS',
      'Cloudinary',
      'Vite',
    ],
    link: 'https://www.google.com',
    repo: 'https://github.com/Riiiviii/olways-pets',
  },
  {
    title: 'Simos',
    description:
      'A personal training service website featuring a landing page with testimonial carousel, training session offerings for in-person and online programming, a categorized FAQ with sticky sidebar navigation, scroll-triggered animations, and a contact form powered by Resend email integration with React Email templates.',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Radix UI',
      'React Hook Form',
      'Zod',
      'Resend',
      'React Email',
    ],
    link: 'https://www.google.com',
    repo: 'https://github.com/Riiiviii/simos-app',
  },
]

export default function Project() {
  return (
    <section className="mt-40">
      <div>
        <img src="projects.png" alt="" className=" invert mix-blend-screen" />
      </div>
      <div className="mt-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-2 mt-2 border-2 border-white border-dotted"
          >
            <h2>{project.title}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}
