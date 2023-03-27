import { ReadAll } from "./components/Admin/readAll";
import { Route, Routes } from "react-router-dom";
import { Accueil } from "./components/Accueil/Accueil";
import { Expo } from "./components/Expo/expositions";
import { Equipe } from "./components/Equipe/equipe";
import { useContext } from "react";
import { statusContext } from "./context/context";
// import { Inscription } from "./components/FormUser/inscription";
import { Login } from "./components/FormUser/connexion";

const App = () => {
  const { isConnected, logout } = useContext(statusContext);
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
      </Routes>
    </div>
  ) : (
    <Login />
  );
};
export default App;
