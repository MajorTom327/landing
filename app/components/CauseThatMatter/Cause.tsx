import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../Title";

type Props = {
  title: string;
  rows: number
};

export const Cause: React.FC<Props> = ({ title, rows }) => {
  const { t } = useTranslation();

  const description = Array.from(
    { length: rows },
    (_, i) => `${title}.reasons.${i}`
  );

  return (
    <div className="lg:w-2/3">
      <Title md>{t(title + '.title')}</Title>
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
