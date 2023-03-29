import Logo from "../../assets/logos/logo.svg" 
import Facebook from "../../assets/logos/Facebook.svg"
import Instagram from "../../assets/logos/Instagram.svg"
import Linkedin from "../../assets/logos/LinkedIn.svg"
import Vimeo from "../../assets/logos/Vimeo.svg"
import './Footer.css'

export const Footer = () => {
    return (<footer>
                <div class="row primary">
                    <div class="column about">
                        <img src={Logo} className="footer__logo" alt=""/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                            voluptatem corporis error non,
                        </p>
                    </div>
                <div class="column links">
                    <h3>A propos</h3>
                    <ul>
                        <li>
                            <a href="#faq">Notre équipe</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Mentions légales</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Condition de vente</a>
                        </li>
                    </ul>
                    </div>
                <div class="column links">
                    <h3>Nos réseaux</h3>
                        <ul>
                            <li>
                                <a href="#faq"><img src={Instagram} alt="" className="logo-reseau"/>  galerie_des_rêves_agency</a>
                            </li>
                            <li>
                                <a href="#cookies-policy"><img src={Linkedin} alt="" className="logo-reseau"/>  GalerieDesRêves</a>
                            </li>
                            <li>
                                <a href="#terms-of-services"><img src={Vimeo} alt="" className="logo-reseau"/>  GalerieDesRêves</a>
                            </li>
                            <li>
                                <a href="#support"><img src={Facebook} alt="" className="logo-reseau"/>  Galerie des rêves</a>
                            </li>
                        </ul>
                </div>
                <div class="column links">
                    <h3>Contact</h3>
                        <ul>
                            <li>
                                <a href="#faq">Téléphone : 01 60 95 85 90</a>
                            </li>
                            <li>
                                <a href="#cookies-policy">Email: galeriedesreves77@gmail.com</a>
                            </li>
                            <li>
                                <a href="#terms-of-services">Adresse : 2, rue Albert Einstein <br/>77420 Champs-sur-Marne</a>
                            </li>
                            <li>
                                <a href="#support">Notre site web</a>
                            </li>
                        </ul>
                </div>
            </div>
            <div class="row copyright">
                <p>&copy; 2023 //Galerie des rêves, Champs-sur-Marne 77420</p>
            </div>
        </footer>
    )
}