import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { PROJECTS } from "../data/projects";
import { SOCIALS } from "../data/socials";
import { TAB_ENTRIES, type Tab } from "./tabs";
import { useTabGestures } from "./features/useTabGestures";
import { getInitialTabFromQuery, useTabQuery } from "./features/useTabQuery";
import { ProjectsTab } from "./tabs/ProjectsTab";
import { BIO } from "../data/bio";

/** Available portfolio color themes. */
type Theme = "dark" | "light";

/** Renders the portfolio, navigation, project filters, and theme toggle. */
function App() {
  const [activeTab, setActiveTab] = useState<Tab>(getInitialTabFromQuery);
  const [theme, setTheme] = useState<Theme>("dark");
  const [bioExpanded, setBioExpanded] = useState(
    () => new URLSearchParams(window.location.search).get("bio") !== "hidden"
  );
  const [activeProjectTags, setActiveProjectTags] = useState<string[]>([]);
  const [projectSearch, setProjectSearch] = useState("");
  const [openProjectPanel, setOpenProjectPanel] = useState<
    "search" | "filter" | null
  >(null);
  const projectPanelsRef = useRef<HTMLDivElement>(null);
  const searchPanelContentRef = useRef<HTMLDivElement>(null);
  const filterPanelContentRef = useRef<HTMLDivElement>(null);
  const searchOpen = openProjectPanel === "search";
  const filtersOpen = openProjectPanel === "filter";
  const avatarSrc = theme === "dark" ? "./pfp.png" : "./pfp-inverted.png";
  const tabCount = TAB_ENTRIES.length;
  const activeIndex = TAB_ENTRIES.findIndex(([key]) => key === activeTab);
  const tabGestureHandlers = useTabGestures(setActiveTab);
  useTabQuery(activeTab, setActiveTab);

  useEffect(() => {
    const syncBioFromQuery = () => {
      setBioExpanded(
        new URLSearchParams(window.location.search).get("bio") !== "hidden"
      );
    };

    window.addEventListener("popstate", syncBioFromQuery);
    return () => window.removeEventListener("popstate", syncBioFromQuery);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("bio", bioExpanded ? "shown" : "hidden");
    const nextSearch = `?${params.toString()}`;

    if (window.location.search !== nextSearch)
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${nextSearch}${window.location.hash}`
      );
  }, [bioExpanded]);

  useLayoutEffect(() => {
    const panels = projectPanelsRef.current;
    if (!panels) return;

    const content =
      openProjectPanel === "search"
        ? searchPanelContentRef.current
        : openProjectPanel === "filter"
          ? filterPanelContentRef.current
          : null;

    if (!content) {
      panels.style.height = "0px";
      return;
    }

    const updateHeight = () => {
      panels.style.height = `${content.offsetHeight}px`;
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(content);
    return () => observer.disconnect();
  }, [activeTab, openProjectPanel]);

  const projectTags = useMemo(
    () =>
      Array.from(new Set(PROJECTS.flatMap((project) => project.tags))).sort(),
    []
  );

  /**
   * Adds or removes a project tag from the active filters.
   * @param tag The project tag to toggle.
   */
  const toggleProjectTag = (tag: string) => {
    setActiveProjectTags((current) =>
      current.includes(tag)
        ? current.filter((existingTag) => existingTag !== tag)
        : [...current, tag]
    );
  };

  /** Switches the color theme and applies it to the document. */
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <main className="portfolio-root">
      <section className="bio-section">
        <div className="bio-header">
          <button
            type="button"
            className="bio-toggle"
            aria-expanded={bioExpanded}
            aria-controls="bio-content"
            onClick={() => setBioExpanded((expanded) => !expanded)}
          >
            <svg
              className="bio-toggle-icon"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="2" />
            </svg>
            {bioExpanded ? "Hide bio" : "Show bio"}
          </button>
          {!bioExpanded && (
            <div className="bio-summary">
              <img
                src={avatarSrc}
                alt=""
                className="bio-summary-avatar"
                width={40}
                height={40}
              />
              <h1 className="bio-summary-name">{BIO[0].name}</h1>
            </div>
          )}
        </div>
        <div
          id="bio-content"
          className="bio-reveal"
          data-expanded={bioExpanded}
          aria-hidden={!bioExpanded}
          inert={!bioExpanded}
        >
          <div className="bio-reveal-inner">
            <div className="bio-content">
              <img
                src={avatarSrc}
                alt="Profile"
                className="bio-avatar"
                width={120}
                height={120}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="bio-text">
                <h1>{BIO[0].name}</h1>
                <p>{BIO[0].description}</p>
                <div className="socials">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                    >
                      <svg className="social-icon">
                        <use href={s.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tabs-section">
        <div className="tab-bar">
          {TAB_ENTRIES.map(([tabKey, tab]) => {
            const isActive = activeTab === tabKey;
            return (
              <button
                className={`tab-btn${isActive ? " active" : ""}`}
                onClick={() => setActiveTab(tabKey)}
                key={tabKey}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        <div
          className="tab-content"
          onTouchStart={tabGestureHandlers.onTouchStart}
          onTouchEnd={tabGestureHandlers.onTouchEnd}
          onPointerDown={tabGestureHandlers.onPointerDown}
          onPointerUp={tabGestureHandlers.onPointerUp}
          onPointerCancel={tabGestureHandlers.onPointerCancel}
          onWheel={tabGestureHandlers.onWheel}
        >
          <div
            className="tab-slider"
            style={{
              transform: `translateX(-${activeIndex * (100 / tabCount)}%)`
            }}
          >
            {TAB_ENTRIES.map(([tabKey, tab]) => {
              if (tabKey === "projects") {
                return (
                  <div
                    key={tabKey}
                    className="project-tab-slide"
                    aria-hidden={activeTab !== "projects"}
                    inert={activeTab !== "projects"}
                  >
                    <div
                      className="project-controls"
                      onTouchStart={(event) => event.stopPropagation()}
                      onTouchEnd={(event) => event.stopPropagation()}
                      onPointerDown={(event) => event.stopPropagation()}
                      onPointerUp={(event) => event.stopPropagation()}
                      onWheel={(event) => event.stopPropagation()}
                    >
                      <div className="project-controls-buttons">
                        <button
                          type="button"
                          className="project-control-btn"
                          aria-label="Search projects"
                          title="Search projects"
                          aria-expanded={searchOpen}
                          aria-controls="project-search-panel"
                          onClick={() => {
                            if (searchOpen) setProjectSearch("");
                            if (filtersOpen) setActiveProjectTags([]);
                            setOpenProjectPanel(searchOpen ? null : "search");
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle cx="10.5" cy="10.5" r="6.5" />
                            <path d="m15.5 15.5 4 4" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="project-control-btn"
                          aria-label="Filter projects"
                          title="Filter projects"
                          aria-expanded={filtersOpen}
                          aria-controls="project-filter-panel"
                          onClick={() => {
                            if (filtersOpen) setActiveProjectTags([]);
                            if (searchOpen) setProjectSearch("");
                            setOpenProjectPanel(filtersOpen ? null : "filter");
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path d="M4 5h16l-6.5 7.5v5L10.5 19v-6.5L4 5Z" />
                          </svg>
                        </button>
                      </div>
                      <div
                        className="project-controls-panels"
                        ref={projectPanelsRef}
                      >
                        <div
                          id="project-search-panel"
                          className="project-controls-panel"
                          data-expanded={searchOpen}
                          aria-hidden={!searchOpen}
                          inert={!searchOpen}
                        >
                          <div className="project-controls-panel-inner">
                            <div
                              className="project-controls-panel-content"
                              ref={searchPanelContentRef}
                            >
                              <div className="project-controls-card">
                                <div className="project-controls-heading">
                                  <h2>Search projects</h2>
                                  <p>Find a project by name.</p>
                                </div>
                                <input
                                  className="project-search-input"
                                  type="search"
                                  aria-label="Search projects by name"
                                  placeholder="Search projects..."
                                  value={projectSearch}
                                  onChange={(event) =>
                                    setProjectSearch(event.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="project-filter-panel"
                          className="project-controls-panel"
                          data-expanded={filtersOpen}
                          aria-hidden={!filtersOpen}
                          inert={!filtersOpen}
                        >
                          <div className="project-controls-panel-inner">
                            <div
                              className="project-controls-panel-content"
                              ref={filterPanelContentRef}
                            >
                              <div className="project-controls-card">
                                <div className="project-controls-heading">
                                  <h2 id="project-filter-heading">
                                    Filter by tag
                                  </h2>
                                  <p>
                                    Show projects matching any selected tag.
                                  </p>
                                </div>
                                <div
                                  className="project-tags-bar"
                                  role="group"
                                  aria-labelledby="project-filter-heading"
                                >
                                  <button
                                    type="button"
                                    className={`project-tag-btn${
                                      activeProjectTags.length === 0
                                        ? " active"
                                        : ""
                                    }`}
                                    aria-pressed={
                                      activeProjectTags.length === 0
                                    }
                                    onClick={() => setActiveProjectTags([])}
                                  >
                                    All
                                  </button>
                                  {projectTags.map((tag) => {
                                    const isActive =
                                      activeProjectTags.includes(tag);
                                    return (
                                      <button
                                        type="button"
                                        className={`project-tag-btn${isActive ? " active" : ""}`}
                                        aria-pressed={isActive}
                                        onClick={() => toggleProjectTag(tag)}
                                        key={tag}
                                      >
                                        {tag}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ProjectsTab
                      activeTags={activeProjectTags}
                      searchQuery={projectSearch}
                    />
                  </div>
                );
              }

              return <tab.content key={tabKey} />;
            })}
          </div>
        </div>
      </section>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </main>
  );
}

export default App;
