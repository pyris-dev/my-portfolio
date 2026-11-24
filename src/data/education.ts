/** An education entry displayed on the About tab. */
interface EducationEntry {
  /** Name of the school. */
  school: string;
  /** Degree or program of study. */
  degree: string;
  /** Year or date range displayed for the entry. */
  year: string;
  /** Additional details about the education. */
  note: string;
}

/**
 * Education information for the portfolio.
 * Should follow the {@link EducationEntry} structure.
 */
export const EDUCATION: Array<EducationEntry> = [
  // {
  //   school: "Your University",
  //   degree: "B.S. Computer Science",
  //   year: "2022 – 2026",
  //   note: "Focused on software engineering and game development.",
  // },
];
