import React, { useState } from "react";
import "./App.css";


import profilePic from "./profile_pic.jpg";
import schoolPic from "./school_pic.jpg";
import interPic from "./inter_pic.jpg";
import universityPic from "./university_pic.jpg";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const goHome = () => setActiveSection("home");

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
   
      <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞" : "🌙"}
      </button>

     
      {activeSection === "home" && (
        <section className="home">
          <div className="intro">
            <h1>
              Hi,<br />I am <span>Jaswanth Kumar</span>
            </h1>
            <p>|Frontend Developer|</p>
          </div>

          <div className="menu">
            <button onClick={() => setActiveSection("about")}>About Me</button>
            <button onClick={() => setActiveSection("education")}>Education</button>
            <button onClick={() => setActiveSection("projects")}>Projects</button>
            <button onClick={() => setActiveSection("contact")}>Contact Me</button>
          </div>
        </section>
      )}

      
      {activeSection === "about" && (
        <section className="about">
          <button className="back" onClick={goHome}>← Back to Home</button>
          <h2 className="about-heading">✨ About Me ✨</h2>

          <div className="about-wrapper">
           
            <div className="about-pic">
              <img src={profilePic} alt="Profile" className="floating-img" />
            </div>

            
            <div className="about-text">
              <p>
                As a student at the Vellore Institute of Technology (VIT), Chennai, 
                I am a passionate Frontend Developer with a solid foundation in web development. 
                I have a strong command of HTML, CSS, JavaScript, Express.js, and PostgreSQL, with a 
                particular focus on building beautiful and user-friendly web applications using React 
                and modern CSS frameworks. While I specialize in the frontend, I am also drawn to 
                JavaScript's ability to create seamless, full-stack applications. Currently, I'm 
                deepening my expertise in back-end development, exploring the integration of AI for 
                data science, and refining my skills in UI/UX design to build more intuitive and 
                impactful digital experiences.
              </p>
            </div>
          </div>

        
          <div className="fun-activities">
            <h3>🌟 Fun Activities</h3>
            <ul>
              <li><strong>Passionate Learner:</strong> I'm always eager to learn and expand my knowledge, and I enjoy sharing what I've learned by teaching my friends.</li>
              <li><strong>Strategic Thinker:</strong> I enjoy playing chess, which helps me think strategically and plan ahead, and I'm a fan of educational content like TED Talks.</li>
              <li><strong>Team Player:</strong> I love staying active by playing cricket and badminton, which have taught me the importance of teamwork and cooperation.</li>
            </ul>
          </div>
        </section>
      )}

      
      {activeSection === "education" && (
        <section className="education">
          <button className="back" onClick={goHome}>← Back to Home</button>
          <h2>Education Journey</h2>
          <div className="edu-list">
            <div className="edu-card">
              <img src={schoolPic} alt="School" />
              <h3>School</h3>
              <p>Nalanda Vidya Niketan (2010 - 2022)<br />Completed secondary education with distinction in Mathematics and Computer Science.</p>
            </div>
            <div className="edu-card">
              <img src={interPic} alt="Inter College" />
              <h3>Inter College</h3>
              <p>Sri Srinivasa Gravity College (2022 - 2024)<br />Specialized in Mathematics, Physics, and Chemistry with focus on analytical thinking.</p>
            </div>
            <div className="edu-card">
              <img src={universityPic} alt="University" />
              <h3>University</h3>
              <p>VIT Chennai (2024 - 2028)<br />Bachelor's in Computer Science & Engineering</p>
            </div>
          </div>
        </section>
      )}

    
      {activeSection === "projects" && (
        <section className="projects">
          <button className="back" onClick={goHome}>← Back to Home</button>
          <h2>Featured Projects</h2>
          <div className="project-list">
            <div className="project-card">
              <h3>TodoList</h3>
              <p>A task management app built with React, allowing users to add, edit, and delete tasks with a clean UI.</p>
            </div>
            <div className="project-card">
              <h3>Weather Dashboard</h3>
              <p>A responsive web app providing location-based forecasts, built with API integration and modern UI design.</p>
            </div>
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>Designed using HTML, CSS, JavaScript, and UI principles to showcase projects and skills interactively.</p>
            </div>
          </div>
        </section>
      )}

      
      {activeSection === "contact" && (
        <section className="contact">
          <button className="back" onClick={goHome}>← Back to Home</button>
          <h2>Get In Touch</h2>

          <div className="contact-list">
            <div className="contact-card">
              <span role="img" aria-label="github">🐙</span>
              <strong> GitHub</strong>
              <p>
                <a href="https://github.com/Jaswant618" target="_blank" rel="noopener noreferrer">
                  @jaswanthkumar
                </a>
              </p>
            </div>
            <div className="contact-card">
              <span role="img" aria-label="linkedin">💼</span>
              <strong> LinkedIn</strong>
              <p>
                <a href="https://www.linkedin.com/in/jaswanth-kumar-686720324/" target="_blank" rel="noopener noreferrer">
                  Jaswanth Kumar
                </a>
              </p>
            </div>
            <div className="contact-card">
              <span role="img" aria-label="email">📧</span>
              <strong> Email</strong>
              <p><a href="mailto:jaswanthkumar618@gmail.com">jaswanthkumar618@gmail.com</a></p>
            </div>
            <div className="contact-card">
              <span role="img" aria-label="phone">📞</span>
              <strong> Phone</strong>
              <p><a href="tel:8106805932">+91 81068 05932</a></p>
            </div>
          </div>

         
          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
