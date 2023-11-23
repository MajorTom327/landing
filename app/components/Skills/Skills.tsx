import React from "react";

import { useTranslation } from "~/hooks/useTranslation";

import Title from "../Title";
import { Card, CardContent, CardTitle } from "../ui/card";
import type { SkillProps } from "./Skill";
import Skill from "./Skill";

type Props = {};

const skills: SkillProps[] = [
  { duration: 5, unit: "years", level: "advanced", title: "skills.react" },
  { duration: 6, unit: "years", level: "advanced", title: "skills.node" },

  {
    duration: 2,
    unit: "years",
    level: "intermediate",
    title: "skills.typescript",
  },
  {
    duration: 3,
    unit: "years",
    level: "intermediate",
    title: "skills.express",
  },
  {
    duration: 1.5,
    unit: "years",
    level: "intermediate",
    title: "skills.remix",
  },
  { duration: 1, unit: "years", level: "intermediate", title: "skills.craft" },
  { duration: 3, unit: "years", level: "intermediate", title: "skills.docker" },
  { duration: 3, unit: "years", level: "intermediate", title: "skills.meteor" },
  { duration: 2, unit: "years", level: "intermediate", title: "skills.mongo" },
  {
    duration: 14,
    unit: "months",
    level: "intermediate",
    title: "skills.mysql",
  },
  { duration: 2, unit: "years", level: "intermediate", title: "skills.agile" },
  { duration: 7, unit: "years", level: "intermediate", title: "skills.git" },
  { duration: 8, unit: "months", level: "intermediate", title: "skills.web3" },
];

export const Skills: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-center w-full my-8 px-4 lg:px-16">
        <Card className="w-full">
          <CardContent>
            <CardTitle>
              <Title xl center>
                {t("skills.title")}
              </Title>
            </CardTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, i) => (
                <Skill key={i} {...skill} />
              ))}
            </div>
          </CardContent>
        </Card>
        {/* <div className="shadow-lg rounded-xl border border-gray-200 p-4 text-center flex flex-col gap-6 w-full">
        </div> */}
      </div>
    </>
  );
};

Skills.defaultProps = {};

export default Skills;
