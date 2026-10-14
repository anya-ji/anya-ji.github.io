import React, { useRef, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import tangram from "../assets/tangram.png";
import refgame from "../assets/refgame.png";
import adhoc from "../assets/adhoc.png";
import a2c from "../assets/a2c.gif";
import coach from "../assets/coach.png";
import cova from "../assets/cova.png";
import ResourceLink from "./ResourceLink.js";
import Link from "./Link.js";
import Tag from "./Tag.js";

const Me = () => <strong>Anya Ji</strong>;

// Newest first. `selected` entries also show under "selected"; everything
// shows under "all".
const PAPERS = [
  {
    image: cova,
    url: "https://arxiv.org/abs/2608.28958",
    title: "CoVA-SFT: A large-scale dataset for chain of visual abstractions",
    authors: (
      <>
        Tsung-Han Wu, Heekyung Lee, <Me />, Haoming Chen, Trevor Darrell,
        Joseph E. Gonzalez, David M. Chan
      </>
    ),
    tags: [{ text: "EMNLP 2026 Findings" }],
    links: [
      { url: "https://huggingface.co/datasets/tsunghanwu/cova", text: "Dataset" },
    ],
  },
  {
    image: coach,
    url: "https://arxiv.org/abs/2606.31980",
    title:
      "DigitalCoach: Communication and grounding gaps in human and agentic computer use coaching",
    authors: (
      <>
        Meng Chen, <Me />, Tsung-Han Wu, Tobias Maringgele, David M. Chan,
        Alane Suhr, Amy Pavel
      </>
    ),
    tags: [{ text: "EMNLP 2026" }, { text: "Oral (Top 3%)", award: true }],
    links: [
      { url: "https://project-digital-coach.vercel.app/", text: "Website" },
      {
        url: "https://huggingface.co/datasets/berkeley-hci/digital-coach",
        text: "Dataset",
      },
      {
        url: "https://project-digital-coach.vercel.app/explorer",
        text: "Dashboard",
      },
    ],
  },
  {
    selected: true,
    image: a2c,
    url: "https://arxiv.org/abs/2606.28593",
    title:
      "Animation2Code: Evaluating temporal visual reasoning in video-to-code generation",
    authors: (
      <>
        <Me />, Abhijith Varma Mudunuri, David M. Chan, Alane Suhr
      </>
    ),
    tags: [{ text: "NeurIPS 2026" }],
    links: [
      { url: "https://anya-ji.github.io/animation2code-website/", text: "Website" },
      { url: "https://huggingface.co/datasets/anim2code/dataset", text: "Dataset" },
    ],
  },
  {
    selected: true,
    image: adhoc,
    url: "https://arxiv.org/abs/2509.05566",
    title: "Ad hoc conventions generalize to new referents",
    authors: (
      <>
        <Me />, Claire Augusta Bergey, Ron Eliav, Yoav Artzi, Robert D. Hawkins
      </>
    ),
    tags: [{ text: "Science Advances (to appear)" }],
  },
  {
    image: refgame,
    url: "https://arxiv.org/abs/2305.06539",
    title:
      "Semantic uncertainty guides the extension of conventions to new referents",
    authors: (
      <>
        Ron Eliav, <Me />, Yoav Artzi, Robert D. Hawkins
      </>
    ),
    tags: [{ text: "Cog Sci 2023" }],
  },
  {
    selected: true,
    image: tangram,
    url: "https://arxiv.org/abs/2211.16492",
    title: "Abstract visual reasoning with tangram shapes",
    authors: (
      <>
        <Me />, Noriyuki Kojima, Noah Rush, Alane Suhr, Wai Keen Vong, Robert
        D. Hawkins, Yoav Artzi
      </>
    ),
    tags: [{ text: "EMNLP 2022" }, { text: "⭐ Best Long Paper", award: true }],
    links: [
      { url: "https://lil.nlp.cornell.edu/kilogram/dashboard/", text: "Dataset" },
      { url: "https://www.youtube.com/watch?v=hCmX8ZFIVf8", text: "Talk" },
      { url: "https://github.com/lil-lab/kilogram", text: "GitHub" },
      { url: "https://tangram-online.web.app/", text: "Task" },
    ],
  },
];

const FILTERS = ["selected", "all"];

const Paper = ({ image, url, title, authors, tags, links }) => (
  <Row className="mb-4">
    <Image src={image} className="paper-thumb" />
    <Col>
      <span className="research-title">
        <Link url={url} text={title} />
      </span>

      <p className="letter">{authors}</p>

      <div className="tags">
        {tags.map(({ text, award }) => (
          <Tag key={text} text={text} award={award} />
        ))}
      </div>

      {links && (
        <div className="resource-links">
          {links.map(({ url, text }) => (
            <ResourceLink key={url} url={url} text={text} />
          ))}
        </div>
      )}
    </Col>
  </Row>
);

const Research = () => {
  const [filter, setFilter] = useState("selected");
  const rootRef = useRef(null);
  const papers =
    filter === "all" ? PAPERS : PAPERS.filter(({ selected }) => selected);

  // The card starts vertically centred via auto margins, which would re-centre
  // it (moving its top up) as the list grows. Pin the top margin at its current
  // size before switching so the card only extends or shrinks at the bottom.
  // The anchor remounts on every tab switch, which clears the pin.
  const selectFilter = (name) => {
    const anchor = rootRef.current?.closest(".content-anchor");
    if (anchor) anchor.style.marginTop = getComputedStyle(anchor).marginTop;
    setFilter(name);
  };

  return (
    <div ref={rootRef}>
      <div className="section-label">
        {FILTERS.map((name, i) => (
          <React.Fragment key={name}>
            {i > 0 && " / "}
            <button
              type="button"
              className={`filter-toggle${filter === name ? " active" : ""}`}
              onClick={() => selectFilter(name)}
            >
              {name}
            </button>
          </React.Fragment>
        ))}
      </div>

      {papers.map((paper) => (
        <Paper key={paper.url} {...paper} />
      ))}
    </div>
  );
};

export default Research;
