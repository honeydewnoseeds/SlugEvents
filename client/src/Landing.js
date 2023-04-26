import React from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  CardHeader,
  useThemeProps,
} from "@mui/material";
import Event from "./Components/EventCard";

export default function Landing() {
  return (
    <div
    style={{
      display: "flex",
      alignItems: "center",
      textAlign: "center",
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
        direction="column"
        alignItems = "center"
        textAlign = "center"
        padding={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography variant="h2" color="text.secondary" >
          SlugEvents
        </Typography>
        <Stack direction="column" alignItems = "center" textAlign = "center" spacing={2}>
          <Event alignItems = "center"
            title="EventTitle3"
            description="This is a website for UCSC students to find events on campus."
            imageSrc="https://source.unsplash.com/random"
          />
          <Event
            title="EventTitle4"
            description="This is a website for UCSC students to find evesfiohaifhasifbasuvfuavfuyasvudavsuavsudvasyunts on campus."
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
