import React from "react";
import { useState} from 'react';
import {
  Box,
  Typography,
  Stack,
  // Card,
  // CardContent,
  // CardHeader,
  // useThemeProps,
} from "@mui/material";
import Event from "./Components/EventCard";
import Filters from "./Components/filters";
import CreateEvent from "./Components/CreateEvent";
import Popups from "./Components/popups";

export default function Landing({
  eventList,
  resetFilter,
  filterC9C10,
  filterPorterKresge,
  filterCowellStevenson,
  filterRccOakes,
  filterCrownMerill,
}) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const handlePopupClose = () => {
    setButtonPopup(false);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
      }}
    >
      <Box
        height= "auto"
        minHeight = "100vh"
        width= "auto"
        //auto fit constraints
        flexGrow={1}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          //justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.default",
        }}
      >
        <Stack
          spacing={2}
          direction="column"
          alignItems="center"
          textAlign="center"
          padding={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" color="text.secondary">
            SlugEvents
          </Typography>
          
          <Stack direction = "row">
          <Filters
    resetFilter={resetFilter}
    filterC9C10={filterC9C10}
    filterPorterKresge={filterPorterKresge}
    filterCowellStevenson={filterCowellStevenson}
    filterRccOakes={filterRccOakes}
    filterCrownMerill={filterCrownMerill}
  />
          </Stack>

          <Stack direction="column" alignItems="center" textAlign="center" spacing={2}>
            {eventList.map((event) => (
              <Event
                key={event.title}
                title={event.title}
                description={event.description}
                imageSrc={event.imageSrc}
              />
            ))}
          </Stack>
          <div className="spec_btn">
            <button class = "button btn7" onClick={() => setButtonPopup(true)} style={{ position: "absolute", top: "20px", right: "20px",}}>
              Create Event
            </button>
          </div>
            <Popups trigger={buttonPopup}>
              <CreateEvent onClose = {handlePopupClose}> </CreateEvent>
            </Popups>
        </Stack>
      </Box>
    </div>
  );
}