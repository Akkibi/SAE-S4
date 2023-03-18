import React, {useState} from "react";
export const Login = () => {

    return (
        <form action="" method="GET">
            <label for="mail">Votre Mail</label>
            <input type="mail" placeholder="dupont@gmail.com" name="mail"/>
            <label for="mdp">Votre Mot de passe</label>
            <input type="password" placeholder="********" name="mdp"/>
            <input type="submit" value="Log In" name="formconnexion"/>
        </form>
    )
}

//Ne pas modifier ce fichier