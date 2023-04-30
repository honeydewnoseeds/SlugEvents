import React from "react";

function Filters({ handleFilterChange }) {
  return (
    <div className="btns">
      <button class = "button btn1" value="All" onClick={handleFilterChange}>
        All
      </button>
      <button class = "button btn2" value="College 9, College 10, College 9/10" onClick={handleFilterChange}>
        College 9/10
      </button>
      <button class = "button btn3" value="Cowell, Stevenson" onClick={handleFilterChange}>
        Cowell/Stevenson
      </button>
      <button class = "button btn4" value="Porter, Kresge" onClick={handleFilterChange}>
        Porter/Kresge
      </button>
      <button class = "button btn5" value="Oakes, RCC" onClick={handleFilterChange}>
        Oakes/RCC
      </button>
      <button class = "button btn6" value = "Crown, Merill" onClick={handleFilterChange}>
        Crown/Merill
      </button>
    </div>
  );
}

export default Filters;
