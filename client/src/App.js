import { useEffect, useState } from "react";
import './App.css';
import { db } from './config/firebase';
import { getDocs, collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import Landing from "./pages/Landing";
import Info from "./pages/Info";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./Components/theme";
import { deleteDoc, doc, writeBatch } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  const [eventList, setEventList] = useState([]);
  const [filteredEventList, setFilteredEventList] = useState(null);
  const eventsCollectionRef = collection(db, "events");

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(eventsCollectionRef);
      const updatedData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEventList(updatedData);
    };
  
    fetchEvents();
  }, []);

  // Define a function to filter events by the "account" field
  const filterByAccount = (accountToFilter1, accountToFilter2) => {
    const filteredEvents = eventList.filter(
      (event) => event.account === accountToFilter1 || event.account === accountToFilter2
    );
    setFilteredEventList(filteredEvents);
  };  

  /*
  // Attach the filterByAccount function to the window object
  useEffect(() => {
    window.filterByAccount = filterByAccount;
    return () => {
      // Clean up the function from the window object when the component is unmounted
      delete window.filterByAccount;
    };
  }, [eventList]);
  */
  const resetFilter = () => {
    setFilteredEventList(null);
  };

  const filterC9C10 = () => {
    filterByAccount("ucsc9_jrl", )
  }

  const filterPorterKresge = () => {
    filterByAccount("porter.college", "kc_ucsc");
  }

  const filterCowellStevenson = () => {
    filterByAccount("stevenson.ucsc", "cowell.ucsc");
  }

  const filterRccOakes = () => {
    filterByAccount("rcc_ucsc", "oakescollege");
  }

  const filterCrownMerill = () => {
    filterByAccount("ucsccrowncollege", "ucscmerrillcollege");
  }

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
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing 
            eventList={filteredEventList || eventList}
            resetFilter={resetFilter}
            filterC9C10={filterC9C10}
            filterPorterKresge={filterPorterKresge}
            filterCowellStevenson={filterCowellStevenson}
            filterRccOakes={filterRccOakes}
            filterCrownMerill={filterCrownMerill}/>} />
          <Route path="/landing" element={<Landing 
            eventList={filteredEventList || eventList}
            resetFilter={resetFilter}
            filterC9C10={filterC9C10}
            filterPorterKresge={filterPorterKresge}
            filterCowellStevenson={filterCowellStevenson}
            filterRccOakes={filterRccOakes}
            filterCrownMerill={filterCrownMerill}/>} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;