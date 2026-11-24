/** A project displayed in the portfolio. */
interface ProjectEntry {
  /** Name of the project. */
  title: string;
  /** Portfolio owner's role in the project. */
  role: string;
  /** Link to the project, or an empty string when no link is available. */
  url: string;
  /** Additional image data for the project, if available. */
  imageData: {
    /** Path or URL of the project thumbnail image. */
    thumbnail: string;
    /** CSS object-fit mode used to display the thumbnail. */
    objectFit: "fill" | "contain" | "cover";
  };
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
    role: "Creator & Developer",
    imageData: {
      thumbnail: "https://pyris-dev.github.io/BlockSmith/banner.png",
      objectFit: "contain"
    },
    url: "https://pyris-dev.github.io/BlockSmith/",
    tags: ["React", "TypeScript", "Vite", "Minecraft", "Addon"]
  },
  {
    title: "SerenityJS",
    role: "Contributor",
    imageData: {
      thumbnail:
        "https://raw.githubusercontent.com/SerenityJS/serenity/develop/public/serenityjs-banner.png",
      objectFit: "contain"
    },
    url: "https://github.com/SerenityJS/serenity",
    tags: ["TypeScript", "Rust", "Node.js", "Minecraft", "Server", "Plugins"]
  },
  {
    title: "Pokebedrock",
    role: "Developer",
    imageData: {
      thumbnail:
        "https://media.licdn.com/dms/image/sync/v2/D4E27AQEDPjthNVGrqQ/articleshare-shrink_800/articleshare-shrink_800/0/1712501730036?e=2147483647&v=beta&t=uTfokgyUpyTShvb8F7e_sDIwuDKiow-KkZMc4r2ruN0",
      objectFit: "cover"
    },
    url: "https://pokebedrock.com/home",
    tags: ["Minecraft", "Bedrock", "Pokemon", "Addon", "Server"]
  }
];
