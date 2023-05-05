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
        sx={{ backgroundColor: "#FFB6C1", color: "#000000", size: "large" }}
      >
        All
      </Button>
      <Button
        variant="contained"
        onClick={filterC9C10}
        sx={{ backgroundColor: "#E27396", color: "#000000" }}
      >
        College 9/10
      </Button>
      <Button
        variant="contained"
        onClick={filterCowellStevenson}
        sx={{ backgroundColor: "#EA9AB2", color: "#000000" }}
      >
        Cowell/Stevenson
      </Button>
      <Button
        variant="contained"
        onClick={filterPorterKresge}
        sx={{ backgroundColor: "#EFCFE3", color: "#000000" }}
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
      >
        Crown/Merrill
      </Button>
    </>
  );
}

export default Filters;
