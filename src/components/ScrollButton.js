import React, { useState, useEffect } from 'react';
import { ReactComponent as ScrollIcon } from '../assets/svgs/ScrollIcon.svg';
import { scrollToTop } from '../styles/utils/Constants';
import '../styles/ScrollButton.css';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`scroll-btn ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <ScrollIcon />
    </div>
  );
};

export default ScrollButton;
