import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import "./App.css";
import github from "./assets/github.png";
import head from "./assets/head.jpg";
import linkedin from "./assets/linkedin.png";
import scholar from "./assets/scholar.png";

import Content from "./components/Content.js";
import Link from "./components/Link.js";
import MenuButton from "./components/MenuButton.js";
import SparkleBurst from "./components/SparkleBurst.js";

const SOCIALS = [
  { url: "https://www.linkedin.com/in/anya-ji/", icon: linkedin },
  { url: "https://scholar.google.com/citations?user=UppptTkAAAAJ", icon: scholar },
  { url: "https://github.com/anya-ji", icon: github },
];

const TABS = [
  { id: 0, label: "about" },
  { id: 1, label: "research" },
  { id: 3, label: "*" },
];

// Every wand sprite in the folder, bundled at build time.
const wandContext = require.context("./cursors/wands", false, /wand-\d+\.png$/);
const WANDS = wandContext.keys().sort().map(wandContext);

// The sprites are mirrored to point up and to the left, like a normal cursor.
// Measured across all 64, the tip lands within a few pixels of here, so one
// hotspot serves them all.
const WAND_HOTSPOT = "5 3";

const pickWand = (current) => {
  if (WANDS.length < 2) return WANDS[0];
  let next = current;
  while (next === current) next = WANDS[Math.floor(Math.random() * WANDS.length)];
  return next;
};

const App = () => {
  const [content, setContent] = useState(0);
  // A wand is ready from the start so pressing the portrait shows one; it only
  // sticks page-wide once the portrait has actually been clicked.
  const [wand, setWand] = useState(() => pickWand(null));
  const [wandSticks, setWandSticks] = useState(false);

  useEffect(() => {
    document.body.style.setProperty(
      "--wand-cursor",
      `url("${wand}") ${WAND_HOTSPOT}, pointer`
    );
  }, [wand]);

  // Set on <body> rather than the app root so the wand also covers the
  // margins outside the centered layout.
  useEffect(() => {
    document.body.classList.toggle("wand-cursor", wandSticks);
  }, [wandSticks]);

  const onProfileClick = () => {
    setContent(0);
    setWandSticks(true);
    setWand(pickWand);
  };

  // The "*" tab can grow tall once projects are expanded, so let it scroll.
  const appClass = `App${content === 3 ? " scroll-page" : ""}`;

  return (
    <div className={appClass}>
      <div className="left">
        <Row className="centered-col">
          <SparkleBurst onClick={onProfileClick}>
            <Image
              className="profile-image click"
              src={head}
              roundedCircle
              height="150px"
              width="150px"
            />
          </SparkleBurst>
        </Row>
        <Row className="centered-row">
          <h1 className="name">
            Anya Ji
            <span className="name-tooltip">
              AN-yuh, sometimes AHN-yuh so it doesn't get spelled with an "E"
            </span>
          </h1>
        </Row>
        <Row className="centered-row">
          <p className="email">anyaji@berkeley.edu</p>
        </Row>

        <Row className="centered-row">
          <div className="social-icons">
            {SOCIALS.map(({ url, icon }) => (
              <Link key={url} url={url}>
                <Image
                  className="social-icon click"
                  src={icon}
                  roundedCircle
                  height="30px"
                  width="30px"
                />
              </Link>
            ))}
          </div>
        </Row>

        <Row className="centered-col">
          <div className="nav-menu">
            {TABS.map(({ id, label }) => (
              <MenuButton
                key={id}
                onClick={() => setContent(id)}
                text={label}
                isActive={content === id}
              />
            ))}
          </div>
        </Row>
      </div>

      <div className="right">
        <div key={content} className="content-area">
          <Content content={content} />
        </div>
      </div>
    </div>
  );
};

export default App;
