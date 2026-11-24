/** Bio information displayed on the About tab. */
interface BioData {
  /** Name of the bio section. */
  name: string;
  /** Description of the bio section. */
  description: string;
  /** About me section content. */
  aboutMe: string;
}

/**
 * Bio information for the portfolio.
 * Should follow the {@link BioData} structure.
 */
export const BIO: Array<BioData> = [
  {
    name: "Pyris",
    description:
      "I'm a developer focused on building clean, efficient software and creative digital projects. I'm currently invested in Minecraft game development, especially with TypeScript-driven systems and interactive gameplay experiences.",
    aboutMe:
      "I'm a passionate developer who loves building things from scratch. I enjoy working with TypeScript, creating game systems, and crafting interactive digital experiences. When I'm not coding, I'm exploring new technologies and contributing to open source."
  }
];
