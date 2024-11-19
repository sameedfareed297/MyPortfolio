import React from "react";

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>JavaScript</h3>
          <p>Building dynamic and responsive websites using JavaScript.</p>
          <div className="skill-bar">
            <span style={{ width: "90%" }}></span>
          </div>
        </div>
        <div className="skill-card">
          <h3>React</h3>
          <p>Developing interactive user interfaces with React.</p>
          <div className="skill-bar">
            <span style={{ width: "85%" }}></span>
          </div>
        </div>
        <div className="skill-card">
          <h3>Node.js</h3>
          <p>Creating backend applications with Node.js and Express.</p>
          <div className="skill-bar">
            <span style={{ width: "75%" }}></span>
          </div>
        </div>
        <div className="skill-card">
          <h3>C# (OOP)</h3>
          <p>Building object-oriented applications in C#.</p>
          <div className="skill-bar">
            <span style={{ width: "70%" }}></span>
          </div>
        </div>
        <div className="skill-card">
          <h3>C++</h3>
          <p>Developing high-performance applications using C++.</p>
          <div className="skill-bar">
            <span style={{ width: "80%" }}></span>
          </div>
        </div>
        <div className="skill-card">
          <h3>HTML & CSS</h3>
          <p>Building responsive and visually appealing websites.</p>
          <div className="skill-bar">
            <span style={{ width: "95%" }}></span>
          </div>
        </div>
        <div className="skill-card">
          <h3>MySQL</h3>
          <p>Managing databases and writing efficient queries in MySQL.</p>
          <div className="skill-bar">
            <span style={{ width: "80%" }}></span>
          </div>
        </div>
        <div className="skill-card">
          <h3>Python & Django</h3>
          <p>Developing web applications using Python and Django.</p>
          <div className="skill-bar">
            <span style={{ width: "60%" }}></span>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Skills;
