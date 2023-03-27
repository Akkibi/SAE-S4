import React, { useState, useEffect } from "react";
import { statusContext } from "../../context/context";
import { useContext } from "react";
export const Login = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("https://meneau-pro.com/api-php/controllers/readAll.php")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data))
  //     .catch((err) => console.log(err));
  // }, []);
  const [mail, setMail] = useState("");
  const [mdp, setMdp] = useState("");
  const StatusContext = useContext(statusContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://meneau-pro.com/api-php/controllers/connexion.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mail,
        mdp,
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
        login:
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
      <button type="submit">Se connecter</button>
    </form>
  );
};
