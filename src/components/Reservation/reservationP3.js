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
                <p className="btn-connexion">CONNEXION</p>
              </form>
            </div>
          </div>
          <div>
            <p className="titre-div">Continuer sans inscription:</p>
            <div className="container-infos">
              <form>
                <div className="container-nom-prenom">
                  <div>
                    <label htmlFor="nom">Nom:</label>
                    <br></br>
                    <input type="text" name="nom" className="input-nom"></input>
                  </div>
                  <div>
                    <label htmlFor="prenom">Prenom:</label>
                    <br></br>
                    <input
                      name="prenom"
                      type="text"
                      className="input-prenom"
                    ></input>
                  </div>
                </div>
                <div className="center-input">
                  <label htmlFor="mail">Adresse Mail:</label>
                  <br></br>
                  <input name="mail" type="email" className="input-2"></input>
                </div>
                <br></br>
                <div className="center-input">
                  <label htmlFor="age">Age:</label>
                  <br></br>
                  <input name="age" type="number" className="input-2"></input>
                </div>
                <div className="input-radio">
                  <input type="checkbox" name="mail-auto"></input>
                  <label htmlFor="mail-auto">
                    J'accepte de recevoir des mails de la part de Galerie des
                    rêves.
                  </label>
                </div>
                <br></br>
                <br></br>
                <div className="input-radio">
                  <input type="checkbox" name="potilics"></input>
                  <label htmlFor="politics">
                    Je certifie avoir pris connaissance{" "}
                    <a href="https://drive.google.com/file/d/1dCu9eaivVd-0LQs9LLtchunN239Y3tRP/view?usp=sharing">
                      des conditions de ventes et d'utilisation
                    </a>{" "}
                    ainsi que de{" "}
                    <a href="https://drive.google.com/file/d/1RtMENkhDd-_nbhPKQo1SKU1kEW17eC5M/view?usp=sharing">
                      la politique de confidentialité.
                    </a>
                  </label>
                </div>
              </form>
              <p className="btn-connexion">VALIDER</p>
            </div>
          </div>
        </div>
        <div className="flex-btn">
          <a href="/reservation2">
            <p className="precedent">PRECEDENT</p>
          </a>
          <a href="/reservation4">
            <BtnReservation />
          </a>
        </div>
      </div>
    </div>
  );
};
