import logo from "./logo.svg";
import "./App.css";
import { Destinationinfo } from "./components/Destinationinfo.jsx";
import { Rating } from "./components/rating.jsx";
import { Form } from "./components/Form/Form.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>le grand titre</h1>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
      
      {/*<main>
        {destination.map((destination) => {
          return <destination />;
        })}
        <Rating />
        <Destinationinfo />
      </main>*/}

      <Form/>


    </div>
  );
}

export default App;
