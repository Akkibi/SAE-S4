import { Etape } from "./etape/etape";
import "./reservationP2.css";
import { Selection } from "./selection/selection";
import { Calendar } from "./calendrier/calendrier";
import { Hours } from "./hours/hours";
import { BtnReservation } from "./btn/btn";

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
          <a href="/reservation">
            <p className="precedent">PRECEDENT</p>
          </a>
          <BtnReservation />
        </div>
      </div>
    </div>
  );
};
