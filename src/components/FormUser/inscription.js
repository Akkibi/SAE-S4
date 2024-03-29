import React, { useState, useEffect } from "react";
import { statusContext } from "../../context/context";
import { useContext } from "react";

//Problèmes à résoudre

// Acces to fetch blocked by cors policy

export const SignUp = () => {
  const [mail, setMail] = useState("");
  const [mdp, setMdp] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const StatusContext = useContext(statusContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://meneau-pro.com/api-php/controllers/create.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mail,
        mdp,
        prenom,
        nom,
        age,
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
        mdp:
        <input
          type="password"
          value={mdp}
          onChange={(event) => setMdp(event.target.value)}
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
      <button type="submit">S'inscrire</button>
    </form>
  );
};
