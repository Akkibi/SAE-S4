import React, { useState, useEffect } from "react";
import { statusContext } from "../../context/context";
import { useContext } from "react";

//Problèmes à résoudre

// Acces to fetch blocked by cors policy

export const Reserver = () => {
  const [mail, setMail] = useState("");
  const [idUtilisateur, setIdUtilisateur] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [dateViste, setDateVisite] = useState("");
  const [idTarif, setidTarif] = useState("");
  const StatusContext = useContext(statusContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://meneau-pro.com/api-php/controllers/createReservation.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mail,
        idUtilisateur,
        prenom,
        nom,
        age,
        dateViste,
        idTarif,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "connected") {
          StatusContext.login();
        } else {
          console.log("euh");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mail:
        <input
          type="text"
          value={mail}
          onChange={(event) => setMail(event.target.value)}
        />
      </label>
      <label>
        <input
          type="hidden"
          //   value={user.id}
          onChange={(event) => setIdUtilisateur(event.target.value)}
        />
      </label>
      <label>
        Prénom:
        <input
          type="text"
          value={prenom}
          onChange={(event) => setPrenom(event.target.value)}
        />
      </label>
      <label>
        Nom:
        <input
          type="text"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </label>
      <div>
        <label>
          <input
            type="radio"
            value={idTarif}
            onChange={(event) => setidTarif(event.target.value)}
            checked
          />
          Tarif 1
        </label>
        <label>
          <input
            type="radio"
            value={idTarif}
            onChange={(event) => setidTarif(event.target.value)}
          />
          Tarif 2
        </label>
        <label>
          <input
            type="radio"
            value={idTarif}
            onChange={(event) => setidTarif(event.target.value)}
          />
          Tarif 3
        </label>
      </div>
      <label>
        Date de visite:
        <input
          type="date"
          value={dateViste}
          onChange={(event) => setDateVisite(event.target.value)}
        />
      </label>
      <button type="submit">S'inscrire</button>
    </form>
  );
};
