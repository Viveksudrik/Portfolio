import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="education-timeline">
          
          <div className="education-item">
            <div className="education-marker">
              <div className="education-marker-inner"></div>
            </div>
            <div className="education-content">
              <h3>Lovely Professional University</h3>
              <p className="education-location">Punjab, India</p>
              <h4>Bachelor of Technology - Computer Science and Engineering</h4>
              <div className="education-footer">
                <span className="education-date">Expected – May 2027</span>
              </div>
            </div>
          </div>

          <div className="education-item">
            <div className="education-marker">
                <div className="education-marker-inner"></div>
            </div>
            <div className="education-content">
              <h3>Samarth Mahavidyalaya</h3>
              <p className="education-location">Ahilyanagar, Maharashtra</p>
              <h4>Intermediate</h4>
              <div className="education-footer">
                <span className="education-date">Apr 2021 - Mar 2023</span>
                <span className="education-grade">Percentage: 84.17%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
