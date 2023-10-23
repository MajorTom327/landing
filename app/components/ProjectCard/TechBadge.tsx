import React from "react";

import { useTranslation } from "~/hooks/useTranslation";

type Props = {
  skill: string;
};

export const TechBadge: React.FC<Props> = ({ skill }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-sm px-2 py-1 bg-accent text-accent-content rounded-full">
        {t(skill)}
      </div>
    </>
  );
};

TechBadge.defaultProps = {};

export default TechBadge;
