import React from "react";
import { useTranslation } from "react-i18next";
import { DateTime } from "luxon";
import { cond, equals } from "ramda";

type Props = {
  title: string;
  level: "beginner" | "intermediate" | "advanced";
  duration?: number;
  unit: "years" | "months";
};

export type SkillProps = Props;

export const Skill: React.FC<Props> = ({ title, level, duration, unit }) => {
  const { t } = useTranslation();

  const labelPractice = cond([
    [equals("years"), () => t("time.experience.year")],
    [equals("months"), () => t("time.experience.month")],
  ])(unit);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col border rounded-3xl p-4 group w-full cursor-default">
          <div className="text-2xl group-hover:scale-150 transition transform group-hover:-translate-y-5 font-semibold">
            {t(title)}
          </div>
          <div className="relative">
            <div className="text-xl text-gray-300 group-hover:opacity-0 transition ">
              {t(`skills.levels.${level}`)}
            </div>
            {duration && (
              <div className="text-xl absolute top-0 right-0 left-0 text-gray-400 group-hover:opacity-100 opacity-0 transition ">
                {t(labelPractice, { count: duration })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Skill.defaultProps = {};

export default Skill;
