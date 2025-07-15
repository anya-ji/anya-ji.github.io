import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Image, Row } from "react-bootstrap";
import "./App.css";
import github from "./assets/github.png";
import gmail from "./assets/gmail.png";
import head from "./assets/head.jpg";
import linkedin from "./assets/linkedin.png";
import scholar from "./assets/scholar.png";

import Content from "./components/Content.js";
import Link from "./components/Link.js";
import MenuButton from "./components/MenuButton.js";

const App = () => {
  const [content, setContent] = useState(0);

  // Add 'projects-page' class when content === 2
  const appClass = `App${content === 2 ? " projects-page" : ""}`;

  return (
    <div className={appClass}>
      <div className="left">
        <Row className="centered-col">
          <Image
            className="profile-image click"
            src={head}
            roundedCircle
            height="220px"
            width="220px"
            onClick={() => setContent(0)}
          />
        </Row>
        <Row className="centered-row">
          <h1 className="name">Anya Ji</h1>
        </Row>

        <Row className="centered-row">
          <div className="social-icons">
            <Link url="https://scholar.google.com/citations?user=UppptTkAAAAJ">
              <Image
                className="social-icon click"
                src={scholar}
                roundedCircle
                height="50px"
                width="50px"
              />
            </Link>
            <Link url="https://github.com/anya-ji">
              <Image
                className="social-icon click"
                src={github}
                roundedCircle
                height="50px"
                width="50px"
              />
            </Link>
            <Link url="https://www.linkedin.com/in/anya-ji/">
              <Image
                className="social-icon click"
                src={linkedin}
                roundedCircle
                height="50px"
                width="50px"
              />
            </Link>
            <Link url="mailto:anyaj0109@gmail.com">
              <Image
                className="social-icon click"
                src={gmail}
                roundedCircle
                height="50px"
                width="50px"
              />
            </Link>
          </div>
        </Row>

        <Row className="centered-col">
          <div className="nav-menu">
            <MenuButton
              onClick={() => setContent(0)}
              text={"about"}
              isActive={content === 0}
            />
            <MenuButton
              onClick={() => setContent(1)}
              text={"research"}
              isActive={content === 1}
            />
            <MenuButton
              onClick={() => setContent(2)}
              text={"projects"}
              isActive={content === 2}
            />
            <MenuButton
              onClick={() => setContent(3)}
              text={"*"}
              isActive={content === 3}
            />
          </div>
        </Row>
      </div>

      <div className="right">
        <div className="content-area">
          <Content content={content} />
        </div>
      </div>
    </div>
  );
};

export default App;
