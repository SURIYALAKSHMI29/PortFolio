import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Experience.css';
import theme_pattern from '../../../assets/theme_pattern.png';

const Experience = ({className}) => {
  const experiences = [
    {
      year: '2022',
      title: 'B.E CSE @ VCET',
      description: (
        <>
          🎓 Started my journey at <strong>Velammal College of Engineering & Technology</strong>.<br /><br/>
          📘 Gained solid foundations in <em>Computer Science fundamentals</em> and <em>programming basics</em> with languages like C and Java.
        </>
      ),
      image: '/images/exp1.jpg',
    },
    {
      year: '2023',
      title: 'DSA & Java Projects',
      description: (
        <>
          💻 Explored <strong>Java</strong> and applied <em>DSA concepts</em> through hands-on projects.<br /><br/>
          📚 Built mini-projects like <strong>Library Management</strong> and <strong>Banking System</strong> using Java JFrame and MySQL.
        </>
      ),
      image: '/images/exp2.jpg',
    },
    {
      year: '2024',
      title: 'Internship & Web Dev',
      description: (
        <>
          🧠 Underwent a full-stack internship at <strong>VCET</strong>.<br /><br/>
          📝 Built a <strong>Quiz Application</strong> using <em>PHP, JS, and MySQL</em> with features like <em>authentication, question management</em>, and <em>result evaluation</em>.<br /><br/>
          ⚛️ Began learning React and explored frontend development.
        </>
      ),
      image: '/images/exp3.jpg',
    },
    {
      year: '2025',
      title: 'Mern Stack Projects',
      description: (
        <>
          ✅ Tested, deployed, and currently in use: <strong>Quiz Module</strong> with ⏱️ <em>timers</em>, 🎲 <em>randomization</em>, and 📊 <em>result tracking</em>.<br /><br/>
          💉 Currently developing <strong>Blood Donation App</strong> using ⚛️ <em>React Native</em> and 🔗 <em>Node.js + MySQL</em>.<br /><br/>
          👥 Collaborating as a team to address real-time donation needs in our institution.
        </>
      ),
      image: '/images/exp4.jpg',
    },
  ];
  
  const [current, setCurrent] = useState(0);
  const prev = (current - 1 + experiences.length) % experiences.length;
  const next = (current + 1) % experiences.length;

  const handlePrev = () => setCurrent(prev);
  const handleNext = () => setCurrent(next);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className={`experience ${className}`} id="experience">
      <div className="exp-title">
        <h1>My Journey</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="experience-section">

        <div className="timeline-board">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index === current ? 'active' : index < current ? 'completed' : ''
              }`}
              onClick={() => setCurrent(index)}
            >
          
              <div className="timeline-row">
                {index % 2 === 0 ? (
                  <>
                    <div className="timeline-box left">
                      <div className="box-content">{exp.title}</div>
                      <div className="arrow right-arrow" />
                    </div>
                    <div className="timeline-dot">
                      <span className="year">{exp.year}</span>
                    </div>
                    <div className="timeline-box right empty" />
                  </>
                ) : (
                  <>
                    <div className="timeline-box left empty" />
                    <div className="timeline-dot">
                      <span className="year">{exp.year}</span>
                    </div>
                    <div className="timeline-box right">
                      <div className="arrow left-arrow" />
                      <div className="box-content">{exp.title}</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-container">
          <button className="nav-btn left" onClick={handlePrev}>‹</button>

          <div className="carousel" {...swipeHandlers}>
            {experiences.map((exp, index) => {
              let position = '';
              if (index === current) position = 'active';
              else if (index === prev) position = 'prev';
              else if (index === next) position = 'next';
              else position = 'hidden';

              return (
                <div key={index} className={`experience-card ${position}`}>
                  {/* <img src={exp.image} alt={exp.title} /> */}
                  <div className="details">
                    <h1> {exp.title} <span className="exp-bar"> | </span>{exp.year}</h1>
                    <div className="exp-description">{exp.description}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="nav-btn right" onClick={handleNext}>›</button>
        </div>
      </div>

    </div>
  );
};

export default Experience;
