import { ProjectCard, type Project } from '#/components/ui/project-card'

const projects: Project[] = [
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
    title: 'Simos PT',
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

export default function Projects() {
  return (
    <section id="projects" className="mt-40">
      <div>
        <img src="projects.png" alt="" className="invert mix-blend-screen" />
      </div>
      <div className="mt-5">
        <p>
          Here's a small collection of the projects that display my skills and
          love for software development
        </p>
      </div>
      <div className="mt-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
