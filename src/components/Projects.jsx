import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import { Carousel } from "react-bootstrap";
import ExternalLinks from "./ExternalLinks";

const spotlightProjects = {
  Blob: {
    title: "Scribo",
    desc: "Scribo is an AI meeting summarizer that converts audio and video into transcripts, summaries, action items, and per-user chat history.",
    techStack: "Javascript",
    link: "https://github.com/DevvSagar/scribo",
    image: "./assets/scribo.png",
  },
  Portfolio: {
    title: "portfolio.js",
    desc: "A small JS library that helps with clear and succinct data presentation.",
    techStack: "NODE.JS (EXPRESS.JS)",
    link: "https://github.com/DevvSagar/Portfolio",
    image: "./assets/portfolio.png",
  },
};

const projects = {
  "Todo API": {
    desc: "Todo API — FastAPI CRUD with JWT auth; latest addition: dependency-based route protection (HTTPBearer + JWT check), tested working with/without token.",
    techStack: "FastAPI, SQLAlchemy, Postgres, Docker, JWT",
    link: "https://github.com/DevvSagar/Todo-FastAPI",
  },
  "Expense Tracker API": {
    desc: "Expense Tracker — FastAPI CRUD (list, get, filter by category, total, summary) with JWT auth and per-user ownership on every route; built independently without copy-pasting from the Todo project.",
    techStack: "FastAPI, SQLAlchemy, Postgres, Docker, JWT",
    link: "https://github.com/DevvSagar/Expense-Tracker-FastAPI",
  },
  "Role-Forum API": {
    desc: "RoleForum — Blog/forum app with role-based access; Post & Comment models with owner-or-admin permission checks, tested end-to-end (regular users blocked with 403, admins can override).",
    techStack: "FastAPI, SQLAlchemy, Postgres, Docker, JWT (+roles)",
    link: "https://github.com/DevvSagar/Role-Forum",
  },
};

const Projects = () => {
  return (
    <div id="projects">
      <div className="section-header ">
        <span className="section-title">/ software</span>
        <a
          href="https://github.com/DevvSagar"
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects
        </a>
      </div>
      <div className="spotlight-projects-desktop">
        <Carousel interval={null}>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <Carousel.Caption>
                <h3>{spotlightProjects[key]["title"]}</h3>
                <div className="spotlight-desc">
                  {spotlightProjects[key]["desc"]}
                </div>
                <div className="techStack">
                  {spotlightProjects[key]["techStack"]}
                </div>
                <div className="spotlight-links">
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                  />
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="spotlight-projects-mobile">
        {Object.keys(spotlightProjects).map((key, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                />
              </div>

              <a
                href={spotlightProjects[key]["link"]}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="card-title">
                  {spotlightProjects[key]["title"]}
                </div>
                <div className="spotlight-mobile-image">
                  <img src={spotlightProjects[key]["image"]} alt={key} />
                </div>
              </a>
              <div className="card-desc">{spotlightProjects[key]["desc"]}</div>
              <div className="card-tech">{spotlightProjects[key]["techStack"]}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                  />
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
