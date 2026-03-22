import { useRef, MouseEvent, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "Nodebase",
    category: "Visual Workflow Automation Tool",
    tools: "Next.js, TypeScript, PostgreSQL, Prisma, Inngest, tRPC, Sentry",
    image: "/images/Nodebase.png",
    github: "https://github.com/Viveksudrik",
  },
  {
    title: "KaarigariHub",
    category: "Full-Stack Handicrafts Marketplace",
    tools: "MongoDB, Express.js, React, Node.js, JWT, Bootstrap, SCSS",
    image: "/images/KaarigariHub.jpg",
    github: "https://github.com/Viveksudrik",
  },
  {
    title: "Medium Clone",
    category: "Blogging Platform",
    tools: "React, Node.js, Express, PostgreSQL, Prisma, Tailwind CSS",
    image: "/images/Medium.png",
    github: "https://github.com/Viveksudrik",
  },
  {
    title: "PhiloTalk",
    category: "Philosophy & Books Discussion Platform with AI",
    tools: "Next.js, TypeScript, OpenAI API, MongoDB, Tailwind CSS",
    image: "/images/PhiloTalk.png",
    github: "https://github.com/Viveksudrik",
  },
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -6; 
    const rotateY = ((x - centerX) / centerX) * 6;  

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    cardRef.current.style.setProperty("--mouse-x", `50%`);
    cardRef.current.style.setProperty("--mouse-y", `50%`);
  }, []);

  return (
    <div 
      className="project-card" 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-glow" />
      <div className="project-image-container">
        <WorkImage image={project.image} alt={project.title} />
      </div>
      <div className="project-info-glass">
        <div className="project-header">
          <h3>0{index + 1}</h3>
          <div>
            <h4>{project.title}</h4>
            <p className="project-category">{project.category}</p>
          </div>
        </div>
        <div className="project-tools">
          <span className="tools-label">Tools & Features</span>
          <p>{project.tools}</p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-link"
          data-cursor="disable"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
