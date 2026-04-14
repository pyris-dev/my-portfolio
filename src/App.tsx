import { useState } from "react";
import "./App.css";
import type {
  SocialEntry,
  ProjectEntry,
  SkillCategoryEntry,
  EducationEntry,
  ContactEntry,
  ContributionEntry,
} from "./types";

const SOCIALS: Array<SocialEntry> = [
  {
    name: "GitHub",
    url: "https://github.com/Nathan93705",
    icon: "/icons.svg#github-icon",
  },
];

const PROJECTS: Array<ProjectEntry> = [
  {
    title: "Example Project",
    description:
      "Example project showcasing a modern React portfolio template with responsive design and smooth animations.",
    banner: "/project1/banner.png",
    url: "#",
    objectFit: "cover",
  },
  {
    title: "Example Project",
    description:
      "Example project showcasing a modern React portfolio template with responsive design and smooth animations.",
    banner: "/project2/banner.png",
    url: "#",
    objectFit: "cover",
  },
  {
    title: "Example Project",
    description:
      "Example project showcasing a modern React portfolio template with responsive design and smooth animations.",
    banner: "/project1/banner.png",
    url: "#",
    objectFit: "cover",
  },
  {
    title: "Example Project",
    description:
      "Example project showcasing a modern React portfolio template with responsive design and smooth animations.",
    banner: "/project2/banner.png",
    url: "#",
    objectFit: "cover",
  },
];

const SKILL_CATEGORIES: Array<SkillCategoryEntry> = [
  {
    category: "Frontend",
    skills: [
      {
        name: "HTML",
        experience: "Intermediate",
        years: 5,
        note: "Semantic markup, accessibility",
      },
      {
        name: "CSS",
        experience: "Intermediate",
        years: 5,
        note: "Flexbox, Grid, animations",
      },
      {
        name: "JavaScript",
        experience: "Advanced",
        years: 5,
        note: "ES6+, DOM manipulation",
      },
      {
        name: "TypeScript",
        experience: "Advanced",
        years: 3,
        note: "Type-safe applications",
      },
      {
        name: "React",
        experience: "Advanced",
        years: 2,
        note: "Hooks, state management",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        experience: "Intermediate",
        years: 2,
        note: "REST APIs, Express",
      },
      {
        name: "Python",
        experience: "Intermediate",
        years: 3,
        note: "Scripting, automation",
      },
    ],
  },
  {
    category: "DevOps",
    skills: [
      {
        name: "Git",
        experience: "Advanced",
        years: 3,
        note: "Version control, branching",
      },
      {
        name: "Docker",
        experience: "Beginner",
        years: 1,
        note: "Containerization basics",
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "SQL",
        experience: "Intermediate",
        years: 1,
        note: "PostgreSQL, queries",
      },
      {
        name: "Redis",
        experience: "Beginner",
        years: 1,
        note: "Caching, key-value store",
      },
    ],
  },
];

const EDUCATION: Array<EducationEntry> = [
  // {
  //   school: "Your University",
  //   degree: "B.S. Computer Science",
  //   year: "2022 – 2026",
  //   note: "Focused on software engineering and game development.",
  // },
];

const CONTRIBUTIONS: Array<ContributionEntry> = [
  {
    title: "SerenityJS",
    description:
      "A Minecraft Bedrock Edition Server Software, Written in TypeScript.",
    banner:
      "https://raw.githubusercontent.com/SerenityJS/serenity/develop/public/serenityjs-banner.png",
    url: "https://github.com/SerenityJS/serenity",
    objectFit: "contain",
  },
  // {
  //   title: "Pokebedrock",
  //   description:
  //     "A Minecraft Bedrock Edition Pokemon Addon",
  //   banner:
  //     "https://media.licdn.com/dms/image/sync/v2/D4E27AQEDPjthNVGrqQ/articleshare-shrink_800/articleshare-shrink_800/0/1712501730036?e=2147483647&v=beta&t=uTfokgyUpyTShvb8F7e_sDIwuDKiow-KkZMc4r2ruN0",
  //   url: "https://pokebedrock.com/home",
  //   objectFit: "cover",
  // },
];

const CONTACT: Array<ContactEntry> = [
  {
    label: "Email",
    value: "N/A",
    href: "mailto:your.email@example.com",
  },
  {
    label: "GitHub",
    value: "github.com/Nathan93705",
    href: "https://github.com/Nathan93705",
  },
  { label: "Discord", value: "pyris.dev" },
];

type Tab = "projects" | "contributions" | "skills" | "about";

const TAB_INDEX: Record<Tab, number> = {
  projects: 0,
  contributions: 1,
  skills: 2,
  about: 3,
};

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <main className="portfolio-root">
      <section className="bio-section">
        <img
          src={theme === "dark" ? "/pfp.png" : "/pfp-inverted.png"}
          alt="Profile"
          className="bio-avatar"
        />
        <div className="bio-text">
          <h1>Pyris</h1>
          <p>
            I'm a developer focused on building clean, efficient software and
            creative digital projects. I primarily prefer working with
            TypeScript, game systems, and interactive experiences.
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
          <button
            className={`tab-btn${activeTab === "projects" ? " active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`tab-btn${activeTab === "contributions" ? " active" : ""}`}
            onClick={() => setActiveTab("contributions")}
          >
            Contributions
          </button>
          <button
            className={`tab-btn${activeTab === "skills" ? " active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            Coding Skills
          </button>
          <button
            className={`tab-btn${activeTab === "about" ? " active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About Me
          </button>
        </div>

        <div className="tab-content">
          <div
            className="tab-slider"
            style={{
              transform: `translateX(-${TAB_INDEX[activeTab] * (100 / 4)}%)`,
            }}
          >
            <div className="tab-panel">
              <div className="projects-grid">
                {PROJECTS.map((project, i) => (
                  <a
                    className="project-card"
                    href={project.url}
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

            <div className="tab-panel">
              <div className="skills-categories">
                {SKILL_CATEGORIES.map((cat) => (
                  <div className="skill-category" key={cat.category}>
                    <h3 className="category-title">{cat.category}</h3>
                    <div className="category-skills">
                      {cat.skills.map((skill) => (
                        <div className="skill-card" key={skill.name}>
                          <div className="skill-top">
                            <span className="skill-name">{skill.name}</span>
                            <span
                              className={`skill-badge ${skill.experience.toLowerCase()}`}
                            >
                              {skill.experience}
                            </span>
                          </div>
                          <p className="skill-note">{skill.note}</p>
                          <span className="skill-years">
                            {skill.years} {skill.years === 1 ? "year" : "years"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tab-panel">
              <div className="about-section">
                <div className="about-block">
                  <h3 className="about-heading">About Me</h3>
                  <p className="about-text">
                    I'm a passionate developer who loves building things from
                    scratch. I enjoy working with TypeScript, creating game
                    systems, and crafting interactive digital experiences. When
                    I'm not coding, I'm exploring new technologies and
                    contributing to open source.
                  </p>
                </div>

                {EDUCATION.length > 0 && (
                  <div className="about-block">
                    <h3 className="about-heading">Education</h3>
                    <div className="about-cards">
                      {EDUCATION.map((edu) => (
                        <div className="about-card" key={edu.school}>
                          <div className="about-card-top">
                            <span className="about-card-title">
                              {edu.school}
                            </span>
                            <span className="about-card-year">{edu.year}</span>
                          </div>
                          <span className="about-card-subtitle">
                            {edu.degree}
                          </span>
                          <p className="about-card-note">{edu.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="about-block">
                  <h3 className="about-heading">Contact</h3>
                  <div className="about-cards">
                    {CONTACT.map((c) => {
                      const Tag = c.href ? "a" : "div";
                      const linkProps = c.href
                        ? {
                            href: c.href,
                            target: "_blank" as const,
                            rel: "noopener noreferrer",
                          }
                        : {};
                      return (
                        <Tag
                          className="contact-card"
                          key={c.label}
                          {...linkProps}
                        >
                          <button
                            className="copy-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              navigator.clipboard.writeText(c.value);
                              setCopiedLabel(c.label);
                              setTimeout(() => setCopiedLabel(null), 1200);
                            }}
                          >
                            {copiedLabel === c.label ? "Copied" : "Copy"}
                          </button>
                          <span className="contact-label">{c.label}</span>
                          <span className="contact-value">{c.value}</span>
                        </Tag>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
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
