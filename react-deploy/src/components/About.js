import React from "react";
import "../App.css";
import Link from "./Link";

const About = () => {
  return (
    <div className="letter" style={{ textAlign: "left" }}>
      <p>
        Hello! I'm a Computer Science Ph.D. student at UC Berkeley, affiliated
        with <Link url={"https://bair.berkeley.edu/"} text={"BAIR"} /> and{" "}
        <Link url={"https://nlp.cs.berkeley.edu/"} text={"Berkeley NLP"} />. I'm
        advised by{" "}
        <Link url={"https://www.alanesuhr.com/"} text={"Alane Suhr"} />. I work
        on <strong>vision-language reasoning</strong>,{" "}
        <strong>alignment</strong>, and <strong>human-agent interaction</strong>
        . My research focuses on training more capable multimodal models
        efficiently and improving how models interact and collaborate with
        humans.
      </p>
      <p>
        I graduated from Cornell University in 2023 with M.Eng. and B.A. in
        Computer Science and B.A. in Psychology. During undergrad, I was very
        fortunate to work with{" "}
        <Link url={"https://yoavartzi.com/"} text={"Yoav Artzi"} /> and{" "}
        <Link url={"https://rdhawkins.com/"} text={"Robert Hawkins"} />.
      </p>
    </div>
  );
};

export default About;
