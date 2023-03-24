import { ReadAll } from "./components/Admin/readAll";
import { Route, Routes } from "react-router-dom";
import { Accueil } from "./components/Accueil/Accueil";
import { Expo } from "./components/Expo/expositions";
import { Equipe } from "./components/Equipe/equipe";
// import { Inscription } from "./components/FormUser/inscription";
import PostForm from "./components/FormUser/connexion";

const App = () => {
  return (
    <Routes>
      <Route path="/readAll" element={<ReadAll />} />
      <Route path="/" element={<Accueil />} />
      <Route path="/expositions" element={<Expo />} />
      <Route path="/equipe" element={<Equipe />} />
      {/* <Route path="/incription" element={<Inscription />} /> */}
      <Route path="/test" element={<PostForm />} />
    </Routes>
  );
};
export default App;
