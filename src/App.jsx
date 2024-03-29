/* import "./App.css"; */
/* import { Destinationinfo } from "./components/Destinationinfo.jsx";
import { Rating } from "./components/rating.jsx"; */
import { Nav } from "./components/navigation/Nav";
import { Footer } from "./components/footer/Footer";
/* import { Login } from "./components/login"; */
import { SignUp } from "./components/FormUser/inscription.js";
import { ReadAll } from "./components/Admin/readAll";
import { Route, Routes } from "react-router-dom";
import { Accueil } from "./components/Accueil/Accueil.jsx";
import { Expo } from "./components/Expo/expositions";
import { Equipe } from "./components/About/Equipe/Equipe";
import { ReservationP1 } from "./components/Reservation/reservationP1";
import { ReservationP2 } from "./components/Reservation/reservationP2";
import { ReservationP3 } from "./components/Reservation/reservationP3";
import { ReservationP4 } from "./components/Reservation/reservationP4";
import { Mention } from "./components/About/Mention/Mention";
/* import { Inscription } from "./components/FormUser/inscription"; */
import { Page } from "./components/Page";
import { Inscription } from "./components/Inscription/Inscription";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/readAll" element={<ReadAll />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/expositions" element={<Page />} />
        <Route path="/apropos/equipe" element={<Equipe />} />
        <Route path="/apropos/mentionslegales" element={<Mention />} />
        <Route path="/incription" element={<SignUp />} />
        <Route path="/reserver/billets" element={<ReservationP1 />} />
        <Route path="/reserver/dates" element={<ReservationP2 />} />
        <Route path="/reserver/information" element={<ReservationP3 />} />
        <Route path="/reserver/valider" element={<ReservationP4 />} />
        <Route path="/les-femmes-peintres" element={<Page />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
      <Footer></Footer>
      {/* <div className="App">
        <header className="App-header">
          <h1>le grand titre</h1>
          {<img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>}
        </header>
        <main>
          {{destination.map((destination) => {
            return <destination />;
          })}}
          <Rating />
          <Destinationinfo />
        </main>
      </div> */}
    </div>
  );
}

export default App;
