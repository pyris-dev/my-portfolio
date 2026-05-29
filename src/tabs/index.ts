import { AboutTab } from "./AboutTab";
import { ContributionsTab } from "./ContributionsTab";
import { ProjectsTab } from "./ProjectsTab";
import { SkillsTab } from "./SkillsTab";

export const TABS = {
  projects: {
    name: "Projects",
    content: ProjectsTab,
  },
  contributions: {
    name: "Contributions",
    content: ContributionsTab,
  },
  skills: {
    name: "Coding Skills",
    content: SkillsTab,
  },
  about: {
    name: "About Me",
    content: AboutTab,
  },
};
export type Tab = keyof typeof TABS;

export const TAB_ENTRIES = Object.entries(TABS) as Array<
  [Tab, (typeof TABS)[Tab]]
>;
