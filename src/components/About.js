import React from "react";

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src="about.jpg" 
          alt="Profile"
        />
        <div className="text">
          <p>
            Hello! I'm Sameed Uddin, a passionate MERN stack developer with a strong drive to build scalable and interactive
            web applications. With a solid foundation in web development, I enjoy solving complex problems through clean and efficient code.
            Currently, I am refining my skills to stay up-to-date with the latest advancements in technologies, frameworks, and libraries.
            I'm highly motivated to take on challenging projects that push the boundaries of what web applications can do, focusing on
            creating user-friendly and performance-optimized solutions.
          </p>
          <p>
            I have experience working on various full-stack projects, including both front-end and back-end technologies such as
            React, Node.js, Express.js, MongoDB, and other tools within the MERN stack. My expertise also extends to databases like
            MySQL and MySQLi, allowing me to manage data efficiently in dynamic web environments.
            Alongside my technical skills, I am always striving to grow in areas like AI, Data Science, security, and networking,
            integrating these into my development practices for a well-rounded approach.
          </p>
          <p>
            As I continue my journey as a developer, my goal is to keep evolving, contributing to the tech community, and
            working on exciting projects that can make a meaningful impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
