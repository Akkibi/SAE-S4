import { ReadAll } from "./components/Admin/readAll";
import { Route, Routes } from "react-router-dom";
import { Accueil } from "./components/Accueil/Accueil";
import { Expo } from "./components/Expo/expositions";
import { Equipe } from "./components/Equipe/equipe";
import { ReadReservations } from "./components/Admin/readReservations";
import { ReadReservationsUser } from "./components/FormUser/reservationsUser";
import { useContext } from "react";
import { statusContext } from "./context/context";
import { SignUp } from "./components/FormUser/inscription";
import { Login } from "./components/FormUser/connexion";
import { Reserver } from "./components/Reservation/reservation";

//Problèmes à résoudre

//Devoir se reconnecter à chaque changement de page?

const App = () => {
  const { isConnected, logout } = useContext(statusContext);
  if (isConnected === true) {
    console.log("coucou");
  }
  return isConnected ? (
    <div>
      <button type="button" onClick={logout}>
        Déconnexion
      </button>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/readAll" element={<ReadAll />} />
        <Route path="/expo" element={<Expo />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/teste" element={<Login />} />
        <Route path="/reservations" element={<ReadReservations />} />
        <Route path="/mes-reservations" element={<ReadReservationsUser />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/reserver" element={<Reserver />} />
      </Routes>
    </div>
  ) : (
    <Login />
  );
};
export default App;
