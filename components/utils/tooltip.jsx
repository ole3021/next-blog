import { useEffect } from "react";

const Tooltip = (props) => {
  useEffect(() => {
    let frontEnd = document.createElement("script");
    frontEnd.src = "/scripts/tooltip.js";
    frontEnd.id = "tooltip-js";
    document.body.appendChild(frontEnd);

    return () => {
      document.getElementById("tooltip-js").remove();
    };
  });

  return (
    <span
      className="tooltip-trigger js-tooltip-trigger"
      title={props.tip || "NULL"}
    >
      {props.children}
    </span>
  );
};

export default Tooltip;
