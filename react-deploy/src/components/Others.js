import React from "react";
import "../App.css";
import Link from "./Link";

const Others = () => {
  return (
    <div className="letter">
      <p>
        In my free time, I do ballet and I'm recently learning figure skating. I
        have a{" "}
        <Link
          url="https://www.instagram.com/goblinmunches/"
          text="food blog"
        ></Link>{" "}
        where I post good food and some awful cooking :)
      </p>
    </div>
  );
};

export default Others;
