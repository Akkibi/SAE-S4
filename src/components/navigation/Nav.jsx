import Logo from "../../assets/logos/logo.svg" 
import "./Nav.css"
import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <nav>
            <div className="nav__left">
                <img src={Logo} alt="page principale" />
                <p>LES FEMME PEINTRE</p>
            </div>
            <ul className="nav__right">
                <li><Link to="/">Acceuil</Link></li>
                <li><Link to="/expositions">Exposition</Link></li>
                <li><Link to="/équipe">A propos</Link></li>
            </ul>
        </nav>

    )
}
{/* <p>A propos</p>
                    <ul className="menu__vertical">
                        <li>L'équipe</li>
                        <li>Mon compte</li>
                        <li>Centre d'aide</li>
                        <li>Se déconnecter</li>
                    </ul> */}