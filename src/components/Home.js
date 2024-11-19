// Home.js
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h2>WELCOME TO MY PORTFOLIO</h2>
        <h1>I AM SAMEED UDDIN</h1>
        <p>Building innovative and high-performance web applications with passion and precision.</p>
        <button onClick={() => window.location.href = 'projects'}>Explore Projects</button>
      </div>
    </div>
  );
}

export default Home;

