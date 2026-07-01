import { useMemo, useState } from "react";
import "./App.css";
import { PROJECTS, SOCIALS } from "../data/portfolio";
import { TAB_ENTRIES, type Tab } from "./tabs";
import { useTabGestures } from "./features/useTabGestures";
import { getInitialTabFromQuery, useTabQuery } from "./features/useTabQuery";
import { ProjectsTab } from "./tabs/ProjectsTab";

type Theme = "dark" | "light";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(getInitialTabFromQuery);
  const [theme, setTheme] = useState<Theme>("dark");
  const [activeProjectTags, setActiveProjectTags] = useState<string[]>([]);
  const tabCount = TAB_ENTRIES.length;
  const activeIndex = TAB_ENTRIES.findIndex(([key]) => key === activeTab);
  const tabGestureHandlers = useTabGestures(setActiveTab);
  useTabQuery(activeTab, setActiveTab);

  const projectTags = useMemo(
    () =>
      Array.from(new Set(PROJECTS.flatMap((project) => project.tags))).sort(),
    [],
  );

  const toggleProjectTag = (tag: string) => {
    setActiveProjectTags((current) =>
      current.includes(tag)
        ? current.filter((existingTag) => existingTag !== tag)
        : [...current, tag],
    );
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <main className="portfolio-root">
      <section className="bio-section">
        <img
          src={theme === "dark" ? "./pfp.png" : "./pfp-inverted.png"}
          alt="Profile"
          className="bio-avatar"
          width={120}
          height={120}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="bio-text">
          <h1>Pyris</h1>
          <p>
            I'm a developer focused on building clean, efficient software and
            creative digital projects. I'm currently invested in Minecraft game
            development, especially with TypeScript-driven systems and
            interactive gameplay experiences.
          </p>
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
              transform: `translateX(-${activeIndex * (100 / tabCount)}%)`,
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
