import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../Title";

type Props = {
  title: string;
  description: string[];
};

export const Cause: React.FC<Props> = ({ title, description }) => {
  const { t } = useTranslation();
  return (
    <div className="w-2/3">
      <Title md>{t(title)}</Title>
      <div className="flex flex-col gap-2">
        {description.map((desc) => (
          <p key={desc}>{t(desc)}</p>
        ))}
      </div>
    </div>
  );
};

Cause.defaultProps = {};

export default Cause;
