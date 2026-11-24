import type { SkillCategoryEntry } from "../types/skills";

export const SKILL_CATEGORIES: Array<SkillCategoryEntry> = [
  {
    category: "Languages",
    skills: [
      {
        name: "JavaScript",
        experience: "Advanced",
        years: 5,
        note: "ES6+, DOM manipulation"
      },
      {
        name: "TypeScript",
        experience: "Advanced",
        years: 3,
        note: "Type-safe applications"
      },
      {
        name: "Python",
        experience: "Intermediate",
        years: 3,
        note: "Scripting, automation"
      },
      {
        name: "Bash",
        experience: "Intermediate",
        years: 2,
        note: "Scripting, automation"
      },
      {
        name: "Java",
        experience: "Beginner",
        years: 1,
        note: "Basic syntax, OOP concepts"
      },
      {
        name: "Go",
        experience: "Beginner",
        years: 1,
        note: "Basic syntax, concurrency"
      },
      {
        name: "Bun",
        experience: "Intermediate",
        years: 1,
        note: "Fast JS runtime, bundler"
      }
    ]
  },
  {
    category: "Web & Frameworks",
    skills: [
      {
        name: "HTML",
        experience: "Intermediate",
        years: 5,
        note: "Semantic markup, accessibility"
      },
      {
        name: "CSS",
        experience: "Intermediate",
        years: 5,
        note: "Responsive design, Flexbox, Grid"
      },
      {
        name: "React",
        experience: "Advanced",
        years: 2,
        note: "Hooks, state management"
      },
      {
        name: "Node.js",
        experience: "Intermediate",
        years: 2,
        note: "REST APIs, Express"
      }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      {
        name: "Git",
        experience: "Advanced",
        years: 3,
        note: "Version control, branching"
      },
      {
        name: "GitHub Actions",
        experience: "Intermediate",
        years: 1,
        note: "CI/CD pipelines, automation"
      },
      {
        name: "Vite",
        experience: "Intermediate",
        years: 2,
        note: "Build tool, development server"
      },
      {
        name: "Nginx",
        experience: "Intermediate",
        years: 1,
        note: "Web server configuration"
      },
      {
        name: "Docker",
        experience: "Beginner",
        years: 1,
        note: "Containerization basics"
      }
    ]
  },
  {
    category: "Databases",
    skills: [
      {
        name: "SQL",
        experience: "Intermediate",
        years: 1,
        note: "PostgreSQL, queries"
      },
      {
        name: "Redis",
        experience: "Beginner",
        years: 1,
        note: "Caching, key-value store"
      },
      {
        name: "MongoDB",
        experience: "Beginner",
        years: 1,
        note: "NoSQL database, document-oriented"
      }
    ]
  }
].map<SkillCategoryEntry>((cat) => ({
  ...cat,
  skills: cat.skills.sort((a, b) => {
    const expOrder: Record<string, number> = {
      Advanced: 3,
      Intermediate: 2,
      Beginner: 1
    };
    return expOrder[b.experience] - expOrder[a.experience];
  }) as SkillCategoryEntry["skills"]
}));
