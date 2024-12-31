import { useState } from "react"

export default function ProjectsImg({vidLink, picLink, isLeft}:{vidLink: string, picLink: string, isLeft: boolean}) {
    const [isHovered, setIsHovered] = useState(false)
    const notHov = {
        background: `
            linear-gradient( rgba(135, 67, 229, 0.5), rgba(135, 67, 229, 0.5)), 
            linear-gradient( rgba(95, 95, 95, 0.5), rgba(97, 97, 97, 0.5)), 
            url(${picLink})`,
        width: '48vw',
        height: '27vw',
        backgroundSize: 'cover',
    }
    const img = isLeft ? "right-img image" : "left-img image"
    return (
        <>
        {!isHovered ?
            <div className={img} style={notHov} onMouseEnter={() => {setIsHovered(true)}}></div> :
            <div onMouseLeave={() => {setIsHovered(false)}} className={img}>
                <video width={"100%"} height={"100%"} autoPlay muted preload="auto">
                    <source src={vidLink} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        }
        </>
    )
}