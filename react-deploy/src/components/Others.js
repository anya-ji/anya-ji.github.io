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
        ) at Cornell. I post good food and some questionable cooking on my{" "}
        <Link
          url="https://www.instagram.com/onion_eats/"
          text="food blog"
        ></Link>
        .
      </p>
      <p>
        I also speak Mandarin, some German, and took American Sign Language in
        college. I picked up a little Danish during study abroad in Copenhagen,
        and have been learning Japanese.
      </p>
    </div>
  );
};

export default Others;
