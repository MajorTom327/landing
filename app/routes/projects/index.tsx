import React from "react";
import { useTranslation } from "react-i18next";
import Title from "~/components/Title";

type Props = {};

export const Index: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="container mx-auto">
          <Title xl>{t("menu.project")}</Title>
        </div>
      </div>
    </>
  );
};

Index.defaultProps = {};

export default Index;
