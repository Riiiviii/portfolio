import { ExperienceCard } from "../ui/experience-card"

export interface ExperienceType {
    role: string
    company: string
    period: string
    location: string

}


const experience: ExperienceType[] = [
    {
        role: 'Freelance Software Engineer',
        company: 'OlwaysPets',
        period: '2026–present',
        location: 'Melbourne, Australia',

    },
    {
        role: 'Software Engineer Intern',
        company: 'Musical Moon',
        period: '2025',
        location: 'Remote',

    },
    {
        role: 'Systems Assembler',
        company: 'PLE Computers',
        period: '2021–2024',
        location: 'Melbourne, Australia',

    },
]

export default function Experience() {
    return (
        <section id="experience" className="mt-40 scroll-mt-32">
            <div>
                <img
                    src="experience.png"
                    alt="experience title image"
                    className="invert mix-blend-screen"
                />
            </div>


            <div className="mt-4">
                <p className="text-term-white">
                    For detailed information about my roles and responsibilities, please view my{' '}
                    <a
                        href="/Gabriel_Riven_Wahnich_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-dotted border-term-white text-term-white hover:text-term-text-muted! transition-colors"
                    >
                        resume
                    </a>
                    .
                </p>
            </div>
            <div className="mt-3 flex flex-col">
                {experience.map((item) => (
                    <ExperienceCard key={item.role} experience={item} />
                ))}
            </div>

        </section>
    )
}
