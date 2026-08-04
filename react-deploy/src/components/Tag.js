import React from "react";
import "../App.css";

// A white chip with a light blue border; `award` swaps it to light yellow.
const Tag = ({ text, award }) => {
  return <span className={`tag${award ? " tag-award" : ""}`}>{text}</span>;
};

export default Tag;
