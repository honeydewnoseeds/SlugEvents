import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { db } from './config/firebase';
import { getDocs, collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import Landing from "./Landing";
import Info from "./info";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./Components/theme";
import { deleteDoc, doc, writeBatch } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

function App() {
  const [eventList, setEventList] = useState([]);
  const [filteredEventList, setFilteredEventList] = useState(null);
  const eventsCollectionRef = collection(db, "events");

  useEffect(() => {
    const unsubscribe = onSnapshot(eventsCollectionRef, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEventList(updatedData);
    });
  
    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // Define a function to filter events by the "account" field
  const filterByAccount = (accountToFilter) => {
    const filteredEvents = eventList.filter((event) => event.account === accountToFilter);
    setFilteredEventList(filteredEvents);
  };

  // Attach the filterByAccount function to the window object
  useEffect(() => {
    window.filterByAccount = filterByAccount;
    return () => {
      // Clean up the function from the window object when the component is unmounted
      delete window.filterByAccount;
    };
  }, [eventList]);

  const resetFilter = () => {
    setFilteredEventList(null);
  };

  // Attach the resetFilter function to the window object
  useEffect(() => {
    window.resetFilter = resetFilter;
    return () => {
      // Clean up the function from the window object when the component is unmounted
      delete window.resetFilter;
    };
  }, []);

//Add an event using the format addEvent({account: "Porter/Kresge", description: "Lorem ipsum", imageSrc: "https://source.unsplash.com/random"})
const addEvent = async (event = {
  account: "Porter/Kresge",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  imageSrc: "https://source.unsplash.com/random"
}) => {
  try {
    const docRef = await addDoc(eventsCollectionRef, event);
    console.log("Event added with ID:", docRef.id);
  } catch (err) {
    console.error("Error adding event:", err);
  }
};
  window.addEvent = addEvent;
  
  //Clears all events from database
  const clearEvents = async () => {
    try {
      const data = await getDocs(eventsCollectionRef);
      const batch = writeBatch(db);
      data.docs.forEach((docSnapshot) => {
        batch.delete(doc(eventsCollectionRef, docSnapshot.id));
      });
      await batch.commit();
      console.log("All events deleted");
    } catch (err) {
      console.error("Error deleting events:", err);
    }
  };
  window.clearEvents = clearEvents;

  return (
    <ThemeProvider theme={themeOptions}>
      <Landing eventList={filteredEventList || eventList} />
    </ThemeProvider>
  );
}

export default App;