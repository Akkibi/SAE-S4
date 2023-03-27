import { statusContext } from "../../context/context";
import { useContext } from "react";
import React, { useState, useEffect } from "react";

//Problèmes à résoudre

// Acces to fetch blocked by cors policy
//value in id type hidden should be {id} and {user.id}

export const ReadAll = () => {
  const { isConnected, logout } = useContext(statusContext);
  if (isConnected === true) {
    console.log("nique");
  } else {
    console.log("tg");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://meneau-pro.com/api-php/controllers/delete.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {});
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://meneau-pro.com/api-php/controllers/readAll.php")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);
  const [id, setId] = useState("");
  return users.map((user) => (
    <div className="container" key={user.id}>
      <ul>
        <li>Nom: {user.nom}</li>
        <li>Prénom: {user.prenom}</li>
        <li>Age: {user.age}</li>
        <li>Mot de passe: {user.mdp}</li>
        <li>Mail: {user.mail}</li>
        <li>Reservation: {user.id_reservation}</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          value={user.id | { id }}
          onChange={(event) => setId(event.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  ));
};
