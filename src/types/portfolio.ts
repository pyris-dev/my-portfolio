import type { Dispatch, SetStateAction } from "react";

export interface SocialEntry {
  name: string;
  url: string;
  icon: string;
}

export interface ProjectEntry {
  title: string;
  description: string;
  banner: string;
  url: string;
  objectFit: "fill" | "contain" | "cover";
}

export interface SkillCategoryEntry {
  category: string;
  skills: Array<{
    name: string;
    experience: "Beginner" | "Intermediate" | "Advanced";
    years: number;
    note: string;
  }>;
}

export interface EducationEntry {
  school: string;
  degree: string;
  year: string;
  note: string;
}

export interface ContactEntry {
  label: string;
  value: string;
  href?: string;
}

export interface ContributionEntry {
  title: string;
  description: string;
  banner: string;
  url: string;
  objectFit: "fill" | "contain" | "cover";
}

export type SetState<T extends string> = Dispatch<SetStateAction<T>>;
