import "./styles/Achievements.css";

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Key <span>Achievements</span> & Hackathons
        </h2>
        <div className="achievements-grid">
          
          <div className="achievement-card leetcode-card">
            <div className="achievement-bg"></div>
            <div className="achievement-content">
              <div className="achievement-top">
                <span className="achievement-date">Jan 2026</span>
                <h4>Leetcode Contest Rating</h4>
              </div>
              <div className="achievement-metric">
                <span className="metric-number">1534</span>
                <span className="metric-icon">🏆</span>
              </div>
              <p>Demonstrated strong problem-solving skills through consistent contest participation. Solved 250+ problems on LeetCode & GFG.</p>
            </div>
          </div>

          <div className="achievement-card hackathon-card">
            <div className="achievement-bg"></div>
            <div className="achievement-content">
              <div className="achievement-top">
                <span className="achievement-date">Nov 2024</span>
                <h4>ByteBash Hackathon</h4>
              </div>
              <div className="achievement-metric">
                <span className="metric-text">University Finalist</span>
                <span className="metric-icon">🚀</span>
              </div>
              <p>Led my team to the final round in one of the largest university hackathons, building and pitching a full-stack solution under immense pressure.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Achievements;
