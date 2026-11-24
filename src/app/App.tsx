import { useMemo, useState } from "react";
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
  const [bioExpanded, setBioExpanded] = useState(true);
  const [activeProjectTags, setActiveProjectTags] = useState<string[]>([]);
  const avatarSrc = theme === "dark" ? "./pfp.png" : "./pfp-inverted.png";
  const tabCount = TAB_ENTRIES.length;
  const activeIndex = TAB_ENTRIES.findIndex(([key]) => key === activeTab);
  const tabGestureHandlers = useTabGestures(setActiveTab);
  useTabQuery(activeTab, setActiveTab);

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

        {activeTab === "projects" ? (
          <div className="project-tags-bar" aria-label="Project tag filters">
            <button
              type="button"
              className={`project-tag-btn${
                activeProjectTags.length === 0 ? " active" : ""
              }`}
              onClick={() => setActiveProjectTags([])}
            >
              All
            </button>
            {projectTags.map((tag) => {
              const isActive = activeProjectTags.includes(tag);
              return (
                <button
                  type="button"
                  className={`project-tag-btn${isActive ? " active" : ""}`}
                  onClick={() => toggleProjectTag(tag)}
                  key={tag}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        ) : null}

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
                  <ProjectsTab key={tabKey} activeTags={activeProjectTags} />
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
