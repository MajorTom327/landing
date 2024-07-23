import type { SkillProps } from "../components/Skills/Skill";

export const skills: SkillProps[] = [
  { duration: 5, unit: "years", level: "advanced", title: "skills.react" },
  { duration: 6, unit: "years", level: "advanced", title: "skills.node" },

  {
    duration: 2,
    unit: "years",
    level: "intermediate",
    title: "skills.typescript",
  },
  {
    duration: 2.5,
    unit: "years",
    level: "intermediate",
    title: "skills.remix",
  },
  { duration: 3, unit: "years", level: "intermediate", title: "skills.docker" },
  { duration: 2, unit: "years", level: "intermediate", title: "skills.mongo" },
  // {
  //   duration: 2,
  //   unit: "years",
  //   level: "intermediate",
  //   title: "skills.mysql",
  // },
  {
    duration: 3,
    unit: "years",
    level: "intermediate",
    title: "skills.postgres",
  },
  { duration: 2, unit: "years", level: "intermediate", title: "skills.agile" },
  { duration: 7, unit: "years", level: "intermediate", title: "skills.git" },
  { duration: 8, unit: "months", level: "intermediate", title: "skills.web3" },
];

export default skills;
