import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPhp, FaGithub, FaCode, FaJava } from 'react-icons/fa';
import { SiC, SiMysql, SiMongodb } from 'react-icons/si';
import './Skills.css'; 
import theme_pattern from '../../../assets/theme_pattern.png';

const Skills = ({ className, style }) => {
  const codingStats = [
    { platform: 'LeetCode', url: 'https://leetcode.com/', problems: 200, style: { backgroundColor: '#F6B909' } },
    { platform: 'CodeChef', url: 'https://www.codechef.com/', rating: 1500, style: { backgroundColor: '#5B9BD5' } },
    { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/', problems: 300, style: { backgroundColor: '#2B7A0B' } },
  ];

  return (
    <div className={`skills-section ${className}`} id="skills" style={style}>
        <div className="skills-title">
            <h1>Skills & Coding Stats</h1>
            <img src={theme_pattern} alt="" />
        </div>

      <div className="skills-wrapper">
        {/* Left Side – Skills */}
        <div className="skills-left">
          {/* Languages Section */}
          <div className="skill-category">
            <h2>Languages</h2>
            <div className="skill-category-grid">
              <motion.div className="skill-card">
                <div className="skill-icon"><SiC /></div>
                <div className="skill-info">
                  <h3>C</h3>
                </div>
              </motion.div>
              <motion.div className="skill-card">
                <div className="skill-icon"><FaJava /></div>
                <div className="skill-info">
                  <h3>Java</h3>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Frontend Section */}
          <div className="skill-category">
            <h2>FrontEnd</h2>
            <div className="skill-category-grid">
              <motion.div className="skill-card">
                <div className="skill-icon"><FaHtml5 /></div>
                <div className="skill-info">
                  <h3>HTML</h3>
                </div>
              </motion.div>
              <motion.div className="skill-card">
                <div className="skill-icon"><FaCss3Alt /></div>
                <div className="skill-info">
                  <h3>CSS</h3>
                </div>
              </motion.div>
              <motion.div className="skill-card">
                <div className="skill-icon"><FaJsSquare /></div>
                <div className="skill-info">
                  <h3>JavaScript</h3>
                </div>
              </motion.div>
              <motion.div className="skill-card">
                <div className="skill-icon"><FaReact /></div>
                <div className="skill-info">
                  <h3>React</h3>
                </div>
              </motion.div>
            </div>
        </div>

        {/* Backend Section */} 
        <div className="skill-category">
            <h2>Backend & DataBase</h2>
            <div className="skill-category-grid">
              <motion.div className="skill-card">
                <div className="skill-icon"><FaNodeJs /></div>
                <div className="skill-info">
                  <h3>Node.js</h3>
                </div>
              </motion.div>
              <motion.div className="skill-card">
                <div className="skill-icon"><FaPhp /></div>
                <div className="skill-info">
                  <h3>PHP</h3>
                </div>
              </motion.div>
              <motion.div className="skill-card">
                <div className="skill-icon"><SiMysql /></div>
                <div className="skill-info">
                  <h3>MySQL</h3>
                </div>
              </motion.div>
              <motion.div className="skill-card">
                <div className="skill-icon"><SiMongodb /></div>
                <div className="skill-info">
                  <h3>MongoDB</h3>
                </div>
              </motion.div>
            </div>
          </div>


          {/* Tools Section */}
          <div className="skill-category">
            <h2>Tools</h2>
            <div className="skill-category-grid">
              <motion.div className="skill-card">
                <div className="skill-icon"><FaGithub /></div>
                <div className="skill-info">
                  <h3>GitHub</h3>
                </div>
              </motion.div>
              <motion.div className="skill-card">
                <div className="skill-icon"><FaCode /></div>
                <div className="skill-info">
                  <h3>VS Code</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Side – Coding Platforms */}
        <div className="skills-right">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="coding-title"
          >
            Coding Platforms
          </motion.h2>
          

          <div className="coding-journey">
            {/* LeetCode Card */}
            <div className="card">
                <div className="card-header">
                <h3>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode Logo"/>
                    LeetCode
                </h3>
                <a className="external-link" href="https://leetcode.com/u/913122104163_SuriyaLakshmi/" target="_blank" title="Visit">
                    &#x2197;
                </a>
                </div>
                <div className="stats">
                <div>
                    <div className="value">290+</div>
                    <div className="label">Solved</div>
                </div>
                <div>
                    <div className="value">132</div>
                    <div className="label">Max Streak</div>
                </div>
                </div>
                <div className="footer-card">
                    <div className="footer-item">Rank: <span>352,965</span></div>
                    <div className="footer-item">Badges: <span>5</span></div>
                </div>

            </div>

            {/* GFG Card */}
            <div className="card">
                <div className="card-header">
                <h3>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="GFG Logo" />
                    GeeksforGeeks
                </h3>
                <a className="external-link" href="https://www.geeksforgeeks.org/user/laksh_413/" target="_blank" title="Visit">
                    &#x2197;
                </a>
                </div>
                <div className="stats">
                <div>
                    <div className="value">130+</div>
                    <div className="label">Solved</div>
                </div>
                <div>
                    <div className="value">69</div>
                    <div className="label">Max Streak</div>
                </div>
                </div>
                <div className="footer-card">
                    <div className="footer-item">Stars: <span>2★</span></div>
                    <div className="footer-item">Coding Score: <span>384</span></div>
                </div>

            </div>

            {/* CodeChef Card */}
            <div className="card" >
                <div className="card-header">
                <h3>
                    <img src="https://cdn.codechef.com/sites/default/files/uploads/pictures/6b04e7b14305e4a5a0e6f9dc2e586f89.png" alt="CodeChef Logo" />
                    CodeChef
                </h3>
                <a className="external-link" href="https://www.codechef.com/users/laksh_413" target="_blank" title="Visit">
                    &#x2197;
                </a>
                </div>
                <div className="stats">
                <div>
                    <div className="value">1452</div>
                    <div className="label">Highest Rating</div>
                </div>
                <div>
                    <div className="value">105</div>
                    <div className="label">Max Streak</div>
                </div>
                </div>
                <div className="footer-card">
                    <div className="footer-item">Contests: <span>25+</span></div>
                    <div className="footer-item">Badges: <span>3</span></div>
                </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
