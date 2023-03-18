import "./App.css";
import { Login } from "./components/login";
import { Inscription } from "./components/inscription";
import React, { useState, useEffect, componentDidMount } from "react";

//Commentaires a ne pas supprimer

// const App = () => {
//   componentDidMount();
//   fetch("https://meneau-pro.com/api-php/controllers/readAll.php").then(
//     (response) => response.json()
//   );
// };

// const [users, setUsers] = useState([]);
// useEffect(() => {
//   fetch("https://meneau-pro.com/api-php/controllers/readAll.php")
//     .then((response) => response.json())
//     .then((data) => setUsers(data))
//     .catch((err) => console.log(err));
// }, []);
// return (
//   <div className="container">
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>
//           {user.prenom}
//           {user.nom}
//           {user.age}
//           {user.mdp}
//           {user.mail}
//           {user.id_reservation}
//           {user.id};
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// Vous pouvez écrire ci-dessous

export default App;
