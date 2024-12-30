import ContactButton from "./ContactButton"

export default function Contact() {
    return (
        <div id="contact">
            <h3 className="section-heading">Feeling <span className="grad-text">star-struck</span>? Contact me!</h3>
            <div className="btns-wrapper">   
                <ContactButton imgLink="https://img.icons8.com/?size=100&id=102748&format=png&color=FFFFFF" link="www.google.com"/>
                <ContactButton imgLink="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF" link="www.google.com"/>
                <ContactButton imgLink="https://img.icons8.com/?size=100&id=60688&format=png&color=FFFFFF" link="www.google.com"/>
            </div>
        </div>
    )
}