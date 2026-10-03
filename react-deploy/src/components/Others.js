import React, { useState } from "react";
import "../App.css";
import Link from "./Link";
import { PROJECTS } from "./Projects";

const Others = () => {
  // Accordion: opening one project closes whichever was open before.
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

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
      <p className="mb-0">
        Some random projects from college:{" "}
        {PROJECTS.map(({ id, label }, i) => (
          <React.Fragment key={id}>
            {i > 0 && ", "}
            <button
              type="button"
              className={`project-toggle${openId === id ? " open" : ""}`}
              onClick={() => toggle(id)}
              aria-expanded={openId === id}
              aria-controls={`project-${id}`}
            >
              {label}
              <span className="project-caret" aria-hidden="true" />
            </button>
          </React.Fragment>
        ))}
        .
      </p>

      {PROJECTS.filter(({ id }) => id === openId).map(({ id, Body }) => (
        <div className="project-panel" id={`project-${id}`} key={id}>
          <Body />
        </div>
      ))}
    </div>
  );
};

export default Others;
