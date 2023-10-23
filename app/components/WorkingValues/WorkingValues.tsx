import React from "react";

import { useTranslation } from "~/hooks/useTranslation";

type Props = {};

type WorkingValue = {
  // icon: React.ReactNode;
  label: string;
  description: string;
};

const workingValues: WorkingValue[] = [
  {
    label: "workingValues.pride.title",
    description: "workingValues.pride.description",
  },
  {
    label: "workingValues.kindness.title",
    description: "workingValues.kindness.description",
  },
];

export const WorkingValues: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center justify-center w-full my-8 px-4 lg:px-16">
        <div className="shadow-lg rounded-xl border border-gray-200 p-4 text-center flex flex-col gap-6 w-full">
          <div className="text-4xl font-bold">{t("workingValues.title")}:</div>
          <div className="flex flex-col gap-4">
            {workingValues.map((workingValue, index) => (
              <div
                className="flex flex-col items-center gap-2 px-6 justify-center"
                key={workingValue.label}
              >
                <div className="text-2xl">{t(workingValue.label)}</div>
                <div className="text-gray-500">
                  <p className="text-justify">{t(workingValue.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

WorkingValues.defaultProps = {};

export default WorkingValues;
