import React from "react";
import "../App.css";
import Link from "./Link";

const About = () => {
  return (
    <div className="letter" style={{ textAlign: "left" }}>
      <p>
        Hello! I'm a first-year PhD student in{" "}
        <Link url={"https://bair.berkeley.edu/"} text={"BAIR"} /> at UC Berkeley
        working with{" "}
        <Link url={"https://www.alanesuhr.com/"} text={"Alane Suhr"} />. My
        research interests include multi-modal reasoning, human-agent
        interaction, and cognitive science.
      </p>
      <p>
        I graduated from Cornell University in 2023 with MEng and BA in Computer
        Science and BA in Psychology. During undergrad, I was fortunate to work
        with <Link url={"https://yoavartzi.com/"} text={"Yoav Artzi"} /> and{" "}
        <Link url={"https://rdhawkins.com/"} text={"Robert Hawkins"} />.
      </p>
    </div>
  );
};

export default About;
