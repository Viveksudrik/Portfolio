import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaCode, FaServer, FaBrain, FaTools } from "react-icons/fa";
import "./styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#about",
      start: "top center",
      end: "bottom center",
      onEnter: () => gsap.to(".character-model", { autoAlpha: 0, duration: 0.5 }),
      onLeave: () => gsap.to(".character-model", { autoAlpha: 1, duration: 0.5 }),
      onEnterBack: () => gsap.to(".character-model", { autoAlpha: 0, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".character-model", { autoAlpha: 1, duration: 0.5 }),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="about-section" id="about">
      <div className="about-content-wrapper">
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <img src="/images/ProfilePic.png" alt="Profile" className="about-profile-pic" />
          </div>
        </div>
        <div className="about-text-column">
          <h3 className="about-title">
            <span className="title-highlight">About</span> Me
          </h3>
          <p className="about-description">
            Third-year B.Tech Computer Science student with a strong focus on full-stack web development and problem solving. I build scalable web applications using the <strong>MERN stack</strong> and sharpen my algorithmic thinking through <strong>DSA practice in C++</strong>. 
            <br/><br/>
            Currently following the Full Stack Open curriculum to deepen my understanding of modern JavaScript development and production-style full-stack applications.
          </p>
          <div className="about-tags">
            <span className="about-tag"><FaCode /> Full-Stack Dev</span>
            <span className="about-tag"><FaServer /> MERN Stack</span>
            <span className="about-tag"><FaBrain /> C++ & DSA</span>
            <span className="about-tag"><FaTools /> Problem Solver</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
