import React from "react";
import "../App.css";
import Link from "./Link";

const About = () => {
  return (
    <p className="letter hidden" style={{ textAlign: "left" }}>
      Hello! I'm a first year PhD student in{" "}
      <Link url={"https://bair.berkeley.edu/"} text={"BAIR"} /> at UC Berkeley
      working with{" "}
      <Link url={"https://www.alanesuhr.com/"} text={"Alane Suhr"} />. I'm
      interested in the intersection of natural language processing and
      cognitive science, particularly in improving multi-modal models'
      generalization capabilities and building agents capable of more human-like
      interaction.
      <br />
      I graduated from Cornell University in 2023 with BA/MEng in Computer
      Science and BA in Psychology. During undergrad, I was fortunate to work
      with <Link url={"https://yoavartzi.com/"} text={"Yoav Artzi"} /> and{" "}
      <Link url={"https://rdhawkins.com/"} text={"Robert Hawkins"} /> on
      abstract visual reasoning and{" "}
      <Link
        url={"https://amp-lab.psych.cornell.edu/people-2/"}
        text={"Khena Swallow"}
      />{" "}
      on event segmentation in human perception.
      <br />
      <br />
    </p>
  );
};

export default About;
