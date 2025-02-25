import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import tangram from "../assets/tangram.png";
import refgame from "../assets/refgame.png";
import IconLink from "./IconLink.js";
import Link from "./Link.js";
import "./Research.css";
import Tag from "./Tag.js";

const Research = () => {
  const titleStyle = {
    color: "white",
    fontSize: "24px",
    fontWeight: "600",
    textDecoration: "underline",
  };

  return (
    <div className="container">
      <Row className="pt-4">
        <Image src={refgame} height="100px" width="100px" />
        <Col>
          <Link
            url="https://arxiv.org/abs/2305.06539"
            text="Semantic uncertainty guides the extension of conventions to new referents"
            style={titleStyle}
          ></Link>

          <p className="letter">
            Ron Eliav, Anya Ji, Yoav Artzi, Robert D. Hawkins
            <br />
            <Tag text="Cog Sci 2023"></Tag>
          </p>
        </Col>
      </Row>

      <Row className="pt-4">
        <Image src={tangram} height="100px" width="100px" />
        <Col>
          <Link
            url="https://arxiv.org/pdf/2211.16492"
            text="Abstract visual reasoning with tangram shapes"
            style={titleStyle}
          ></Link>

          <p className="letter">
            Anya Ji, Noriyuki Kojima, Noah Rush, Alane Suhr, Wai Keen Vong,
            Robert D. Hawkins, Yoav Artzi
            <br />
            <Tag text="EMNLP 2022"></Tag>
            <Tag text="⭐ Best Long Paper"></Tag>
          </p>

          <IconLink
            url="https://lil.nlp.cornell.edu/kilogram/dashboard/"
            text="Dataset"
          />
          <IconLink
            url="https://www.youtube.com/watch?v=hCmX8ZFIVf8"
            text="Talk"
          />
          <IconLink url="https://github.com/lil-lab/kilogram" text="GitHub" />
          <IconLink
            url="https://tangram-online.web.app/"
            text="Annotation Interface"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Research;
