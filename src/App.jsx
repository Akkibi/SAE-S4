import logo from "./logo.svg";
/* import "./App.css"; */
import { Destinationinfo } from "./components/Destinationinfo.jsx";
import { Rating } from "./components/rating.jsx";
import { Nav } from "./components/navigation/Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
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
