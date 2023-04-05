import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Define components for each section of the portfolio
const HomePage = () => (
  <div>
    <h1>Welcome to my portfolio</h1>
    <p>My name is Joseph Oluoch and I am a Ruby, Ruby on Rails, SQL, JS, React, HTML and CSS expert.</p>
    <p>Click on the links below to learn more about me and my work.</p>
  </div>
);

const ProjectsPage = () => (
  <div>
    <h1>My Projects</h1>
    <p>Here are some of my past projects:</p>
    <ul>
      <li>
        <a href="https://github.com/josepholuoch/fizzbuzz-ruby">FizzBuzz Ruby</a>
      </li>
      <li>
        <a href="https://github.com/josepholuoch/restaurant-reviews">Restaurant Reviews</a>
      </li>
      <li>
        <a href="https://github.com/josepholuoch/react-todo-list">React Todo List</a>
      </li>
    </ul>
  </div>
);

const SkillsPage = () => (
  <div>
    <h1>My Skills</h1>
    <p>Here are some of the technologies and tools I am proficient in:</p>
    <ul>
      <li>Ruby</li>
      <li>Ruby on Rails</li>
      <li>SQL</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </div>
);

const ContactPage = () => (
  <div>
    <h1>Contact Me</h1>
    <p>You can reach me at josepholuoch@example.com.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
