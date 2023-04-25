import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { db } from './config/firebase';
import { getDocs, collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import Landing from "./Landing";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./Components/theme";

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
    <ThemeProvider theme={themeOptions}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
