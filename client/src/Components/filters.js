import React from "react";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";

function Filters({
  resetFilter,
  filterC9C10,
  filterPorterKresge,
  filterCowellStevenson,
  filterRccOakes,
  filterCrownMerill,
}) {

  const isSmallScreen = useMediaQuery("(max-width:400px)");

  const buttonStyle = {
    whiteSpace: "nowrap",
    fontSize: isSmallScreen ? "8px" : "16px",
    minWidth: isSmallScreen ? "5px" : "10px",
    maxHeight: "30px",
    margin: "5px",
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={resetFilter}
        sx={{ backgroundColor: "#FFB6C1", color: "#000000", size: "large" }}
        style = {buttonStyle}
      >
        All
      </Button>
      <Button
        variant="contained"
        onClick={filterC9C10}
        sx={{ backgroundColor: "#E27396", color: "#000000" }}
        style={buttonStyle}
      >
        College 9/10
      </Button>
      <Button
        variant="contained"
        onClick={filterCowellStevenson}
        sx={{ backgroundColor: "#EA9AB2", color: "#000000" }}
        style={buttonStyle}
      >
        Cowell/Stevenson
      </Button>
      <Button
        variant="contained"
        onClick={filterPorterKresge}
        sx={{ backgroundColor: "#EFCFE3", color: "#000000" }}
        style={buttonStyle}
      >
        Porter/Kresge
      </Button>
      <Button
        variant="contained"
        onClick={filterRccOakes}
        sx={{
          backgroundColor: "#EAF2D7",
          color: "#000000",
          textAlign: "center",
        }}
        style = {buttonStyle}
      >
        Oakes/RCC
      </Button>
      <Button
        variant="contained"
        onClick={filterCrownMerill}
        sx={{
          backgroundColor: "#B3DEE2",
          color: "#000000",
        }}
        style = {buttonStyle}
      >
        Crown/Merrill
      </Button>
    </>
  );
}

export default Filters;
