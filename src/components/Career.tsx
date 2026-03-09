import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Journey <span>&</span>
          <br /> Learning
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Structures & Algorithms</h4>
                <h5>C++ · LeetCode · W3Grads</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed an intensive DSA course with W3Grads focused on
              problem-solving and algorithmic efficiency. Solved 250+ problems
              on LeetCode & GFG, achieving a contest rating of 1534. Implemented
              core concepts including Arrays, Trees, Graphs, and Sorting algorithms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Web Development</h4>
                <h5>MERN Stack · Full Stack Open</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built production-style full-stack applications using MongoDB,
              Express.js, React, and Node.js. Developed KaarigariHub (handicrafts
              marketplace) and Nodebase (visual workflow automation tool). Following
              the Full Stack Open curriculum for modern JavaScript development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building & Growing</h4>
                <h5>TypeScript · System Design · Production Apps</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently deepening TypeScript expertise, studying system design
              fundamentals, and building larger production-grade full-stack projects.
              Focused on scalable backend architecture and advanced algorithm practice
              to prepare for a career as a Software Engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
