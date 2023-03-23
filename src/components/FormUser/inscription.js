import React, { useState, useEffect } from "react";
export const Inscription = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://meneau-pro.com/api-php/controllers/create.php")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return users.map((user) => (
    <div className="container" key={user.id}>
      <form>
        <label for="nom">Votre Nom</label>
        <input type="text" name="nom"></input>
        <label for="prenom">Votre prenom</label>
        <input type="text" name="prenom"></input>
        <label for="age">Votre age</label>
        <input type="text" name="age"></input>
        <label for="mdp">Votre Mot De Passe</label>
        <input type="text" name="mdp"></input>
        <label for="mail">Votre mail</label>
        <input type="text" name="mail"></input>
      </form>
      <ul>
        <li>Nom: {user.nom}</li>
        <li>Prénom: {user.prenom}</li>
        <li>Age: {user.age}</li>
        <li>Mot de passe: {user.mdp}</li>
        <li>Mail: {user.mail}</li>
        <li>Reservation: {user.id_reservation}</li>
      </ul>
      <form action="" method="DELETE" name="formDeleteUser">
        <input type="hidden" value={user.id} name="id_user" id="id_user" />
        <input type="submit" value="Supprimer l'utilisateur" />
      </form>
    </div>
  ));
};
