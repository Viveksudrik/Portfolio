import { MdArrowOutward } from "react-icons/md";
import "./styles/Certificates.css";

const certificates = [
  {
    title: "Data Structures and Algorithms",
    issuer: "Iamneo",
    date: "May 2025",
    link: "https://drive.google.com/file/d/1QVLiK80JlCTbbtwTDkqIgsvZlvATJKZl/view?usp=sharing"
  },
  {
    title: "Full Stack Open",
    issuer: "University Of Helsinki",
    date: "Mar 2026",
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/889997c562ade7d2dcc8bff7ecdffb20"
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "Jan 2024",
    link: "https://www.freecodecamp.org/certification/viveksudrik/responsive-web-design"
  }
];

const Certificates = () => {
  return (
    <div className="certificates-section section-container" id="certificates">
      <div className="certificates-container">
        <h2>
          My <span>Certificates</span> & Courses
        </h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <a href={cert.link} key={index} className="certificate-card" data-cursor="disable" target="_blank" rel="noopener noreferrer">
              <div className="cert-glow"></div>
              <div className="cert-content">
                <div className="cert-header">
                  <span className="cert-date">{cert.date}</span>
                  <div className="cert-arrow-wrapper">
                    <MdArrowOutward className="cert-arrow" />
                  </div>
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
