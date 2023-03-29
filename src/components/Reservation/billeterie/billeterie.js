import "./billeterie.css";
import { BtnReservation } from "../btn/btn";
import { Link } from "react-router-dom";

export const Billeterie = () => {
  return (
    <div>
      <h1 className="titre-billeterie">Billeterie</h1>
      <div className="container-flex">
        <fieldset className="container-choix-billet">
          <div className="billeterie-flex">
            <div>
              <p className="content">Billet plein tarif</p>
              <p className="content">10.00 €</p>
            </div>
            <label class="dropdown">
              <div class="dd-button">Choix du billet</div>
              <input type="checkbox" class="dd-input" id="test"></input>
              <ul class="dd-menu">
                <li>1 Billet</li>
                <li>2 Billets</li>
                <li>3 Billets</li>
              </ul>
            </label>
          </div>
          <div>
            <div className="billeterie-flex">
              <div>
                <p className="content">Billet étudiant</p>
                <p className="content">6.00 €</p>
              </div>
              <label class="dropdown">
                <div class="dd-button">Choix du billet</div>
                <input type="checkbox" class="dd-input" id="test"></input>
                <ul class="dd-menu">
                  <li>1 Billet</li>
                  <li>2 Billets</li>
                  <li>3 Billets</li>
                </ul>
              </label>
            </div>
            <div className="billeterie-flex">
              <div>
                <p className="content">Billet -10ans</p>
                <p className="content">0.00 €</p>
              </div>
              <label class="dropdown">
                <div class="dd-button">Choix du billet</div>
                <input type="checkbox" class="dd-input" id="test"></input>
                <ul class="dd-menu">
                  <li>1 Billet</li>
                  <li>2 Billets</li>
                  <li>3 Billets</li>
                </ul>
              </label>
            </div>
          </div>
        </fieldset>
        <div>
          <fieldset className="container-selection">
            <p className="titre-selection">VOTRE SELECTION</p>
            <div className="flex-selection">
              <p>1 billet plein tarif</p>
              <p>10.00 €</p>
            </div>
            <div className="flex-selection">
              <p>1 billet plein tarif</p>
              <p>10.00 €</p>
            </div>
            <div className="flex-selection">
              <p>1 billet enfant</p>
              <p>0.00 €</p>
            </div>
          </fieldset>
          <Link to={'/reserver/dates'}>
            <BtnReservation />
          </Link>
        </div>
      </div>
    </div>
  );
};
