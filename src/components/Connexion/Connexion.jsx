import { Formulaire } from './components/Formulaire/Formulaire';

export const Connexion = () => {
    return (
        <div>
            <img src="src\assets\images\connexion.png" alt="" />
            <Formulaire inputs={[["Email", "text", "mail"], ["Mot de passe", "password", "password"], ["Connexion", "submit", "bouton-connection"], ["Inscription", "submit", "bouton-inscription"], ["Sign in with google", "submit", "login-google"], ["Sign in with Facebook", "submit", "login-facebook"]]} />
        </div>
    );
};