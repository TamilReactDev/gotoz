import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './LandingPage.css'; 

const LandingPage = () => {
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

  return (
    <div className="landing-page">
      <motion.div
        className="intro-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: textInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        ref={textRef}
      >
        <h1>Welcome to Our Landing Page</h1>
        <p>Your journey begins here.</p>
      </motion.div>

      <motion.div
        className="intro-image"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: imageInView ? 1 : 0, y: imageInView ? 50 : 100 }}
        transition={{ duration: 1 }}
        ref={imageRef}
      >
        <img src="ar-code.png" alt="Landing" />
      </motion.div>
    </div>
  );
};

export default LandingPage;
