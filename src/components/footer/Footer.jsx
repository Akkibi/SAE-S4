import Logo from "../../assets/images/logo.svg" 

export const Footer = () => {
    return (
        <footer>
            <div>
                <img src={Logo} alt=""/>
                <h2>CONTACT</h2>
                <p>Téléphone : 01 60 95 85 90</p>
                <p>Email: galeriedesreves77@gmail.com</p>
                <p>Adresse : 2, rue Albert Einstein <br/>77420 Champs-sur-Marne</p>
            </div>
            <div>
                <h2></h2>
            </div>
        </footer>
    )
}