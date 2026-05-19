import { useScramble } from 'use-scramble'
import type { ExperienceType } from '../sections/experience'


export function ExperienceCard({
    experience,
    index,
}: {
    experience: ExperienceType
    index: number
}) {
    const { ref: cardRef, replay: replayCard } = useScramble({
        text: experience.role,
        overdrive: false,
        speed: 0.5,
    })


    return (
        <div
            className="border border-dotted border-term-grey-3 p-6 hover:border-term-grey-2 transition-colors"
            onMouseEnter={replayCard}
        >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                    <p className="text-term-text-muted text-sm">
                        {String(index + 1).padStart(2, '0')}. {experience.period}
                    </p>
                    <h2 className="text-term-white font-bold text-xl">
                        <span ref={cardRef} />
                    </h2>
                    <p className="mt-1 text-term-text-muted text-sm">
                        {experience.company} · {experience.location}
                    </p>
                </div>
            </div>


        </div>
    )
}