import "./reservationP4.css";

export const ReservationP4 = () => {
  return (
    <div>
      <a href="/">
        <p className="lien-accueil">Retour à l'accueil</p>
      </a>
      <div className="billet">
        <p className="titre-billet">BILLET EXPOSITION</p>
        <p className="nom-expo">FEMMES PEINTRES</p>
        <p className="date-billet">2 billets pour le 28/02 à 14h00</p>
        <p className="reservation-valide">RESERVATION VALIDÉE</p>
      </div>
      <div className="flex-liens">
        <a>IMPRIMER MON BILLET</a>
        <a>TELECHARGER LA FACTURE</a>
      </div>
    </div>
  );
};
