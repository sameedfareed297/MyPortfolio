import React from "react";

function Resume() {
  return (
    <div className="resume">
      <h2>My Resume</h2>
      <embed
        src="SAMEEDUDDIN.pdf"
        width="100%"
        height="1200px"
      />
      <a href="SAMEEDUDDIN.pdf" download className="btn">
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
