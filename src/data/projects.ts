import type { ProjectEntry } from "../types/projects";

export const PROJECTS: Array<ProjectEntry> = [
  {
    title: "BlockSmith",
    description:
      "A Minecraft Bedrock Edition Addon template generator, written in React and TypeScript.",
    banner: "https://pyris-dev.github.io/BlockSmith/banner.png",
    url: "https://pyris-dev.github.io/BlockSmith/",
    objectFit: "contain",
    tags: ["React", "TypeScript", "Vite", "Minecraft", "Addon"]
  },
  {
    title: "Example Project",
    description:
      "Example project showcasing a modern React portfolio template with responsive design and smooth animations.",
    banner: "./project1/banner.png",
    url: "",
    objectFit: "cover",
    tags: ["React", "Frontend", "UI"]
  },
  {
    title: "Example Project",
    description:
      "Example project showcasing a modern React portfolio template with responsive design and smooth animations.",
    banner: "./project2/banner.png",
    url: "",
    objectFit: "cover",
    tags: ["TypeScript", "Tooling", "Vite"]
  }
];
