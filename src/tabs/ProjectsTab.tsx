import { PROJECTS } from "../content";

export function ProjectsTab() {
  return (
    <div className="tab-panel">
      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <a
            className="project-card"
            {...(project.url.length > 0 ? { href: project.url } : {})}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-banner">
              <img
                src={project.banner}
                alt={project.title + " banner"}
                style={{ objectFit: project.objectFit }}
              />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
