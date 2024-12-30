type props = {
    skill: string;
    hasBorder: boolean
}

export default function ProjectsSkill({skill, hasBorder}: props) {
    const style = {
        borderRight: hasBorder ? "solid 2px var(--grey)" : ""
    }
    return (
        <div style={style} className="skill">
            <p className="text-center grey">{skill}</p>
        </div>
    )
}
