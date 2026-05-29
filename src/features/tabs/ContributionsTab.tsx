import { CONTRIBUTIONS } from "../../../data/portfolio";

export function ContributionsTab() {
  return (
    <div className="tab-panel">
      <div className="projects-grid">
        {CONTRIBUTIONS.map((contrib, i) => (
          <a
            className="project-card"
            href={contrib.url}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-banner">
              <img
                src={contrib.banner}
                alt={contrib.title + " banner"}
                style={{ objectFit: contrib.objectFit }}
              />
            </div>
            <div className="project-info">
              <h3>{contrib.title}</h3>
              <p>{contrib.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
