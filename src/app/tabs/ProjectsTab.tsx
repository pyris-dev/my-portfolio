import { useState } from "react";
import { PROJECTS } from "../../data/portfolio";

type ProjectsTabProps = {
  activeTags?: string[];
};

export function ProjectsTab({ activeTags = [] }: ProjectsTabProps) {
  const [openOverflowIndex, setOpenOverflowIndex] = useState<number | null>(
    null,
  );

  const filteredProjects =
    activeTags.length === 0
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.tags.some((tag) => activeTags.includes(tag)),
        );

  return (
    <div className="tab-panel">
      {filteredProjects.length === 0 ? (
        <p className="project-empty">No projects match the selected tags.</p>
      ) : null}
      <div className="projects-grid">
        {filteredProjects.map((project, i) =>
          (() => {
            const shownTags = project.tags.slice(0, 5);
            const overflowTags = project.tags.slice(5);
            const isOverflowOpen = openOverflowIndex === i;

            return (
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
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags-grid">
                    {shownTags.map((tag, tagIndex) => (
                      <span
                        className="project-tag-pill"
                        key={`${project.title}-${tag}-${tagIndex}`}
                      >
                        {tag}
                      </span>
                    ))}

                    {overflowTags.length > 0 ? (
                      <div className="project-tag-overflow-wrap">
                        <button
                          type="button"
                          className="project-tag-pill project-tag-overflow-toggle"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            setOpenOverflowIndex((current) =>
                              current === i ? null : i,
                            );
                          }}
                          aria-expanded={isOverflowOpen}
                          aria-label={`Show ${overflowTags.length} more tags for ${project.title}`}
                        >
                          +{overflowTags.length} more
                        </button>

                        {isOverflowOpen ? (
                          <div className="project-tag-overflow-menu">
                            {overflowTags.map((tag) => (
                              <span
                                className="project-tag-pill project-tag-overflow-item"
                                key={`${project.title}-overflow-${tag}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              </a>
            );
          })(),
        )}
      </div>
    </div>
  );
}
