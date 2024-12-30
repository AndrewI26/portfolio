import { useState } from "react"

export default function ProjectsImg({vidLink, picLink, isLeft}:{vidLink: string, picLink: string, isLeft: boolean}) {
    const [isHovered, setIsHovered] = useState(false)
    const style = {
        background: `
            linear-gradient( rgba(135, 67, 229, 0.5), rgba(135, 67, 229, 0.5)), 
            linear-gradient( rgba(95, 95, 95, 0.5), rgba(97, 97, 97, 0.5)), 
            url(${picLink})`,
        width: '40vw',
        height: '22.5vw',
        backgroundSize: 'cover',
    }
    const imgStyle = isLeft ? "right-img projects-img" : "left-img projects-img"
    return (
        <>
        {!isHovered ?
            <div className={imgStyle} style={style} onMouseEnter={() => {console.log('hovered'); setIsHovered(true)}}></div> :
            <div onMouseLeave={() => {setIsHovered(false)}} className={imgStyle} style={style}>
                <video width={"100%"} height={"100%"} autoPlay preload="auto">
                    <source src={vidLink} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        }
        </>
    )
}