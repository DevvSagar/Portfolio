import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I am a <b>self-taught Software Engineer</b> building my skills in backend
      development with a focus on Python and FastAPI. Previously, I worked as an{" "}
      <b>Associate Manager</b> at{" "}
      <a href="https://www.etechgs.com/">Etech Global Services</a>. I'm now
      focused on strengthening my backend expertise and preparing for roles at
      top tech companies.
    </p>
  );
  const two = (
    <p>
      In my free time, I’m nerdy about tech gadgets, love literary fiction, and
      play way too many battle royale games. Oh, I make content too.
    </p>
  );

  const techStack = [
    "Python",
    "Typescript",
    "React.js",
    "Java",
    "Javascript ES6+",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Sagar Singh - Backend Software Engineer" src={"./assets/me2.PNG"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
