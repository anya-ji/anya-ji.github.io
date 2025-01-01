import React from "react";
import { Badge } from "react-bootstrap";
import "../App.css";

const Tag = ({ text, color, textColor }) => {
  return (
      <Badge
        style={{
          backgroundColor: color ?? "white",
          color: textColor ?? "#27292a",
          margin: "8px 4px 4px 0",
        }}
      >
        {text}
      </Badge>
  );
};

export default Tag;
