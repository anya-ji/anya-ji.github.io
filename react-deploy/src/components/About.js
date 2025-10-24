import React from "react";
import "../App.css";
import Link from "./Link";

const About = () => {
  return (
    <div className="letter" style={{ textAlign: "left" }}>
      <p>
        Hello! I'm a Computer Science Ph.D. student in{" "}
        <Link url={"https://bair.berkeley.edu/"} text={"BAIR"} /> at UC Berkeley
        working with{" "}
        <Link url={"https://www.alanesuhr.com/"} text={"Alane Suhr"} />. My
        research interests include multi-modal reasoning, human-agent
        interaction, and cognitive science. I'm recently interested in
        controllable and interactive vision language reasoning and LLM agent
        behaviors in the wild.
      </p>
      <p>
        I graduated from Cornell University in 2023 with M.Eng. and B.A. in
        Computer Science and B.A. in Psychology. During undergrad, I was
        fortunate to work with{" "}
        <Link url={"https://yoavartzi.com/"} text={"Yoav Artzi"} /> and{" "}
        <Link url={"https://rdhawkins.com/"} text={"Robert Hawkins"} />.
      </p>
    </div>
  );
};

export default About;
