import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { db } from './config/firebase';
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [eventList, setEventList] = useState([]);

  const moviesCollectionRef = collection(db, "events");
  useEffect(() => {
    const getEventList = async() => {
      try {
        const data = await getDocs(moviesCollectionRef);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getEventList();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
