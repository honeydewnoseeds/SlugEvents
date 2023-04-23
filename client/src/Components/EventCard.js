import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  media: {
    width: 300,
  },
  content: {
    flex: 1,
  },
}));

export default function Event(props) {
  const classes = useStyles();
  const { title, description, imageSrc } = props;

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={imageSrc} />
      <CardContent className={classes.content}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  );
}
