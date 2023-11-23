import React from "react";

import { useTranslation } from "~/hooks/useTranslation";

import { Card, CardContent, CardTitle } from "../ui/card";

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
        <Card>
          <CardContent>
            <CardTitle className="">
              <h1 className="text-4xl font-bold mb-2 text-center">
                {t("workingValues.title")}:
              </h1>
            </CardTitle>
            <div className="flex flex-col gap-4">
              {workingValues.map((workingValue, index) => (
                <div
                  className="flex flex-col items-center gap-2 px-6 justify-center"
                  key={workingValue.label}
                >
                  <h2 className="text-2xl">{t(workingValue.label)}</h2>
                  <div className="text-gray-500">
                    <p className="text-justify">
                      {t(workingValue.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

WorkingValues.defaultProps = {};

export default WorkingValues;
