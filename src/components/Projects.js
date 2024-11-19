import React from "react";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Single-Page React App</h3>
          <p>Internship Project - Outlined internship expectations, showcasing coding competencies.</p>
          <button className="view-btn">View Project</button>
        </div>

        <div className="project-card">
          <h3>Recipe Finder App</h3>
          <p>Internship Project - Public Recipe API, React, JavaScript, Local Storage. Improved API integration, client-side state management, and UI design.</p>
          <button onClick={() => window.open('https://github.com/sameedfareed297/Recipe_Finder')} className="view-btn">View Project</button>
        </div>

        <div className="project-card">
          <h3>Personal Expense Tracker</h3>
          <p>Internship Project - React, Node.js, Express.js, Local Storage. Built a full-stack app to track and manage personal expenses.</p>
          <button onClick={() => window.open('https://github.com/sameedfareed297/PersonalExpenseTracker')} className="view-btn">View Project</button>
        </div>

        <div className="project-card">
          <h3>College Management System</h3>
          <p>Academic Project - C#, MySQL, Windows Forms. Developed a system for student registration, staff management, and user authentication.</p>
          <button onClick={() => window.open('https://github.com/sameedfareed297/College_Management_System')} className="view-btn">View Project</button>
        </div>

        <div className="project-card">
          <h3>Student Management System</h3>
          <p>Academic Project - C++, DSA. Managed students and teachers using data structures and algorithms, ensuring efficient data handling.</p>
          <button onClick={() => window.open('https://github.com/sameedfareed297/StudentManagementSystem-DSA-Project')} className="view-btn">View Project</button>
        </div>

        <div className="project-card">
          <h3>Interactive Shape Generator</h3>
          <p>Academic Project - C++. Created a tool to generate geometric shapes using object-oriented programming principles.</p>
          <button onClick={() => window.open('https://github.com/sameedfareed297/Interactive-Shape-Generator')} className="view-btn">View Project</button>
        </div>

        <div className="project-card">

          <h3>Shortest Job First (SJF) Algorithm</h3>
          <p>Academic Project - C#, Windows Forms. Implemented SJF scheduling algorithm and visualized it using Gantt charts.</p>
          <button onClick={() => window.open('https://github.com/sameedfareed297/SJF-OS_PROJECT')} className="view-btn">View Project</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
