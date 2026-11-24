/** A project displayed in the portfolio. */
export interface ProjectEntry {
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
