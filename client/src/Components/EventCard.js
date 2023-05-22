import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Event = (props) => {
  const navigate = useNavigate();

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
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "85%",
        backgroundColor: color(props.account),
        borderRadius: "16px",
      }}
      onClick={() => navigate("/info",{state: {
        imageSrc: props.imageSrc,
        description: props.description,
      }})}
    >
      <img
        src={props.imageSrc}
        alt={props.title}
        style={{
          width: "30%",
          height: "100%", // Set a fixed height for the images
          objectFit: "cover",
          borderRadius: "16px 0 0 16px",
        }}
      />
      <CardContent>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Typography variant="h4" color="primary">
              {props.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{props.description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Event;
