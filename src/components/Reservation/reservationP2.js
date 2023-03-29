import { Etape } from "./etape/etape";
import "./reservationP2.css";
import { Selection } from "./selection/selection";
import { Calendar } from "./calendrier/calendrier";
import { Hours } from "./hours/hours";
import { BtnReservation } from "./btn/btn";
import { Link } from "react-router-dom";

export const ReservationP2 = () => {
  return (
    <div>
      <Etape />
      <div className="container-text">
        <h1 className="titre-expo">Exposition les femmes peintres</h1>
        <Selection />
        <div className="container-date">
          <Calendar />
          <Hours />
        </div>
        <div className="flex-btn">
            <Link to={'/reserver/billets'}>
              <p className="precedent">PRECEDENT</p>
            </Link>
          <Link to={'/reserver/information'}>
            <BtnReservation />
          </Link>
        </div>
      </div>
    </div>
  );
};
