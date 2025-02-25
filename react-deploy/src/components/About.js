import React from "react";
import "../App.css";
import Link from "./Link";

const About = () => {
  return (
    <p className="letter hidden" style={{ textAlign: "left" }}>
      Hello! I'm a first-year PhD student in{" "}
      <Link url={"https://bair.berkeley.edu/"} text={"BAIR"} /> at UC Berkeley
      working with{" "}
      <Link url={"https://www.alanesuhr.com/"} text={"Alane Suhr"} />. I'm
      broadly interested in the intersection of natural language processing and
      cognitive science, multi-modal reasoning, and human-agent
      interaction.
      <br />
      I graduated from Cornell University in 2023 with MEng and BA in Computer
      Science and BA in Psychology. During undergrad, I was fortunate to work
      with <Link url={"https://yoavartzi.com/"} text={"Yoav Artzi"} /> and{" "}
      <Link url={"https://rdhawkins.com/"} text={"Robert Hawkins"} /> on
      vision-language reasoning and{" "}
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
