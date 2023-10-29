import { Bitcoin, Dumbbell, Gamepad2, TerminalSquare } from "lucide-react";
import React from "react";

import { useTranslation } from "~/hooks/useTranslation";

type Props = {};

type Hobby = {
  icon: React.ReactNode;
  description: string;
};

const hobby: Hobby[] = [
  {
    icon: <Gamepad2 />,
    description: "hobbies.game",
  },
  {
    icon: <TerminalSquare />,
    description: "hobbies.code",
  },
  {
    icon: <Dumbbell />,
    description: "hobbies.gym",
  },
  {
    icon: <Bitcoin />,
    description: "hobbies.blockchain",
  },
];

export const Hobbies: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center justify-center w-full my-8 px-4 lg:px-16">
        <div className="shadow-lg rounded-xl border border-gray-200 p-4 text-center gap-4 w-full">
          <div className="text-4xl font-bold">{t("hobbies.title")}</div>
          <div className="grid grid-cols-2 gap-8 mt-8">
            {hobby.map((hobby, index) => (
              <div
                className="flex items-center gap-4 px-6 justify-center"
                key={hobby.description}
              >
                <div className="text-[3.5rem]">{hobby.icon}</div>
                <div className="text-gray-500">
                  <p className="justify">{t(hobby.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Hobbies.defaultProps = {};

export default Hobbies;
