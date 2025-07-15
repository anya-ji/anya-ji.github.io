import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import tangram from "../assets/tangram.png";
import refgame from "../assets/refgame.png";
import IconLink from "./IconLink.js";
import Link from "./Link.js";
import Tag from "./Tag.js";

const Research = () => {
  return (
    <div>
      <Row className="mb-5">
        <Image src={refgame} height="120px" width="120px" className="me-4" />
        <Col>
          <span className="research-title">
            <Link
              url="https://arxiv.org/abs/2305.06539"
              text="Semantic uncertainty guides the extension of conventions to new referents"
            />
          </span>

          <p className="letter">
            Ron Eliav, Anya Ji, Yoav Artzi, Robert D. Hawkins
            <br />
            <Tag text="Cog Sci 2023"></Tag>
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Image src={tangram} height="120px" width="120px" className="me-4" />
        <Col>
          <span className="research-title">
            <Link
              url="https://arxiv.org/abs/2211.16492"
              text="Abstract visual reasoning with tangram shapes"
            />
          </span>

          <p className="letter">
            Anya Ji, Noriyuki Kojima, Noah Rush, Alane Suhr, Wai Keen Vong,
            Robert D. Hawkins, Yoav Artzi
            <br />
            <Tag text="EMNLP 2022"></Tag>
            <Tag text="⭐ Best Long Paper"></Tag>
          </p>

          <div className="mt-3">
            <IconLink
              url="https://lil.nlp.cornell.edu/kilogram/dashboard/"
              text="Dataset"
            />
            <IconLink
              url="https://www.youtube.com/watch?v=hCmX8ZFIVf8"
              text="Talk"
            />
            <IconLink url="https://github.com/lil-lab/kilogram" text="GitHub" />
            <IconLink url="https://tangram-online.web.app/" text="Task" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Research;
