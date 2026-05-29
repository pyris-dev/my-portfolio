import type {
  ContactEntry,
  ContributionEntry,
  EducationEntry,
  ProjectEntry,
  SkillCategoryEntry,
  SocialEntry,
} from "./types";

export const SOCIALS: Array<SocialEntry> = [
  {
    name: "GitHub",
    url: "https://github.com/Nathan93705",
    icon: "./icons.svg#github-icon",
  },
];

export const PROJECTS: Array<ProjectEntry> = [
  {
    title: "Example Project",
    description:
      "Example project showcasing a modern React portfolio template with responsive design and smooth animations.",
    banner: "./project1/banner.png",
    url: "",
    objectFit: "cover",
  },
  {
    title: "Example Project",
    description:
      "Example project showcasing a modern React portfolio template with responsive design and smooth animations.",
    banner: "./project2/banner.png",
    url: "",
    objectFit: "cover",
  },
  {
    title: "Example Project",
    description:
      "Example project showcasing a modern React portfolio template with responsive design and smooth animations.",
    banner: "./project1/banner.png",
    url: "",
    objectFit: "cover",
  },
  {
    title: "Example Project",
    description:
      "Example project showcasing a modern React portfolio template with responsive design and smooth animations.",
    banner: "./project2/banner.png",
    url: "",
    objectFit: "cover",
  },
];

export const SKILL_CATEGORIES: Array<SkillCategoryEntry> = [
  {
    category: "Languages",
    skills: [
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
        name: "Python",
        experience: "Intermediate",
        years: 3,
        note: "Scripting, automation",
      },
      {
        name: "Bash",
        experience: "Intermediate",
        years: 2,
        note: "Scripting, automation",
      },
      {
        name: "Java",
        experience: "Beginner",
        years: 1,
        note: "Basic syntax, OOP concepts",
      },
      {
        name: "Go",
        experience: "Beginner",
        years: 1,
        note: "Basic syntax, concurrency",
      },
      {
        name: "Bun",
        experience: "Intermediate",
        years: 1,
        note: "Fast JS runtime, bundler",
      },
    ],
  },
  {
    category: "Web & Frameworks",
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
        name: "React",
        experience: "Advanced",
        years: 2,
        note: "Hooks, state management",
      },
      {
        name: "Node.js",
        experience: "Intermediate",
        years: 2,
        note: "REST APIs, Express",
      },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      {
        name: "Git",
        experience: "Advanced",
        years: 3,
        note: "Version control, branching",
      },
      {
        name: "GitHub Actions",
        experience: "Intermediate",
        years: 1,
        note: "CI/CD pipelines, automation",
      },
      {
        name: "Vite",
        experience: "Intermediate",
        years: 2,
        note: "Build tool, development server",
      },
      {
        name: "Nginx",
        experience: "Intermediate",
        years: 1,
        note: "Web server configuration",
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
      {
        name: "MongoDB",
        experience: "Beginner",
        years: 1,
        note: "NoSQL database, document-oriented",
      },
    ],
  },
].map<SkillCategoryEntry>((cat) => ({
  ...cat,
  skills: cat.skills.sort((a, b) => {
    const expOrder: Record<string, number> = {
      Advanced: 3,
      Intermediate: 2,
      Beginner: 1,
    };
    return expOrder[b.experience] - expOrder[a.experience];
  }) as SkillCategoryEntry["skills"],
}));

export const EDUCATION: Array<EducationEntry> = [
  // {
  //   school: "Your University",
  //   degree: "B.S. Computer Science",
  //   year: "2022 – 2026",
  //   note: "Focused on software engineering and game development.",
  // },
];

export const CONTRIBUTIONS: Array<ContributionEntry> = [
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

export const CONTACT: Array<ContactEntry> = [
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
