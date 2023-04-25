import React from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import Event from "./Components/EventCard";

export default function Landing() {
  return (
    <div
    style={{
      display: "flex",
      alignItems: "center",
      height: "100%"
    }}
  >
    <Box
      height="auto"
      width="auto"
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
        padding={2}
      >
        <Typography variant="h1" textAlign = "center" color="text.secondary">
          SlugEvents
        </Typography>
        <Stack direction="column" spacing={2}>
          <Event
            title="EventTitle4"
            description="This is a website for UCSC students to find events on campus."
            imageSrc="https://source.unsplash.com/random"
          />
          <Event
            title="EventTitle4"
            description="This is a website for UCSC students to find events on campus."
            imageSrc="https://source.unsplash.com/random"
          />
          <Event
            title="EventTitle5"
            description="This is a website for UCSC students to find events on campus."
            imageSrc="https://source.unsplash.com/random"
          />
          <Event
            title="EventTitle6"
            description="This is a website for UCSC students to find events on campus."
            imageSrc="https://source.unsplash.com/random"
          />
          <Event
            title="EventTitle6"
            description="This is a website for UCSC students to find events on campus."
            imageSrc="https://source.unsplash.com/random"
          />
        </Stack>
      </Stack>
    </Box>
    </div>
  );
}
