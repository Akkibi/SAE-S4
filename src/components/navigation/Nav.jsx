import Logo from "../../assets/logos/logo.svg" 
import "./Nav.css"
import { Link } from "react-router-dom"
import Profil from "../../assets/logos/profil.svg"

export const Nav = () => {
    return (
        <nav>
            <div className="nav__left">
                <Link to={'/'}><img src={Logo} alt="page principale" /></Link>
                <p>LES FEMMES PEINTRES</p>
            </div>
            <ul className="nav__right">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/expositions">Exposition</Link></li>
                <li>A propos<br/>
                    <ul className="roll">
                        <li><Link to="/apropos/equipe">Equipe</Link></li>
                        <li><Link to="/apropos/mentionslegales">Mention légales</Link></li>
                    </ul>
                </li> 
                <li><Link to={'/inscription'}><img src={Profil} alt="accéder au profil" /></Link></li>
            </ul>
        </nav>

    )
}