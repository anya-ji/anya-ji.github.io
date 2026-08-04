import React from "react";
import "../App.css";

// A plain underlined link out to a resource (dataset, talk, repo, ...).
const ResourceLink = ({ url, text }) => {
  return (
    <a
      href={url}
      className="resource-link"
      target="_blank"
      rel="noreferrer noopener"
    >
      {text}
    </a>
  );
};

export default ResourceLink;
