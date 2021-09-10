import React, { useState, useEffect } from "react";
import "./../../index.css";
import man from "./../../images/man.svg";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import Typewriter from "typewriter-effect";
import resume from '../../assets/resume.pdf';

const contentVariants = {
  initial: {
    translateY: "100vh",
    opacity: 0,
  },

  animate: {
    translateY: "0vh",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
      // staggerChildren: 0.4,
    },
  },
};



const Home = () => {
  // State
  const [showHeadingOne, setShowHeadingOne] = useState(true);
  const [showHeadingTwo, setShowHeadingTwo] = useState(false);
  const [showHeadingThree, setShowHeadingThree] = useState(false);

  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne) {
        setShowHeadingOne(false);
        setShowHeadingThree(false);
        setShowHeadingTwo(true);
      } else if (showHeadingTwo) {
        setShowHeadingOne(false);
        setShowHeadingTwo(false);
        setShowHeadingThree(true);
      } else {
        setShowHeadingOne(true);
        setShowHeadingTwo(false);
        setShowHeadingThree(false);
      }
    }, 3000);
  }, [showHeadingOne, showHeadingTwo]);

  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h1 className="main-content">
          Hi There!
          <motion.span
            drag={true}
            dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
            className="hand"
            animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
            transition={{ yoyo: Infinity, duration: 1.5 }}
          >
            <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
          </motion.span>{" "}
        </h1>
        <h2 className="main-content">
          I'm <strong style={{color: '#9c72be'}}> Ali Nasir </strong>
        </h2>
        {/* Animate Skill Content */}

        <div className="skill-animation" >
          <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Freelancer",
                  "Web Solutions Provider",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
          />
        </div>
        <div className="button-wrapper">
          <button
            className="button contact-btn"
            onClick={() => scroll.scrollToBottom()}
          >
            Contact
          </button>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Resume</button>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="svg-container"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img className="svg" src={man} alt="" />
      </motion.div>
    </section>
  );
};

export default Home;
