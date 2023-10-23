import React from "react";

import { useTranslation } from "~/hooks/useTranslation";

import Title from "../Title";

type Props = {
  title: string;
  rows: number;
};

export const Cause: React.FC<Props> = ({ title, rows }) => {
  const { t } = useTranslation();

  const description = Array.from(
    { length: rows },
    (_, i) => `${title}.reasons.${i}`
  );

  return (
    <div className="lg:w-2/3 px-4">
      <Title md>{t(title + ".title")}</Title>
      <div className="flex flex-col gap-3 text-justify">
        {description.map((desc) => (
          <p key={desc}>&nbsp;&nbsp;&nbsp;&nbsp;{t(desc)}</p>
        ))}
      </div>
    </div>
  );
};

Cause.defaultProps = {};

export default Cause;
