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
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
        // padding: "10%",
      }}
    >
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        paddingLeft={"40vh"}
        paddingRight={"40vh"}
      >
        <Typography variant="h1" color="text.secondary">
          SlugEvents
        </Typography>
        <Card sx={{ backgroundColor: "background.paper" }}>
          <CardHeader title="EventTitle" />
          <CardContent>
            <Typography variant="body1">
              This is a website for UCSC students to find events on campus.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: "background.paper" }}>
          <CardHeader title="EventTitle2" />
          <CardContent>
            <Typography variant="body1">
              This is a website for UCSC students to find events on campus.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: "background.paper" }}>
          <CardHeader title="EventTitle3" />
          <CardContent>
            <Typography variant="body1">
              This is a website for UCSC students to find events on campus.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <Stack spacing={2} direction="column" alignItems="center"></Stack>
    </Box>
  );
}
