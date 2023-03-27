import { statusContext } from "../../context/context";
import { useContext } from "react";
import React, { useState, useEffect } from "react";

//Problèmes à résoudre

// Ajouter delete

export const ReadReservations = () => {
  const { isConnected, logout } = useContext(statusContext);
  if (isConnected === true) {
    console.log("nique");
  } else {
    console.log("tg");
  }
  const [Reservations, setReservations] = useState([]);
  useEffect(() => {
    fetch("https://meneau-pro.com/api-php/controllers/afficheReservation.php")
      .then((response) => response.json())
      .then((data) => setReservations(data))
      .catch((err) => console.log(err));
  }, []);
  return Reservations.map((Reservation) => (
    <div key={Reservation.id}>
      <ul>
        <li>Nom: {Reservation.nom}</li>
        <li>Prénom: {Reservation.prenom}</li>
        <li>Age: {Reservation.age}</li>
        <li>Utilisateur Référent: {Reservation.id_utilisateur}</li>
        <li>Mail: {Reservation.mail}</li>
        <li>Date de Visite: {Reservation.date_visite}</li>
        <li>Tarif payé: {Reservation.id_tarif}</li>
      </ul>
    </div>
  ));
};
