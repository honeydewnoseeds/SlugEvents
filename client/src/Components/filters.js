import React from "react";

function Filters({ handleFilterChange }) {
  return (
    <div className="btns">
      <button value="All" onClick={handleFilterChange}>
        All
      </button>
      <button value="College 9, College 10, College 9/10" onClick={handleFilterChange}>
        College 9/10
      </button>
      <button value="Cowell, Stevenson" onClick={handleFilterChange}>
        Cowell/Stevenson
      </button>
      <button value="Porter, Kresge" onClick={handleFilterChange}>
        Porter/Kresge
      </button>
      <button value="Oakes, RCC" onClick={handleFilterChange}>
        Oakes/RCC
      </button>
      <button value="Crown, Merill" onClick={handleFilterChange}>
        Crown/Merill
      </button>
    </div>
  );
}

export default Filters;
