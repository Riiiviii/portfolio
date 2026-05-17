import { ProjectCard, type Project } from '#/components/ui/project-card'

const projects: Project[] = [

  {
    title: 'AI Portfolio Chatbot',
    description:
      'An agentic AI service that answers questions about my professional background using tool-calling and structured resume data. Built with the OpenAI Agents SDK and a custom FastMCP server exposing seven resume tools. Deployed as a multi-process container on Fly.io with FastAPI handling chat requests, lifespan-managed MCP integration, and structured error handling.',
    technologies: [
      'Python',
      'FastAPI',
      'OpenAI Agents SDK',
      'Model Context Protocol',
      'FastMCP',
      'Pydantic',
      'Docker',
      'Fly.io',
    ],
    link: 'https://riven-portfolio-api.fly.dev',
    repo: 'https://github.com/Riiiviii/ai-chatbot',
  },
  {
    title: 'Vestly',
    description:
      'A multi-agent financial analysis pipeline currently in development. Coordinates four specialist agents (fundamentals, sentiment, risk/macro, and competitive analysis) feeding into a judge agent that synthesises an evidence-grounded buy/sell/hold thesis from real-world market data. Built around a class-based agent architecture with Pydantic-validated structured outputs.',
    technologies: [
      'Python',
      'FastAPI',
      'OpenAI Agents SDK',
      'Pydantic',
      'yfinance',
      'Finnhub',
      'Vite',
      'React',
      'PostgreSQL',
      'Neon',
    ],
    link: '',
    repo: 'https://github.com/Riiiviii/vestly',
  },
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
        <img
          src="projects.png"
          alt="projects title image"
          className="invert mix-blend-screen"
        />
      </div>
      <div className="mt-5">
        <p>
          Here's a small collection of the projects that I've developed that
          display my skills and love for software development
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
