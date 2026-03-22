import { MdCheckCircleOutline } from "react-icons/md";
import "./styles/Training.css";

const Training = () => {
  return (
    <div className="training-section section-container" id="training">
      <div className="training-container">
        <h2>
          <span>Training</span> & Bootcamps
        </h2>
        
        <div className="training-wrapper">
          <div className="training-card">
            <div className="training-card-bg"></div>
            <div className="training-header">
              <div className="training-title-box">
                <h3>W3Grads</h3>
                <h4>Master DSA With C++</h4>
                <span className="training-date">Jun 2025 - Aug 2025</span>
              </div>
              <a href="#" className="training-link" data-cursor="disable">
                View Credentials <span>→</span>
              </a>
            </div>
            
            <div className="training-divider"></div>
            
            <ul className="training-list">
              <li>
                <MdCheckCircleOutline className="training-icon" />
                <p>Completed an intensive Data Structures and Algorithms course focused on problem-solving, algorithmic efficiency, and industry-standard coding practices.</p>
              </li>
              <li>
                <MdCheckCircleOutline className="training-icon" />
                <p>Implemented core DSA concepts such as Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Heaps, and Searching/Sorting algorithms using C++.</p>
              </li>
              <li>
                <MdCheckCircleOutline className="training-icon" />
                <p>Solved 100+ structured coding challenges emphasizing time and space optimization to strengthen logical reasoning and coding accuracy.</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Training;
