import React from "react";
import {
  Card,
  // CardMedia,
  CardContent,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";

// Props.title = Event Title
// Props.description = event description
// Props.imageSrc = flyer from event
const Event = (props) => {
  return (
    <Card sx={{ width: "100%", backgroundColor: "background.paper" }}>
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Avatar alt={props.title} src={props.imageSrc} />
          <Typography variant="subtitle">{props.title}</Typography>
        </Stack>
        <Typography component="div" marginTop={2}>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Event;
