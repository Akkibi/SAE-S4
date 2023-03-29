import "./DejaMembre.css";
import React from "react";
import { Formulaire } from "../Formulaire/Formulaire";
export const DejaMembre = () => {
    return (
        <Formulaire inputs={[["Nom d'utilisateur/Adresse mail", "text", "username-mail"], ["Mot de passe", "password", "password"], ["Mot de passe oublié ?", "p", "password-oublie"], ["Se souvenir de moi", "checkbox", "souvenir-de-moi"], ["Se connecter", "submit", "bouton-connection"]]} />
    )
}