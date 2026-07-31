import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

const ExternalLinks = ({ githubLink }) => {
  return (
    <span className="external-links">
      {githubLink && (
        <a
          className="github-icon"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            sx={{
              fontSize: 22,
              color: "inherit",
            }}
          />
        </a>
      )}
    </span>
  );
};

export default ExternalLinks;
