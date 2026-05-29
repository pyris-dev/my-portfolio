import { useState } from "react";
import "./App.css";
import { SOCIALS } from "../data/portfolio";
import { TAB_ENTRIES, type Tab } from "./tabs";
import { useTabGestures } from "./features/useTabGestures";

type Theme = "dark" | "light";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const [theme, setTheme] = useState<Theme>("dark");
  const tabCount = TAB_ENTRIES.length;
  const activeIndex = TAB_ENTRIES.findIndex(([key]) => key === activeTab);
  const tabGestureHandlers = useTabGestures(setActiveTab);

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
            {TAB_ENTRIES.map(([tabKey, tab]) => (
              <tab.content key={tabKey} />
            ))}
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
