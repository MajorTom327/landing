import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../Title";
import Skill from "./Skill";

type Props = {};

export const Skills: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-center w-full my-8 px-4 lg:px-16">
        <div className="shadow-lg rounded-xl border border-gray-200 p-4 text-center flex flex-col gap-6 w-full">
          <Title xl>{t("skills.title")}</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Skill level="advanced" title="skills.react" />
            <Skill level="advanced" title="skills.node" />

            <Skill level="intermediate" title="skills.typescript" />
            <Skill level="intermediate" title="skills.express" />
            <Skill level="intermediate" title="skills.remix" />
            <Skill level="intermediate" title="skills.craft" />
            <Skill level="intermediate" title="skills.docker" />
            <Skill level="intermediate" title="skills.meteor" />
            <Skill level="intermediate" title="skills.mongo" />
            <Skill level="intermediate" title="skills.mysql" />
            <Skill level="intermediate" title="skills.agile" />
            <Skill level="intermediate" title="skills.git" />

            <Skill level="beginner" title="skills.web3" />
          </div>
        </div>
      </div>
    </>
  );
};

Skills.defaultProps = {};

export default Skills;
