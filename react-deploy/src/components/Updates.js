import React, { useLayoutEffect, useRef, useState } from "react";
import "../App.css";
import Link from "./Link";

// Newest first. The first VISIBLE entries always show; the rest sit behind
// the expander.
const UPDATES = [
  {
    date: "Oct 2026",
    body: (
      <>
        Co-organizing{" "}
        <Link
          url="https://learning-situated-interaction.github.io/"
          text="Learning from Situated and Embodied Interaction Workshop"
        />{" "}
        @ COLM '26
      </>
    ),
  },
  {
    date: "Sep 2026",
    body: (
      <>
        <Link url="https://arxiv.org/abs/2606.28593" text="Animation2Code" />{" "}
        accepted to NeurIPS '26!
      </>
    ),
  },
  {
    date: "Aug 2026",
    body: (
      <>
        Two papers accepted to EMNLP '26:{" "}
        <Link url="https://arxiv.org/abs/2606.31980" text="DigitalCoach" />{" "}
        (Main, Oral) and{" "}
        <Link url="https://arxiv.org/abs/2608.28958" text="CoVA-SFT" />{" "}
        (Findings)!
      </>
    ),
  },
  {
    date: "May 2026",
    body: <>Starting reseach internship @ Adobe</>,
  },
  {
    date: "Oct 2025",
    body: (
      <>
        Co-organizing{" "}
        <Link
          url="https://sites.google.com/berkeley.edu/praglm/"
          text="PragLM Workshop"
        />{" "}
        @ COLM '25
      </>
    ),
  },
];

const VISIBLE = 3;
// Past this many, the expanded list scrolls instead of growing.
const MAX_EXPANDED = 5;

const Updates = () => {
  const [expanded, setExpanded] = useState(false);
  const [atEnd, setAtEnd] = useState(true);
  const listRef = useRef(null);
  const shown = expanded ? UPDATES : UPDATES.slice(0, VISIBLE);
  const scrolls = expanded && UPDATES.length > MAX_EXPANDED;

  // Cap the scrolling list at the bottom of its MAX_EXPANDED-th item, since
  // entries wrap to different heights.
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!scrolls) {
      list.style.maxHeight = "";
      setAtEnd(true);
      return;
    }
    const last = list.children[MAX_EXPANDED - 1];
    const cap =
      last.getBoundingClientRect().bottom - list.getBoundingClientRect().top;
    list.style.maxHeight = `${cap}px`;
    list.scrollTop = 0;
    setAtEnd(false);
  }, [scrolls]);

  const onScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    setAtEnd(scrollTop + clientHeight >= scrollHeight - 2);
  };

  // Positioned below the about card by CSS, outside the layout that centers
  // it, so expanding only ever grows downward.
  return (
    <div className="updates-card">
      <div className="letter">
        <ul
          className={`update-list${scrolls && !atEnd ? " fade-end" : ""}`}
          id="update-list"
          ref={listRef}
          onScroll={scrolls ? onScroll : undefined}
        >
          {shown.map(({ date, body }, i) => (
            <li className="update-item" key={i}>
              <span className="update-date">{date}</span>
              <span>{body}</span>
            </li>
          ))}
        </ul>
        {UPDATES.length > VISIBLE && (
          <button
            type="button"
            className={`project-toggle update-toggle${expanded ? " open" : ""}`}
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            aria-controls="update-list"
          >
            {expanded ? "see less" : "see more"}
            <span className="project-caret" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Updates;
