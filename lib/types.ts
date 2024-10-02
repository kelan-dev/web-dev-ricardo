import { experienceData, navLinkData } from "./data";

export type SectionNameType = (typeof navLinkData)[number]["name"];
export type ExperienceDataType = (typeof experienceData)[number];
export type Theme = "light" | "dark";
