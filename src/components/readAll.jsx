import React, {useState, useEffect} from "react";
export const ReadAll = () => {

const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://meneau-pro.com/api-php/controllers/readAll.php")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Nom: {user.nom} Prénom: {user.prenom} Age: {user.age} Mot de passe:
            {user.mdp} Mail: {user.mail} Reservation: {user.id_reservation}
          </li>
        ))}
      </ul>
    </div>
  );

}