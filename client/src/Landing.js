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

export default function Landing() {
  const [filterValue, setFilterValue] = useState("All");

  const handleFilterChange = (event) => {
    const values = event.target.value.split(",")
    setFilterValue(values);
  };

  const events = [
    {
      title: "EventTitle1",
      description: "This is an event from College 9.",
      imageSrc: "https://source.unsplash.com/random",
    },
    {
      title: "EventTitle2",
      description: "This is an event from College 10.",
      imageSrc: "https://source.unsplash.com/random",
    },
    {
      title: "EventTitle3",
      description: "This is an event from Stevenson.",
      imageSrc: "https://source.unsplash.com/random",
    },
    {
      title: "EventTitle4",
      description: "This is an event from Cowell.",
      imageSrc: "https://source.unsplash.com/random",
    },
    {
      title: "EventTitle5",
      description: "This is an event from Merill.",
      imageSrc: "https://source.unsplash.com/random",
    },

    {
      title: "EventTitle6",
      description: "This is an event from Crown",
      imageSrc: "https://source.unsplash.com/random",
    },

    {
      title: "EventTitle7",
      description: "This is an event from Oakes",
      imageSrc: "https://source.unsplash.com/random",
    },

    {
      title: "EventTitle8",
      description: "This is an event from Rachael Carson College or RCC",
      imageSrc: "https://source.unsplash.com/random",
    },

    {
      title: "EventTitle9",
      description: "This is an event from Kresge",
      imageSrc: "https://source.unsplash.com/random",
    },

    {
      title: "EventTitle10",
      description: "This is an event from Porter",
      imageSrc: "https://source.unsplash.com/random",
    },
  ];

  const filteredEvents = events.filter((event) =>
    //filterValue === "All" ? true : event.description.includes(filterValue)
    //checks if filter contains all, return events
    //if some string(s) in value is in event description, filter it
    filterValue.includes ("All") || filterValue.some(value => event.description.includes(value))
  );

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
            <Filters handleFilterChange={handleFilterChange} />
          </Stack>

          <Stack direction="column" alignItems="center" textAlign="center" spacing={2}>
            {filteredEvents.map((event) => (
              <Event
                key={event.title}
                title={event.title}
                description={event.description}
                imageSrc={event.imageSrc}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
