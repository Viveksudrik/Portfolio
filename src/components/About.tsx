import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-header">
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <img src="/images/ProfilePic.png" alt="Profile" className="about-profile-pic" />
          </div>
          <h3 className="title">About Me</h3>
        </div>
        <p className="para">
          Third-year B.Tech Computer Science student with a strong focus on
          full-stack web development and problem solving. I build scalable web
          applications using the MERN stack and sharpen my algorithmic thinking
          through DSA practice in C++. Currently following the Full Stack Open
          curriculum to deepen my understanding of modern JavaScript development
          and production-style full-stack applications.
        </p>
      </div>
    </div>
  );
};

export default About;
