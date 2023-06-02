import React from "react";
import "../Popups.css";
function Popup(props) {
  return props.trigger ? (
    <div data-testid="popup" className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : null;
}

export default Popup;
