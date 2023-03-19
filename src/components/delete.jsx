import React, {useState, useEffect} from "react";
export const DeleteUser = () => {

const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(("https://meneau-pro.com/api-php/controllers/delete.php"), {method : "DELETE"})
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));

      users.map((user) => (user.id))

  }, []);

return (
    <div>
        <form action="" method="DELETE">
            <label for="id">ID</label>
            <input type="text" name="id" />
            <label for="envoie">Envoyer</label>
            <input type="submit" name="envoie" />
        </form>
    </div>
);
}