import React from "react";
import "../App.css";
import Link from "./Link";

const Others = () => {
  return (
    <p className="letter">
      In my free time, I do ballet and I'm recently learning figure skating. I
      have a{" "}
      <Link
        url="https://www.instagram.com/goblinmunches/"
        text="food blog"
      ></Link>{" "}
      where I post good food and some awful cooking.
    </p>
  );
};

export default Others;
