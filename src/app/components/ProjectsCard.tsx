import ProjectsSkill from "./ProjectsSkill"
import ProjectsImg from "./ProjectsImg"
import Github from "./Github"

type cardProps = {
    name: string;
    desc: string;
    skills: string[];
    isLeft: boolean;
    picLink: string;
    vidLink: string;
    link: string;
}

export default function ProjectsCard({name, desc, skills, isLeft, picLink, vidLink, link} : cardProps) {
    const infoWrapperStyle = isLeft ? "project-card-info-wrapper left-project" : "project-card-info-wrapper right-project"
    
    // Generate project skills
    const skillsDisplay = []
    for (const skill_index in skills) {
        skillsDisplay.push(
            <ProjectsSkill 
                key={skills[skill_index]}
                skill={skills[skill_index]}
                hasBorder={Number(skill_index) == skills.length - 1 ? false : true}
            />
        )
    }

    return (
        <div className="project-card-wrapper">
            {isLeft ? 
                <>
                    <div className={infoWrapperStyle}>
                        <h3 className="feat">FEATURED PROJECT</h3>
                        <h3 className="subheading project-heading">{name}</h3>
                        <div className="desc-wrapper">
                            <p>{desc}</p>
                        </div>
                        <div className="project-skills">
                            {skillsDisplay}
                        </div>
                        <Github link={link}/>
                    </div>
                    <ProjectsImg vidLink={vidLink} picLink={picLink} isLeft={true}/>
                </>
                 :
                <>
                    <ProjectsImg vidLink={vidLink} picLink={picLink} isLeft={false}/>
                    <div className={infoWrapperStyle}>
                        <h3 className="feat">FEATURED PROJECT</h3>
                        <h3 className="subheading project-heading">{name}</h3>
                        <div className="desc-wrapper">
                            <p>{desc}</p>
                        </div>
                        <div className="project-skills">
                            {skillsDisplay}
                        </div>
                        <div style={{height: "10px"}}></div>
                        <Github link={link}/>
                    </div>
                </>
            }
        </div>
    )
}
