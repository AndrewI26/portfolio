import SeeMore from "./SeeMore";

type Props = {
    number: string; 
    title: string; 
    org: string; 
    description: string; 
    link: string;
    isLeft: boolean;
    isHidden: boolean;
}

export default function ExperienceCard({number, title, org, description, link, isLeft, isHidden}: Props) {
    const wrapperClassName = isLeft ? `exp-card-wrapper wrapper-right ${isHidden ? "hide" : ""}` : `exp-card-wrapper ${isHidden ? "hide" : ""}`
    const descClassName = isLeft ? "small-text text-right" : "small-text"
    return (
        <div className={wrapperClassName}>
            <h3 className="exp-card-num">{number}</h3>
            <h3 className="exp-card-title subheading">{title}</h3>
            <h3 className="exp-card-org">{org}</h3>
            <div><p className={descClassName}>{description}</p></div>
            {number == "03" || number == "04" ? <></> : <SeeMore link={link}/>}
        </div>
    )
}