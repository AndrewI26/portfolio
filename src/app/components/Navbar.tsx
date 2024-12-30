import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='nav-total'>
            <div className='nav-container'>
                <Link href="#skills">
                    <p className='nav-title'>Skills</p>
                </Link>
                <Link href="#experience">
                    <p className='nav-title'>Experience</p>
                </Link>
                <Link href="#projects">
                    <p className='nav-title'>Projects</p>
                </Link>
                <Link href="#contact">
                    <p className='nav-title'>Contact</p>
                </Link>
            </div>
            <div className='nav-button'>
                <p className='nav-button-text'>Resume</p>
            </div>
        </div>
    )
}