import { AboutTab } from "./AboutTab";
import { ProjectsTab } from "./ProjectsTab";
import { SkillsTab } from "./SkillsTab";

export const TABS = {
  projects: {
    name: "Projects",
    content: ProjectsTab
  },
  skills: {
    name: "Technical Skills",
    content: SkillsTab
  },
  about: {
    name: "About Me",
    content: AboutTab
  }
};
export type Tab = keyof typeof TABS;

export const TAB_ENTRIES = Object.entries(TABS) as Array<
  [Tab, (typeof TABS)[Tab]]
>;
