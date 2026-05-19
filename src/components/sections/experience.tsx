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



            <div className="mt-8 space-y-6">
                {experience.map((item, index) => (
                    <ExperienceCard key={item.role} experience={item} index={index} />
                ))}
            </div>
        </section>
    )
}
