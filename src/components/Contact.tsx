import { MdArrowOutward, MdCopyright, MdEmail, MdPhone } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          Let's <span>Connect</span>
        </h2>
        <div className="contact-grid">
          
          <div className="contact-card">
            <h4>Reach Out</h4>
            <div className="contact-links">
              <a href="mailto:sudrikvivek694@gmail.com" className="contact-link" data-cursor="disable">
                <MdEmail className="contact-icon" />
                sudrikvivek694@gmail.com
              </a>
              <a href="tel:+917249845205" className="contact-link" data-cursor="disable">
                <MdPhone className="contact-icon" />
                +91-7249845205
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h4>Socials</h4>
            <div className="contact-links contact-socials-grid">
              <a href="https://linkedin.com/in/vivek-sudrik" target="_blank" rel="noopener noreferrer" className="contact-social" data-cursor="disable">
                LinkedIn <MdArrowOutward />
              </a>
              <a href="https://github.com/Viveksudrik" target="_blank" rel="noopener noreferrer" className="contact-social" data-cursor="disable">
                GitHub <MdArrowOutward />
              </a>
            </div>
          </div>

          <div className="contact-footer">
            <h2>
              Designed and Developed <br /> by <span>Vivek Sudrik</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
