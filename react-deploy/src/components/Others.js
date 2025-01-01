import React from "react";
import "../App.css";
import Link from "./Link";

const Others = () => {
  return (
    <p className="letter">
      In my free time, I do ballet and I'm recently learning figure skating. I
      share good food and awful cooking at{" "}
      <Link
        url="https://www.instagram.com/goblinmunches/"
        text="@goblinmunches"
      ></Link>
      .
    </p>
  );
};

export default Others;
