import React, {useState, useEffect} from "react";
export const ReadAll = () => {

const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://meneau-pro.com/api-php/controllers/readAll.php")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  function DeleteUser(){
  const DeleteUser = () => {
    useEffect(() => {
      fetch("https://meneau-pro.com/api-php/controllers/delete.php")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err));
    }, []);}}
  
  return (
    users.map((user) => (
    <div className="container" key={user.id}>
      <ul>
          <li>Nom: {user.nom}</li>
          <li>Prénom: {user.prenom}</li>
          <li>Age: {user.age}</li>
          <li>Mot de passe: {user.mdp}</li>
          <li>Mail: {user.mail}</li>
          <li>Reservation: {user.id_reservation}</li>
      </ul>
      <form action={DeleteUser()} method="DELETE" name="formDeleteUser">
        <input type="hidden" value={user.id} name="id_user" id="id_user"/>
        <input type="submit" value="Supprimer l'utilisateur"/>
      </form>
    </div>
    ))
  );

}