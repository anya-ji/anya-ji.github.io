import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import printer from "../assets/pancake_printer.jpg";
import triviac from "../assets/triviac.jpg";
import women from "../assets/women.png";
import ResourceLink from "./ResourceLink.js";
import Link from "./Link.js";
import Tag from "./Tag.js";

const playerConfig = {
  file: {
    attributes: {
      playsInline: true,
      "webkit-playsinline": true,
      preload: "metadata",
    },
  },
};

const Video = ({ url, width }) => (
  <ReactPlayer
    className="react-player"
    url={url}
    controls={false}
    loop
    playing
    width={width}
    height="auto"
    playsinline
    muted
    config={playerConfig}
  />
);

const Triviac = () => (
  <div>
    <Row className="mb-4">
      <Image
        src={triviac}
        roundedCircle
        height="80px"
        width="80px"
        className="me-3"
      />
      <Col>
        <p className="project-title">Triviac - Trivia games</p>
        <p className="letter">
          An iOS app for generating, playing, and saving single- or multi-player
          trivia games.
        </p>
        <div className="tags">
          <Tag text="UIKit"></Tag>
          <Tag text="Firebase"></Tag>
        </div>
        <div className="resource-links">
          <ResourceLink url="https://github.com/anya-ji/triviac" text="GitHub" />
        </div>
      </Col>
      <Col className="d-none d-lg-block">
        <Video url="video/triviac_demo.mov" width="150px" />
      </Col>
    </Row>

    {/* when screen is narrow */}
    <Row className="mb-2 d-flex d-lg-none justify-content-center">
      <Video url="video/triviac_demo.mov" width="150px" />
    </Row>
  </div>
);

const PancakePrinter = () => (
  <div>
    <Row className="mb-4">
      <Image
        src={printer}
        roundedCircle
        height="80px"
        width="80px"
        className="me-3"
      />
      <Col>
        <p className="project-title">Pancake Printer</p>
        <p className="letter">
          A pancake printer that can be controlled with a joystick to print any
          shape of pancake you like - and it despenses rainbow sprinkles with a
          push of a button. Equipped with motorized printer structure inspired
          by 3D printers, motion control system powered by Arduino, laser cut
          nozzle box, custom modeled and 3D printed frame connectors and
          sprinkles dispenser.
        </p>
        <div className="tags">
          <Tag text="Arduino"></Tag>
          <Tag text="CAD"></Tag>
          <Tag text="Laser Cutting"></Tag>
          <Tag text="3D Printing"></Tag>
        </div>
        <div className="resource-links">
          <ResourceLink
            url="https://www.youtube.com/watch?v=fjZnILbN7NU"
            text="YouTube"
          />
        </div>
      </Col>
    </Row>

    <Row className="mb-2 justify-content-center">
      <Video url="video/printer_demo.mp4" width="250px" />
    </Row>
  </div>
);

const HealthFriend = () => (
  <Row className="mb-2">
    <Image
      src={women}
      roundedCircle
      height="80px"
      width="80px"
      className="me-3"
    />
    <Col>
      <p className="project-title">Health Friend</p>
      <p className="letter">
        A tablet game developed at{" "}
        <Link
          url="https://www.cornellewh.org/"
          text="Cornell Engineering World Health"
        ></Link>{" "}
        to help women in low-resource areas in India to learn about their own
        bodies and menstrual health, partnered with Barefoot College in India.
      </p>
      <div className="tags">
        <Tag text="Kivy"></Tag>
        <Tag text="Firebase"></Tag>
      </div>
      <div className="resource-links">
        <ResourceLink
          url="https://github.com/Cornell-Engineering-World-Health/womens-health-game"
          text="GitHub"
        />
      </div>
    </Col>
  </Row>
);

// Surfaced as expandable entries in the "*" tab.
export const PROJECTS = [
  { id: "triviac", label: "Trivia app", Body: Triviac },
  { id: "printer", label: "Pancake printer", Body: PancakePrinter },
  { id: "health", label: "Women's health game", Body: HealthFriend },
];
