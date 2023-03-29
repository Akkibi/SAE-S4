import Logo from "../../assets/logos/logo.svg" 
import "./Nav.css"
import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <nav>
            <div className="nav__left">
                <img src={Logo} alt="page principale" />
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
                <li></li>
            </ul>
        </nav>

    )
}