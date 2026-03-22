import { MdArrowOutward } from "react-icons/md";
import "./styles/Certificates.css";

const certificates = [
  {
    title: "Data Structures and Algorithms",
    issuer: "Iamneo",
    date: "May 2025",
    link: "#"
  },
  {
    title: "Full Stack Open",
    issuer: "University Of Helsinki",
    date: "Mar 2026",
    link: "#"
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "Jan 2024",
    link: "#"
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
