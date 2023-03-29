import { DejaMembre } from './components/DejaMembre/DejaMembre';
import { Inscription } from './components/Inscription/Inscription';

function App() {
  return (
    <div className="App">
      <Inscription />
    </div>
  );
}

export default App;


{/*import { Card } from './components/Card/CardExpo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card titre='BILLET EXPOSITION' date='Du mardi 03 avril au dimanche 25 juin' text='FEMMES PEINTRES' image_name="peintresse" image='assets/images/miniatures/Peintresse.png' />
        <Card titre='BILLET EXPOSITION' date='Du 30 juin au 30 septembre' text='FEMMES MUSICIENNES' image='assets/images/miniatures/danseuse.png' image_name="musicienne" />
        <Card titre='BILLET EXPOSITION' date='- - A venir - -' text='FEMMES SCIENTIFIQUES' image='assets/images/miniatures/ScienceWomen.png' image_name="scientifique" />
        <Card titre='BILLET EXPOSITION' date='- - A venir - -' text='FEMMES ACTRICES' image='assets/images/miniatures/StylishWomen.png' image_name="actrice" />
      </header>
    </div>
  );
}

export default App;*/}


/*import { Login } from "./components/login";
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
export default App;*/

