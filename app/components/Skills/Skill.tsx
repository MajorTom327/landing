import { DateTime } from "luxon";
import { cond, equals } from "ramda";
import React from "react";

import { useTranslation } from "~/hooks/useTranslation";

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
    [equals("years"), () => "time.experience.year"],
    [equals("months"), () => "time.experience.month"],
  ])(unit);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col border border-white/75 shadow-lg rounded-3xl p-4 group w-full cursor-default justify-center items-center relative">
          <div className="text-2xl motion-safe:group-hover:scale-150 motion-safe:transition transform motion-safe:group-hover:-translate-y-4 font-semibold">
            {t(title)}
          </div>
          <div className="">
            <div className="text-xl text-gray-300 group-hover:opacity-0 transition ">
              {t(`skills.levels.${level}`)}
            </div>
            {duration && (
              <div className="text-xl absolute top-12 right-0 left-0 text-center text-gray-400 group-hover:opacity-100 opacity-0 motion-safe:transition ">
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
