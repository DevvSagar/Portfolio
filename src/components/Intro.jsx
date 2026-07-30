import React from "react";
import "../styles/Intro.css";
import { TypeAnimation } from "react-type-animation";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeInSection from "./FadeInSection";
import AsciiPortrait from "./AsciiPortrait";

const Intro = () => {
  return (
    <div id="intro">
      <div className="intro-simulation">
        <AsciiPortrait />
      </div>
      <div className="intro-block">
        <h1 className="intro-title">
          {"hi, "}
          <span className="intro-name">
            <TypeAnimation
              sequence={["Sagar"]}
              wrapper="span"
              cursor={false}
              repeat={0}
            />
          </span>
          {" here."}
          <span className="intro-cursor">|</span>
        </h1>
        <FadeInSection>
          <div className="intro-desc">         
          Backend engineer who speaks fluent Python and occasional FastAPI sorcery. Currently grinding DSA like it owes me money, one bug fix away from either enlightenment or a nervous breakdown — chasing that top-tier tech dream anyway.
          </div>
          <a href="mailto:devvsag@gmail.com" className="intro-contact">
            <EmailRoundedIcon />
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Intro;
