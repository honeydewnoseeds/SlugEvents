import React from "react";

function Filters({ filterByAccount }) {
  return (
    <div className="btns">
      <button class = "button btn1" value="All" onClick={filterByAccount}>
        All
      </button>
      <button class = "button btn2" value="College 9, College 10, College 9/10" onClick={filterByAccount}>
        College 9/10
      </button>
      <button class = "button btn3" value="Cowell, Stevenson" onClick={filterByAccount}>
        Cowell/Stevenson
      </button>
      <button class = "button btn4" value="Porter, Kresge" onClick={filterByAccount}>
        Porter/Kresge
      </button>
      <button class = "button btn5" value="Oakes, RCC" onClick={filterByAccount}>
        Oakes/RCC
      </button>
      <button class = "button btn6" value = "Crown, Merill" onClick={filterByAccount}>
        Crown/Merill
      </button>
    </div>
  );
}

export default Filters;
