/** A project to which the portfolio owner has contributed. */
interface ContributionEntry {
  /** Name of the project. */
  title: string;
  /** Short description of the project. */
  description: string;
  /** Path or URL of the project banner image. */
  banner: string;
  /** Link to the project. */
  url: string;
  /** CSS object-fit mode used to display the banner. */
  objectFit: "fill" | "contain" | "cover";
}

/**
 * Contributions featured in the portfolio.
 * Should follow the {@link ContributionEntry} structure.
 */
export const CONTRIBUTIONS: Array<ContributionEntry> = [
  {
    title: "SerenityJS",
    description:
      "A Minecraft Bedrock Edition Server Software, Written in TypeScript.",
    banner:
      "https://raw.githubusercontent.com/SerenityJS/serenity/develop/public/serenityjs-banner.png",
    url: "https://github.com/SerenityJS/serenity",
    objectFit: "contain"
  }
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
