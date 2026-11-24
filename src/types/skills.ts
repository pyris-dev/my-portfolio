/** A group of related skills displayed in the portfolio. */
export interface SkillCategoryEntry {
  /** Name of the skill category. */
  category: string;
  /** Skills belonging to the category. */
  skills: Array<{
    /** Name of the skill. */
    name: string;
    /** Self-assessed experience level. */
    experience: "Beginner" | "Intermediate" | "Advanced";
    /** Years of experience with the skill. */
    years: number;
    /** Additional details about experience with the skill. */
    note: string;
  }>;
}
