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
    <Box
      height="100vh"
      width="100vw"
      flexGrow={1}
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
      }}
    >
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        padding={2}
        // paddingLeft={"40vh"}
        // paddingRight={"40vh"}
      >
        <Typography variant="h1" color="text.secondary">
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
        </Stack>
      </Stack>
    </Box>
  );
}
