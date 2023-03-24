import Logo from "../../assets/images/logo.svg" 
import './Footer.css'

export const Footer = () => {
    return (<div>
        
            {/* <footer>
                <div>
                    <img src={Logo} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis in dolor aperiam, fugit officiis quis dignissimos iste voluptates minima deserunt, perspiciatis ducimus quod repellat distinctio eos consequuntur? Hic, ad.</p>
                </div>
                <div>
                    <h2>CONTACT</h2>
                    <p>Téléphone : 01 60 95 85 90</p>
                    <p>Email: galeriedesreves77@gmail.com</p>
                    <p>Adresse : 2, rue Albert Einstein <br/>77420 Champs-sur-Marne</p>
                    <p>Notre site web</p>
                </div>
                <div>
                    <h2>NOS RÉSEAUX</h2>
                    <p>galerie_des_rêves_agency</p>
                    <p>GalerieDesRêves</p>
                    <p>GalerieDesRêves</p>
                    <p>Galerie des rêves</p>
                </div>
                <div>
                    <h2>A PROPOS</h2>
                    <p>Mention légale</p>
                    <p>Notre équipe</p>
                </div>
            </footer> */}
            <footer>
                <div class="row primary">
                    <div class="column about">
                        <h3>Foolish Developer</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                            voluptatem corporis error non,
                        </p>
                        <div class="social">
                            <i class="fa-brands fa-facebook-square"></i>
                            <i class="fa-brands fa-instagram-square"></i>
                            <i class="fa-brands fa-twitter-square"></i>
                            <i class="fa-brands fa-youtube-square"></i>
                            <i class="fa-brands fa-whatsapp-square"></i>
                        </div>
                    </div>
                <div class="column links">
                    <h3>Some Links</h3>
                    <ul>
                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
                        </li>
                    </ul>
                    </div>
                <div class="column links">
                    <h3>Some Links</h3>
                        <ul>
                            <li>
                                <a href="#faq">F.A.Q</a>
                            </li>
                            <li>
                                <a href="#cookies-policy">Cookies Policy</a>
                            </li>
                            <li>
                                <a href="#terms-of-services">Terms Of Service</a>
                            </li>
                            <li>
                                <a href="#support">Support</a>
                            </li>
                        </ul>
                </div>
                <div class="column links">
                    <h3>Some Links</h3>
                        <ul>
                            <li>
                                <a href="#faq">F.A.Q</a>
                            </li>
                            <li>
                                <a href="#cookies-policy">Cookies Policy</a>
                            </li>
                            <li>
                                <a href="#terms-of-services">Terms Of Service</a>
                            </li>
                            <li>
                                <a href="#support">Support</a>
                            </li>
                        </ul>
                </div>
            </div>
            <div class="row copyright">
                <div class="footer-menu">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Blog</a>
                    <a href="">Social</a>
                </div>
                <p>Copyright &copy; 2021 Foolish Developer</p>
            </div>
        </footer>
    </div>

    )
}