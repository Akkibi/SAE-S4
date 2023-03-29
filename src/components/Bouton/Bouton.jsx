import "./bouton.css";

export const Bouton = ({ nomButton, lien }) => {
    return (
        <button><a href={lien}>{nomButton}</a></button>
    );
}