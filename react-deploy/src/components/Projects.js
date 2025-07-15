import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import printer from "../assets/pancake_printer.jpg";
import triviac from "../assets/triviac.jpg";
import women from "../assets/women.png";
import IconLink from "./IconLink.js";
import Link from "./Link.js";
import Tag from "./Tag.js";

const Projects = () => {
  return (
    <div>
      <Row className="mb-5">
        <Image
          src={triviac}
          roundedCircle
          height="120px"
          width="120px"
          className="me-4"
        />
        <Col>
          <p className="project-title">Triviac - Trivia games</p>
          <p className="letter">
            An iOS app for generating, playing, and saving single- or
            multi-player trivia games.
            <br />
            <Tag text="UIKit"></Tag>
            <Tag text="Firebase"></Tag>
          </p>
          <IconLink url="https://github.com/anya-ji/triviac" text="GitHub" />
        </Col>
        <Col>
          <ReactPlayer
            className="react-player"
            url="video/triviac_demo.mov"
            controls={false}
            loop
            playing
            width="200px"
            height="auto"
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Image
          src={printer}
          roundedCircle
          height="120px"
          width="120px"
          className="me-4"
        />
        <Col>
          <p className="project-title">Pancake Printer</p>
          <p className="letter">
            A pancake printer that can be controlled with a joystick to print
            any shape of pancake you like - and it despenses rainbow sprinkles
            with a push of a button. Equipped with motorized printer structure
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

      <Row className="mb-5 justify-content-center">
        <ReactPlayer
          className="react-player"
          url="video/printer_demo.mp4"
          controls={false}
          loop
          playing
          width="350px"
          height="auto"
        />
      </Row>

      <Row className="mb-5">
        <Image
          src={women}
          roundedCircle
          height="120px"
          width="120px"
          className="me-4"
        />
        <Col>
          <p className="project-title">Health Friend</p>
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
    </div>
  );
};

export default Projects;
