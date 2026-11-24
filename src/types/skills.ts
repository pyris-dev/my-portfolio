export interface SkillCategoryEntry {
  category: string;
  skills: Array<{
    name: string;
    experience: "Beginner" | "Intermediate" | "Advanced";
    years: number;
    note: string;
  }>;
}
