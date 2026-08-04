import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import tangram from "../assets/tangram.png";
import refgame from "../assets/refgame.png";
import adhoc from "../assets/adhoc.png";
import a2c from "../assets/a2c.gif"
import ResourceLink from "./ResourceLink.js";
import Link from "./Link.js";
import Tag from "./Tag.js";

const Research = () => {
  return (
    <div>
      <Row className="mb-4">
        <Image src={a2c} height="80px" width="80px" className="me-3" />
        <Col>
          <span className="research-title">
            <Link
              url="https://arxiv.org/abs/2606.28593"
              text="Animation2Code: Evaluating temporal visual reasoning in video-to-code generation"
            />
          </span>

          <p className="letter">
            Anya Ji, Abhijith Varma Mudunuri, David M. Chan, Alane Suhr
          </p>

          <div className="tags">
            <Tag text="ArXiv preprint"></Tag>
          </div>

          <div className="resource-links">
            <ResourceLink
              url="https://anya-ji.github.io/animation2code-website/"
              text="Website"
            />
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Image src={adhoc} height="80px" width="80px" className="me-3" />
        <Col>
          <span className="research-title">
            <Link
              url="https://arxiv.org/abs/2509.05566"
              text="Ad hoc conventions generalize to new referents"
            />
          </span>

          <p className="letter">
            Anya Ji, Claire Augusta Bergey, Ron Eliav, Yoav Artzi, Robert D.
            Hawkins
          </p>

          <div className="tags">
            <Tag text="ArXiv preprint"></Tag>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Image src={refgame} height="80px" width="80px" className="me-3" />
        <Col>
          <span className="research-title">
            <Link
              url="https://arxiv.org/abs/2305.06539"
              text="Semantic uncertainty guides the extension of conventions to new referents"
            />
          </span>

          <p className="letter">
            Ron Eliav, Anya Ji, Yoav Artzi, Robert D. Hawkins
          </p>

          <div className="tags">
            <Tag text="Cog Sci 2023"></Tag>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Image src={tangram} height="80px" width="80px" className="me-3" />
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
          </p>

          <div className="tags">
            <Tag text="EMNLP 2022"></Tag>
            <Tag text="⭐ Best Long Paper" award></Tag>
          </div>

          <div className="resource-links">
            <ResourceLink
              url="https://lil.nlp.cornell.edu/kilogram/dashboard/"
              text="Dataset"
            />
            <ResourceLink
              url="https://www.youtube.com/watch?v=hCmX8ZFIVf8"
              text="Talk"
            />
            <ResourceLink
              url="https://github.com/lil-lab/kilogram"
              text="GitHub"
            />
            <ResourceLink url="https://tangram-online.web.app/" text="Task" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Research;
