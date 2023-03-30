import { Etape } from "./etape/etape";
import "./reservationP1.css";
import { Billeterie } from "./billeterie/billeterie";
import DameFruit from "../../assets/images/miniatures/DameFruit.png";

export const ReservationP1 = () => {
  return (
    <div className="reserv__page">
      <Etape />
      <div className="container-text">
        <h1 className="titre-expo">Exposition les femmes peintres</h1>
        <p>
          Une exposition qui a pour intention de mettre les artistes femmes à
          l’honneur en venant célébrer le travail fait par ces dernières dans
          l’Histoire de l’Art.<br></br>
          <br></br>Alors qu’elles étaient pourtant bien présentes dans la
          production artistique dès le XVIIIe siècle, l’Histoire de l’Art les a
          bien trop souvent invisibilisées.C’est à travers un parcours pédagogique que nous vous
          proposons d’en apprendre davantage sur ces artistes qui ont contribué
          à l’émergence de l’Art.
          <br></br>
          Voyage à travers le temps, réflexion et innovation sont nos promesses
          pour cette exposition. 
        </p>
      </div>
      <div className="miniature__container">
			  <img src={DameFruit} alt="" className="miniature__extravagante miniature__extravagante-billet"/>
		  </div>
      <Billeterie />
    </div>
  );
};
