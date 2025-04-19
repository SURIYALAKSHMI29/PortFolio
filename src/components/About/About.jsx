import React from 'react';
import './About.css';
import theme_pattern from '../../../assets/theme_pattern.png';
import profile_img from '../../../assets/profile2.png';
import TypingEffect from 'react-typing-effect';

const About = ({ className }) => {
  return (
    <div className={`about ${className}`} id='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile"/>
          <div className="about-activities">
            <p>Love to </p>
            <TypingEffect
              text={["Read Books", "Explore tech", "Build things that matters", "Code"]}
              speed={120}
              eraseDelay={1500}
              typingDelay={400}
              className="typewriter"
            />
          </div>
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a full-stack developer who enjoys building practical and useful web apps. I started with PHP and slowly moved into working with modern tools like React and Node.js.
            </p>
            {/* <p>
              Right now, I’m developing a blood donation app to make it easier for people to request and donate blood within our community. It’s a small step, but I hope it makes a real difference.
            </p> */}
            <p>
              I believe in learning by doing and am eager to collaborate and grow!
            </p>
          </div>

          {/* <div className="about-quote">
            <p>“As you live, there will come a moment when you realise it was all for today. So live.”</p>
          </div> */}

          <div className="about-skills">
            <div className="about-skill">
              <p>Testing & Debugging</p> 
              <div className="skill-bar">
                    <div className="skill-level" style={{ width: "78%", backgroundColor:"rgba(6, 89, 114, 0.52)" }}></div>
                </div>
            </div>
            <div className="about-skill">
              <p>Database Design</p> 
              <div className="skill-bar">
                    <div className="skill-level" style={{ width: "85%", backgroundColor:"rgba(125, 204, 221, 0.52)" }}></div>
                </div>
            </div>
            <div className="about-skill">
                <p>Problem Solver</p>
                <div className="skill-bar">
                    <div className="skill-level" style={{ width: "90%", backgroundColor:"rgba(5, 91, 108, 0.52)"}}></div>
                </div>
            </div>
            <div className="about-skill">
              <p>RESTful Thinking</p>
              <div className="skill-bar">
                    <div className="skill-level" style={{ width: "75%", backgroundColor:"rgba(53, 207, 221, 0.52)" }}></div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Top 5%</h1>
            <p>In College Semester Exams</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>400+</h1>
            <p>Coding Challenges Solved</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Received</h1>
            <p>In-house Internship at VCET</p>
        </div>
        </div>

    </div>
  );
};

export default About;
