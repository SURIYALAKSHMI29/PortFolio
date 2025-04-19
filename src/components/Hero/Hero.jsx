import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import profile from '../../../assets/profile1.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = ({ className, style }) => {
  const [name, setName] = useState('');
  const txt = "Suriya Lakshmi"; 
  const speed = 100; 

  const typingRef = useRef();
  const iRef = useRef(0); 

  useEffect(() => {
    typingRef.current = setInterval(() => {
      if (iRef.current < txt.length) {
        const char = txt.charAt(iRef.current);
        setName(prev => {
            const updated = prev + char;
            return updated;
        });
        iRef.current++;
      } else {
        clearInterval(typingRef.current);
      }
    }, speed);
  
    return () => {
      clearInterval(typingRef.current);
    };
  }, []);
  

  return (
    <div className={`hero ${className}`} style={style} id='home'>
      {/* <img src={profile} className="profile-img" alt="suriya" /> */}
      <h1>Hi, I'm <span id="name">{name}</span></h1>
      <p>Passionate full-stack developer with a focus on backend technologies. Eager to learn and tackle new projects, I thrive on turning ideas into reality.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink>
        </div>
        <div className="hero-resume" onClick={() => window.open("/docs/resume.pdf", "_blank")}>My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
