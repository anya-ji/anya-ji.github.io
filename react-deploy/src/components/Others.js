import React from "react";
import "../App.css";
import Link from "./Link";

const Others = () => {
  return (
    <div className="letter">
      <p>
        I do ballet growing up, and I'm recently learning figure skating! I
        learned to juggle a bit (balls and{" "}
        <Link url="https://en.wikipedia.org/wiki/Diabolo" text="diabolo"></Link>
        ) at Cornell (
        <Link
          url="https://scl.cornell.edu/coe/pe-courses/fall-pe-courses/circus/juggling"
          text="fun class!"
        ></Link>
        ). I post good food and some questionable cooking on my{" "}
        <Link
          url="https://www.instagram.com/onion_eats/"
          text="food blog"
        ></Link>
        .
      </p>
      <p>
        I also speak Mandarin, learned German throughout my middle and high
        school years, and took American Sign Language in college. I
        learned a bit of Danish during study abroad in Copenhagen, and I've
        always been learning Japanese on and off (sorry Duo).
      </p>
    </div>
  );
};

export default Others;
