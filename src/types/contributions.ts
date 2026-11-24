/** A project to which the portfolio owner has contributed. */
export interface ContributionEntry {
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
