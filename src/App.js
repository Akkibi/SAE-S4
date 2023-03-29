/* <<<<<<< HEAD
======= */
/* import { Login } from "./components/login";
=======
import { Card } from './components/Card/CardExpo';
=======
import { DejaMembre } from './components/DejaMembre/DejaMembre';
import { Inscription } from './components/Inscription/Inscription';
>>>>>>> origin/axelle

function App() {
  return (
    <div className="App">
      <DejaMembre />
    </div>
  );
}

export default App;


<<<<<<< HEAD
{/*import { Login } from "./components/login";
>>>>>>> origin/axelle
=======
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

export default App;*/


/*import { Login } from "./components/login";
>>>>>>> origin/axelle
import { Inscription } from "./components/inscription";
/* >>>>>>> origin/front-Jeannie 
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
import { ReservationP1 } from "./components/Reservation/reservationP1";
import { ReservationP2 } from "./components/Reservation/reservationP2";
import { ReservationP3 } from "./components/Reservation/reservationP3";

//Problèmes à résoudre

//Devoir se reconnecter à chaque changement de page?

const App = () => {
  const { isConnected, logout } = useContext(statusContext);
  if (isConnected === true) {
    console.log("coucou");
  }
  return (
    <div>
      <button type="button" onClick={logout}>
        Déconnexion
      </button>
      <a href="/">Accueil</a>
      <a href="/readAll">ReadAll</a>
      <a href="/expo">Expo</a>
      <a href="/reservation">Reservation</a>
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
        <Route path="/reservation" element={<ReservationP1 />} />
        <Route path="/reservation2" element={<ReservationP2 />} />
        <Route path="/reservation3" element={<ReservationP3 />} />
      </Routes>
    </div>
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
export default App;
 */