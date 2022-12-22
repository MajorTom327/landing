import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../Title";

type Props = {};

export const Personality: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto">
        <Title xl>{t("personality.title")}</Title>
      </div>
    </>
  );
};

Personality.defaultProps = {};

export default Personality;
