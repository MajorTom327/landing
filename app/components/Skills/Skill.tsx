import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
  level: "beginner" | "intermediate" | "advanced";
};

export const Skill: React.FC<Props> = ({ title, level }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col border rounded-3xl p-4 group w-full cursor-default">
          <div className="text-2xl group-hover:scale-150 transition transform group-hover:-translate-y-5 font-semibold">
            {t(title)}
          </div>
          <div className="text-xl text-gray-300 group-hover:text-gray-500 transition ">
            {t(`skills.levels.${level}`)}
          </div>
        </div>
      </div>
    </>
  );
};

Skill.defaultProps = {};

export default Skill;
