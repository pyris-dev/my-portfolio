/** A social profile link displayed in the bio section. */
interface SocialEntry {
  /** Name of the social platform. */
  name: string;
  /** Link to the social profile. */
  url: string;
  /** SVG icon reference used for the link. */
  icon: string;
}

/**
 * Social links for the portfolio.
 * Should follow the {@link SocialEntry} structure.
 */
export const SOCIALS: Array<SocialEntry> = [
  {
    name: "GitHub",
    url: "https://github.com/pyris-dev",
    icon: "./icons.svg#github-icon"
  }
];
