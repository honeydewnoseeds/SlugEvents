import React from "react";
import Button from "@mui/material/Button";

function Filters({
  resetFilter,
  filterC9C10,
  filterPorterKresge,
  filterCowellStevenson,
  filterRccOakes,
  filterCrownMerill,
}) {
  return (
    <>
      <Button
        variant="contained"
        onClick={resetFilter}
        sx={{ backgroundColor: "#FFB6C1", color: "#FFFFFF" }}
      >
        All
      </Button>
      <Button
        variant="contained"
        onClick={filterC9C10}
        sx={{ backgroundColor: "#FFB6C1", color: "#FFFFFF" }}
      >
        College 9/10
      </Button>
      <Button
        variant="contained"
        onClick={filterCowellStevenson}
        sx={{ backgroundColor: "#FFB6C1", color: "#FFFFFF" }}
      >
        Cowell/Stevenson
      </Button>
      <Button
        variant="contained"
        onClick={filterPorterKresge}
        sx={{ backgroundColor: "#FFB6C1", color: "#FFFFFF" }}
      >
        Porter/Kresge
      </Button>
      <Button
        variant="contained"
        onClick={filterRccOakes}
        sx={{ backgroundColor: "#FFB6C1", color: "#FFFFFF" }}
      >
        Oakes/RCC
      </Button>
      <Button
        variant="contained"
        onClick={filterCrownMerill}
        sx={{ backgroundColor: "#FFB6C1", color: "#FFFFFF" }}
      >
        Crown/Merrill
      </Button>
    </>
  );
}

export default Filters;
