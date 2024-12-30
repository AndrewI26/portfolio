export default function ContactButton({imgLink, link} : {imgLink: string, link: string}) {
    const handleClick = () => {
        window.open(link, '_blank');
    }
    return (
        <div onClick={handleClick} className="contact-btn-wrapper">
            <img width="50" height="50" src={imgLink} alt="Contact icon"/>
        </div>
    )
}