import { useScramble } from 'use-scramble'
import type { ExperienceType } from '../sections/experience'


export function ExperienceCard({
    experience,
}: {
    experience: ExperienceType
}) {
    const { ref: roleRef, replay: replayRole } = useScramble({
        text: experience.role,
        overdrive: false,
        speed: 0.5,
    })

    return (
        <div
            className="flex flex-col gap-1 py-3 text-sm"
            onMouseEnter={replayRole}
        >
            <div className="flex items-center gap-3">
                <span className="text-term-text-dim">$</span>
                <span className="text-term-text-dim">work</span>
                <span className="text-term-text-dim">--period</span>
                <span className="text-term-white shrink-0">{experience.period}</span>
            </div>
            <div className="flex items-center gap-3 pl-6">
                <span className="text-term-white flex-1">
                    <span ref={roleRef} />
                </span>
                <span className="text-term-text-dim">@</span>
                <span className="text-term-text-muted">{experience.company}</span>
                <span className="text-term-text-dim">·</span>
                <span className="text-term-text-muted">{experience.location}</span>
            </div>
        </div>
    )
}