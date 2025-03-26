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

  return (
    <div className="App">
      <div className="left">
        <Row className="centered-col">
          <Image
            className="m-3 click"
            src={head}
            roundedCircle
            height="200px"
            width="200px"
            onClick={() => setContent(0)}
          />
        </Row>
        <Row className="centered-row letter" style={{ textAlign: "center" }}>
          <h1 style={{ textAlign: "left", fontWeight: "bold" }}>Anya Ji</h1>
        </Row>

        <Row className="centered-row">
          <Link url="https://scholar.google.com/citations?user=UppptTkAAAAJ">
            <Image
              className="m-3 click"
              src={scholar}
              roundedCircle
              height="50px"
            />
          </Link>
          <Link url="https://github.com/anya-ji">
            <Image
              className="m-3 click"
              src={github}
              roundedCircle
              height="50px"
            />
          </Link>
          <Link url="https://www.linkedin.com/in/anya-ji/">
            <Image
              className="m-3 click"
              src={linkedin}
              roundedCircle
              height="50px"
            />
          </Link>
          <Link url="mailto:anyaj0109@gmail.com">
            <Image
              className="m-3 click"
              src={gmail}
              roundedCircle
              height="50px"
            />
          </Link>
        </Row>

        <Row className="centered-col menu">
          <MenuButton
            onClick={() => setContent(0)}
            text={"About"}
            isActive={content === 0}
          />
          <MenuButton
            onClick={() => setContent(1)}
            text={"Research"}
            isActive={content === 1}
          />
          <MenuButton
            onClick={() => setContent(2)}
            text={"Projects"}
            isActive={content === 2}
          />
          <MenuButton
            onClick={() => setContent(3)}
            text={"*"}
            isActive={content === 3}
          />
        </Row>
      </div>

      <div className="right">
        <Content content={content} />
      </div>
    </div>
  );
};

export default App;
