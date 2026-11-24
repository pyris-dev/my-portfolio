import { useState } from "react";
import { PROJECTS } from "../../data/projects";

/** Filtering options for the projects tab. */
type ProjectsTabProps = {
  /** Show projects matching any selected tag; an empty list shows all projects. */
  activeTags?: string[];
  /** Search for project names, ignoring case and surrounding whitespace. */
  searchQuery?: string;
};

/**
 * Renders project cards filtered by the selected tags and search query.
 * @param props The projects tab options.
 * @param props.activeTags Tags to filter by; defaults to showing all projects.
 * @param props.searchQuery Project name to search for.
 */
export function ProjectsTab({
  activeTags = [],
  searchQuery = ""
}: ProjectsTabProps) {
  const [openOverflowProject, setOpenOverflowProject] = useState<
    (typeof PROJECTS)[number] | null
  >(null);

  const query = searchQuery.trim().toLowerCase();
  const filteredProjects = PROJECTS.filter(
    (project) =>
      project.title.toLowerCase().includes(query) &&
      (activeTags.length === 0 ||
        project.tags.some((tag) => activeTags.includes(tag)))
  );

  return (
    <div className="tab-panel">
      {filteredProjects.length === 0 ? (
        <p className="project-empty">No projects match your search or filters.</p>
      ) : null}
      <div className="projects-grid portfolio-projects-grid">
        {filteredProjects.map((project) =>
          (() => {
            const shownTags = project.tags.slice(0, 5);
            const overflowTags = project.tags.slice(5);
            const isOverflowOpen = openOverflowProject === project;

            return (
              <a
                className="project-card portfolio-project-card"
                {...(project.url.length > 0 ? { href: project.url } : {})}
                key={PROJECTS.indexOf(project)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-banner">
                  <img
                    src={project.imageData.thumbnail}
                    alt={`${project.title} banner`}
                    style={{ objectFit: project.imageData.objectFit }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="project-info">
                  <div className="project-heading">
                    <h3>{project.title}</h3>
                    {project.url.length > 0 && (
                      <svg
                        className="project-link-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M7 17 17 7M8 7h9v9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="project-role">
                    <span className="project-role-label">Role:</span>{" "}
                    {project.role}
                  </p>

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
                            setOpenOverflowProject((current) =>
                              current === project ? null : project
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
          })()
        )}
      </div>
    </div>
  );
}
