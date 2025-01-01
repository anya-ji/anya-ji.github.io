import React from "react";

const Link = ({ url, text, children, style }) => {
  return (
    <a
      href={url}
      style={style ?? { color: "burlywood" }}
      target="_blank"
      rel="noreferrer noopener"
    >
      {text}
      {children}
    </a>
  );
};

export default Link;
