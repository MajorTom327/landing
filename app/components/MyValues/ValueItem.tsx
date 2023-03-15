import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../Title";
type Props = {
  value: string;
};

export const ValueItem: React.FC<Props> = ({ value }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-2 px-4">
        <div className="flex flex-col gap-2">
          <Title lg>{t(`${value}.title`)}</Title>
          <Title md light className="text-justify">
            {t(`${value}.description`)}
          </Title>
        </div>
      </div>
    </>
  );
};

ValueItem.defaultProps = {};

export default ValueItem;
