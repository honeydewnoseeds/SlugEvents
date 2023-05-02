import React from "react";

function Filters({
  resetFilter,
  filterC9C10,
  filterPorterKresge,
  filterCowellStevenson,
  filterRccOakes,
  filterCrownMerill,
}) {
  return (
    <div className="btns">
      <button class = "button btn1" value="All" onClick={resetFilter}>
        All
      </button>
      <button class = "button btn2" value="College 9, College 10, College 9/10" onClick={filterC9C10}>
        College 9/10
      </button>
      <button class = "button btn3" value="Cowell, Stevenson" onClick={filterCowellStevenson}>
        Cowell/Stevenson
      </button>
      <button class = "button btn4" value="Porter, Kresge" onClick={filterPorterKresge}>
        Porter/Kresge
      </button>
      <button class = "button btn5" value="Oakes, RCC" onClick={filterRccOakes}>
        Oakes/RCC
      </button>
      <button class = "button btn6" value = "Crown, Merill" onClick={filterCrownMerill}>
        Crown/Merill
      </button>
    </div>
  );
}

export default Filters;
