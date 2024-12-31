export default function Github({link} : {link: string}) {
    const handleClick = () => {
        window.open(link, '_blank');
    }
    return (
        <div>
            <div onClick={handleClick} className="git-wrapper">
                <img width="30" height="30" src={"https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF"} alt="Contact icon"/>
            </div>
        </div>
    )
}