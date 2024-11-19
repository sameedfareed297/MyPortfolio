import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="contact-text">
            <h2>Contact Me</h2>
            <p>If you'd like to get in touch, feel free to contact me through the details below.</p>
          </div>
          <div className="contact-info">
            <p><span className="phone">Phone: </span>+92-321898893-8</p>
            <p><span className="email">Email: </span> sameed.fareed297@gmail.com</p>
          </div>
          <div className="social-icons">
            <a href="https://github.com/sameedfareed297" target="_blank" >
              <img src="github-logo.png" alt="GitHub" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/sameed-uddin-894124262/" target="_blank" >
              <img src="linkedin-logo.png" alt="LinkedIn" className="icon" />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
