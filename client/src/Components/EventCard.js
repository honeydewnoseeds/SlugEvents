import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";

// Props.title = Event Title
// Props.description = event description
// Props.imageSrc = flyer from event
const Event = (props) => {
  return (
    <Stack spacing={2} direction="column" alignItems="center">
      <Card
        sx={{
          width: "70vw",
          backgroundColor: "background.paper",
          borderRadius: "16px",
        }}
      >
        <Stack direction="column" alignItems="center" textAlign="center">
          <CardContent>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "primary.main" }}
            >
              {props.title}
            </Typography>
            {/* <Card sx={{ backgroundColor: "primary.main", width: "50vw" }}> */}
            <img
              src={props.imageSrc}
              alt={props.title}
              style={{
                width: "100%",
                height: "auto",
                margin: "0.1rem",
                marginBottom: "0.5rem",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
            {/* </Card> */}
            <Typography
              sx={{ textAlign: "left", fontSize: "h3", noWrap: "false" }}
            >
              {props.description}
            </Typography>
          </CardContent>
        </Stack>
      </Card>
    </Stack>
  );
};

export default Event;
