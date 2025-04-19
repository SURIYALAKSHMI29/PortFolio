// ScrollObserver.js
import { useEffect } from 'react';

const ScrollObserver = () => {
  useEffect(() => {
    // Select all elements with the 'fade-in' class
    const elements = document.querySelectorAll('.fade-in');

    // Intersection Observer to trigger fade-in on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'fade-in-active' class when element is in the viewport
          entry.target.classList.add('fade-in-active');
          console.log(entry.target);
          
        }
      });
    }, { threshold: 0.3 });  // Trigger when 50% of the element is in view

    // Observe each element with 'fade-in' class
    elements.forEach(element => {
      observer.observe(element);
    });

    // Cleanup on component unmount
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  });  // Run only once when component mounts

};

export default ScrollObserver;
