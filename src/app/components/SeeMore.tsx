export default function SeeMore({link}:{link:string}) {
    const handleClick = () => {
        window.open(link, '_blank');
    }
    return (
        <p className="exp-see-more" onClick={handleClick}>See more</p>
    )
}