import React, { useEffect } from 'react'
import Navbar from './components/NavBar/Navbar.jsx'
import Hero from './components/Hero/Hero'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import Skills from './components/Skills/Skills.jsx'
import Experience from './components/Experience/Experience.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css';
import ScrollObserver from './ScrollObserver';

const App = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    }
  },[])

  return(
     <div >
       <ScrollObserver />
        <Navbar/>
        <Hero className="fade-in" />
        <About className="fade-in" />
        <Skills className="fade-in" />
        <Projects className="fade-in" />
        <Experience className="fade-in" />
        <Contact className="fade-in" />
        <Footer className="fade-in" />
     </div>
  )
}
export default App
