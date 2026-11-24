/** A project displayed in the portfolio. */
interface ProjectEntry {
  /** Name of the project. */
  title: string;
  /** Short description of the project. */
  description: string;
  /** Path or URL of the project banner image. */
  banner: string;
  /** Link to the project, or an empty string when no link is available. */
  url: string;
  /** CSS object-fit mode used to display the banner. */
  objectFit: "fill" | "contain" | "cover";
  /** Tags displayed on the project card and used for filtering. */
  tags: string[];
}

/**
 * Projects featured in the portfolio.
 * Should follow the {@link ProjectEntry} structure.
 */
export const PROJECTS: Array<ProjectEntry> = [
  {
    title: "BlockSmith",
    description:
      "A Minecraft Bedrock Edition Addon template generator, written in React and TypeScript.",
    banner: "https://pyris-dev.github.io/BlockSmith/banner.png",
    url: "https://pyris-dev.github.io/BlockSmith/",
    objectFit: "contain",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Minecraft",
      "Addon",
      "Minecraft",
      "Addon"
    ]
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
