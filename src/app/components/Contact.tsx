import ContactButton from "./ContactButton"

export default function Contact() {
    return (
        <div id="contact">
            <h3 className="section-heading">Feeling <span className="grad-text">star-struck</span>? Contact me!</h3>
            <p className="con-text">I&apos;m looking for internships for summer 2025! Or just feel free to reach out to chat.</p>
            <div className="btns-wrapper">   
                <ContactButton imgLink="https://img.icons8.com/?size=100&id=102748&format=png&color=FFFFFF" link="https://www.linkedin.com/in/andrew-iammancini"/>
                <ContactButton imgLink="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF" link="https://github.com/AndrewI26"/>
                <ContactButton imgLink="https://img.icons8.com/?size=100&id=60688&format=png&color=FFFFFF" link="mailto:andrewi44@icloud.com"/>
            </div>
            
        </div>
    )
}