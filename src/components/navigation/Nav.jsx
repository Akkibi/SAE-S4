import Logo from "../../assets/images/logo.svg" 
import "./Nav.css"

export const Nav = () => {
    return (
        <nav>
            <div>
                <img src={Logo} alt="page principale" />
                <p>LES FEMME PEINTRE</p>
            </div>
            <ul>
                <li>Acceuil</li>
                <li>Exposition</li>
                <li>Actualité</li>
                <li>A propos</li>
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