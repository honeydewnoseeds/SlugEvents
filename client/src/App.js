import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { db } from './config/firebase';
import { getDocs, collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

function App() {
  const [eventList, setEventList] = useState([]);
  const eventsCollectionRef = collection(db, "events");
  const addEvent = async (event) => {
    try {
      const docRef = await addDoc(eventsCollectionRef, event);
      console.log("Event added with ID:", docRef.id);
    } catch (err) {
      console.error("Error adding event:", err);
    }
  };

  addEvent({ name: "Sample Event", date: "2023-05-01" });
  useEffect(() => {
    const getEventList = async() => {
      try {
        const data = await getDocs(eventsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(), 
          id: doc.id,
        }));
        console.log(filteredData);
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
