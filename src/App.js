import { Card } from './components/Card/CardExpo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card titre='BILLET EXPOSITION' date='Du mardi 03 avril au dimanche 25 juin' text='FEMMES PEINTRES' />
        <Card titre='BILLET EXPOSITION' date='Du 30 juin au 30 septembre' text='FEMMES MUSICIENNES' />
        <Card titre='BILLET EXPOSITION' date='- - A venir - -' text='FEMMES SCIENTIFIQUES' />
        <Card titre='BILLET EXPOSITION' date='- - A venir - -' text='FEMMES ACTRICES' />
      </header>
    </div>
  );
}

export default App;


{/*import { Login } from "./components/login";
import { Inscription } from "./components/inscription";
import { ReadAll } from "./components/Admin/readAll";
import { Route, Routes } from "react-router-dom";
import { Accueil } from "./components/Accueil/Accueil";
import { Expo } from "./components/Expo/expositions";
import { Equipe } from "./components/Equipe/equipe";
import { Inscription } from "./components/FormUser/inscription";

const App = () => {
  return (
    <Routes>
      <Route path="/readAll" element={<ReadAll />} />
      <Route path="/" element={<Accueil />} />
      <Route path="/expositions" element={<Expo />} />
      <Route path="/equipe" element={<Equipe />} />
      <Route path="/incription" element={<Inscription />} />
    </Routes>
  );
};
export default App;*/}

