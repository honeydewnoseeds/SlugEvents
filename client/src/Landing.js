import React, { useState } from "react";
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

export default function Landing({ eventList }) {
  const [filterValue, setFilterValue] = useState("All");
  const filterByAccount = (accountToFilter) => {
    const filteredEvents = eventList.filter((event) => event.account === accountToFilter);
    //setFilteredEventList(filteredEvents);
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
            <Filters handleFilterChange={filterByAccount} />
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
          <CreateEvent></CreateEvent>
        </Stack>
      </Box>
    </div>
  );
}