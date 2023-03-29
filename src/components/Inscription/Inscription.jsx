import "./Inscription.css";
import { Formulaire } from "../../components/Formulaire/Formulaire";

export const Inscription = () => {
    return (
        <div className="contain">
            <h1>Nouveau membre ?</h1>
            <div className="contain-form">
                <Formulaire inputs={[["Nom et prenom", "text", "nom-prenom"], ["Nom d'utilisateur", "text", "username"], ["Mot de passe", "password", "password"], ["Confirmer le mot de passe", "password", "confirm-password"], ["Adresse mail", "email", "mail"], ["Téléphone", "tel", "telephone"], ["Se souvenir de moi", "checkbox", "souvenir-de-moi"], ["S'inscrire", "submit", "bouton-inscription"]]} />
            </div>
        </div>
    )
}