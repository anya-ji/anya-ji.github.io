import React from "react";
import "../App.css";
import Link from "./Link";

const About = () => {
  return (
    <div className="letter" style={{ textAlign: "left" }}>
      <p>
        Hello! I'm a Computer Science Ph.D. student in{" "}
        <Link url={"https://bair.berkeley.edu/"} text={"BAIR"} /> at UC Berkeley
        advised by{" "}
        <Link url={"https://www.alanesuhr.com/"} text={"Alane Suhr"} />. My
        research focuses on improving how models interact and collaborate with
        humans. I work on vision-language reasoning, human-AI alignment, and learning
        from interactions.
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
