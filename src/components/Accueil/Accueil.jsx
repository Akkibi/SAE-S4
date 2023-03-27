import Slide from "./Slider/Slider";
import './Accueil.css'

export const Accueil = () => {
  return (
    <div>
      <Slide></Slide>
      <div className="intro">
        <h2>En ce moment</h2>
        <p>Du mardi 04 avril au dimanche 25 juin</p>
        <p>Les femmes peintres</p>
        <p>Venez découvrir à travers les courants artistiques les œuvres de femmes artistes célèbres comme Artemisia Gentileschi, Berthe Morisot, Georgia O’Keeffe et plein d’autres encore…
        Cette exposition sur les femmes peintres est l’occasion de célébrer les réalisations des femmes artistes passées et présentes. Parce que les femmes ne sont pas moins, donnons leur le soutien et la reconnaissance qu’elles méritent.
        </p>
      </div>
    </div>
  );
};
