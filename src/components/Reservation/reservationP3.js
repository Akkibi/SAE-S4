import { BtnReservation } from "./btn/btn";
import { Etape } from "./etape/etape";
import "./reservationP3.css";
import { Selection } from "./selection/selection";

export const ReservationP3 = () => {
  return (
    <div>
      <Etape />
      <div className="container-text">
        <h1 className="titre-expo">Exposition les femmes peintres</h1>
        <Selection />
        <div className="flex-infos">
          <div>
            <p className="titre-div">Déjà inscrit ?</p>
            <div className="container-connexion">
              <form>
                <label htmlFor="mail" className="label">
                  Mail:
                </label>
                <br></br>
                <input name="mail" type="email" className="input"></input>
                <br></br>
                <label htmlFor="mdp" className="label">
                  Mot de passe:
                </label>
                <br></br>
                <input name="mdp" type="password" className="input"></input>
                <p className="btn-connexion">SUIVANT</p>
              </form>
            </div>
          </div>
          <div>
            <p>Continuer sans inscription</p>
            <div className="container-infos"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
