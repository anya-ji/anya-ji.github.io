import React from "react";
import "../App.css";
import Link from "./Link";

const Others = () => {
  return (
    <div className="letter">
      <p>
        I do ballet and I'm recently learning figure skating. I can juggle a
        bit. I have a{" "}
        <Link
          url="https://www.instagram.com/goblinmunches/"
          text="food blog"
        ></Link>{" "}
        where I post good food and some weird cooking.
      </p>
      <p>
        I also speak Mandarin and learned German and some American Sign
        Language.
      </p>
    </div>
  );
};

export default Others;
