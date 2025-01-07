import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
    useGSAP(() => {
        gsap.to([".purple"], {
          scale: 1,
          delay: 3,
          scrollTrigger: {
            trigger: ".purple",
            start: 'top 70%',
            end: 'bottom bottom',
            scrub: 2,
          },
        });
    })

    const languages = ["Python", "Go", "TypeScript", "JavaScript", "C", "Haskell", "HTML", "CSS"]
    const frameworks = ["React", "Next.js", "Node.js", "Django", "Google Cloud", "Express.js", "MongoDB", "Selenium", "SQLite"]
    
    const Skill = ({skill}:{skill:string}) => {
        return (
            <div className="skill-tag">
                {skill}
            </div>
        )
    }
    const langContent = languages.map(skill => <Skill key={skill} skill={skill}/>)
    const frameworkContent = frameworks.map(framework => <Skill key={framework} skill={framework}/>)

    

    return (
        <div id="skills">
            <h3 className="section-heading center">My skills are <span className="grad-text">vast</span></h3>
            <div className="lang-wrapper">
                {langContent}
            </div>
            <div className="framework-wrapper">
                {frameworkContent}
            </div>
            <div id="purp" className="purple"></div>
        </div>
    )
}