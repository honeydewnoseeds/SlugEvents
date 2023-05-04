import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  // Card,
  // CardContent,
  // CardHeader,
  // useThemeProps,
} from "@mui/material";
import Event from "../Components/EventCard";
import Filters from "../Components/filters";
import CreateEvent from "../Components/CreateEvent";
import Popups from "../Components/popups";

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
        height="auto"
        minHeight="100vh"
        width="auto"
        overflow = "hidden"

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
          <Button
            variant="contained"
            onClick={() => setButtonPopup(true)}
            sx={{
              alignSelf: "flex-end",
              marginTop: "-5",
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            Create Event
          </Button>

          <Typography variant="h2" color="text.secondary">
            SlugEvents
          </Typography>

          <Stack direction="row" spacing={2}>
            <Filters
              resetFilter={resetFilter}
              filterC9C10={filterC9C10}
              filterPorterKresge={filterPorterKresge}
              filterCowellStevenson={filterCowellStevenson}
              filterRccOakes={filterRccOakes}
              filterCrownMerill={filterCrownMerill}
            />
          </Stack>

          <Stack
            direction="column"
            alignItems="center"
            textAlign="center"
            spacing={2}
          >
            {eventList.map((event) => (
              <Event
                key={event.title}
                title={event.title}
                description={event.description}
                imageSrc={event.imageSrc}
              />
            ))}
          </Stack>
        </Stack>
        <Popups trigger={buttonPopup}>
          <CreateEvent onClose={handlePopupClose}> </CreateEvent>
        </Popups>
      </Box>
    </div>
  );
}
