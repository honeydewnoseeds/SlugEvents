import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Props.title = Event Title
// Props.description = event description
// Props.imageSrc = flyer from event
// Props.account = account that posted the event
const Event = (props) => {
  const navigate = useNavigate();

  //write a function that assigns a color to the card based on the college
  const color = () => {
    if (props.account === "ucsc9_jrl") {
      return "#E27396";
    } else if (
      props.account === "stevenson.ucsc" ||
      props.account === "cowell.ucsc"
    ) {
      return "#EA9AB2";
    } else if (
      props.account === "porter.college" ||
      props.college === "kc_ucsc"
    ) {
      return "#EFCFE3";
    } else if (
      props.account === "rcc_ucsc" ||
      props.account === "oakescollege"
    ) {
      return "#EAF2D7";
    } else if (
      props.account === "ucsccrowncollege" ||
      props.account === "ucscmerillcollege"
    ) {
      return "#B3DEE2";
    }
    return "#FFB6C1";
  };

  return (
    <Stack spacing={2} direction="column" alignItems="center">
      <Card
        sx={{
          width: "90vw",
          backgroundColor: color(props.account),
          borderRadius: "16px",
        }}
        onClick={() => navigate("/info")}
      >
        <Stack direction="column" alignItems="center" textAlign="center">
          <CardContent>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "primary.main" }}
            >
              {props.title}
            </Typography>
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
