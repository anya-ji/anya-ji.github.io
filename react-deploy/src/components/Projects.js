import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import prototype from "../assets/prototype.jpg";
import quolesomeness from "../assets/quolesomeness.png";
import triviac from "../assets/triviac.jpg";
import wholesome from "../assets/wholesome.png";
import women from "../assets/women.png";
import "./Projects.css";
import IconLink from "./IconLink.js";
import Link from "./Link.js";
import Tag from "./Tag.js";

const Projects = () => {
  return (
    <div className="projects-container">
      <Row className="pt-4">
        <Image src={triviac} roundedCircle height="100px" width="100px" />
        <Col>
          <p className="title">Triviac - Trivia games</p>
          <p className="letter">
            An iOS app for generating, playing, and saving single- or
            multi-player trivia games.
            <br />
            <Tag text="UIKit"></Tag>
            <Tag text="Firebase"></Tag>
          </p>
          <IconLink url="https://github.com/anya-ji/triviac" text="GitHub" />
        </Col>
      </Row>
      <br />
      <Row className="player-wrapper justify-content-center">
        <ReactPlayer
          className="react-player"
          url="video/triviac_demo.mov"
          controls={false}
          loop
          playing
        />
      </Row>

      <Row className="pt-4">
        <Image src={prototype} roundedCircle height="100px" width="100px" />
        <Col>
          <p className="title">Pancake Printer</p>
          <p className="letter">
            A pancake printer that can be controlled with a joystick to print any
            shape of pancake you like - and it despenses rainbow sprinkles with
            a push of a button. Equipped with motorized printer structure
            inspired by 3D printers, motion control system powered by Arduino,
            laser cut nozzle box, custom modeled and 3D printed frame connectors
            and sprinkles dispenser.
            <br />
            <Tag text="Arduino"></Tag>
            <Tag text="CAD"></Tag>
            <Tag text="Laser Cutting"></Tag>
            <Tag text="3D Printing"></Tag>
          </p>
          <IconLink
            url="https://www.youtube.com/watch?v=fjZnILbN7NU"
            text="YouTube"
          />
        </Col>
      </Row>
      <br />
      <Row className="player-wrapper justify-content-center">
        <ReactPlayer
          className="react-player"
          url="video/printer_demo.mp4"
          controls={false}
          loop
          playing
        />
      </Row>

      <br />

      <Row className="pt-4">
        <Image src={wholesome} height="100px" width="100px" />
        <Col>
          <p className="title">Quolesomeness - Wholesome quotes finder</p>
          <p className="letter">
            An information retrieval system to find personalized wholesome
            quotes based on categories, emotion, and your input text,
            integrating the Latent Semantic Indexing (LSI) Model, sentiment
            analysis, Wordnet word embeddings, pointwise mutual information
            (PMI) for tags merging, etc.
            <br />
            <Tag text="ReactJS"></Tag>
            <Tag text="Python"></Tag>
            <Tag text="Heroku"></Tag>
          </p>
          <IconLink
            url="https://github.com/anya-ji/quolesomeness"
            text="GitHub"
          />
        </Col>
      </Row>
      <br />
      <Row className="justify-content-center">
        <Image src={quolesomeness} height="400px" />
      </Row>

      <Row className="pt-4">
        <Image src={women} roundedCircle height="100px" width="100px" />
        <Col>
          <p className="title">Health Friend</p>
          <p className="letter">
            A tablet game developed at{" "}
            <Link
              url="https://www.cornellewh.org/"
              text="Cornell Engineering World Health"
            ></Link>{" "}
            to help women in low-resource areas in India to learn about their
            own bodies and menstrual health, partnered with Barefoot College in
            India.
            <br />
            <Tag text="Kivy"></Tag>
            <Tag text="Firebase"></Tag>
          </p>
          <IconLink
            url="https://github.com/Cornell-Engineering-World-Health/womens-health-game"
            text="GitHub"
          />
        </Col>
      </Row>

      <br />

      <Row className="pt-4">
        <br />
        {/* workaround for bottom margin :( */}
      </Row>
    </div>
  );
};

export default Projects;
