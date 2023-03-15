import React from "react";
import { useTranslation } from "react-i18next";
import Button from "~/components/Button";
import Hobbies from "~/components/Hobbies";
import Skills from "~/components/Skills";
import Timeline from "~/components/Timeline";
import WorkingValues from "~/components/WorkingValues";

type Props = {};

export const Index: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-center py-2">
        <Button to="/cv/viewer">{t("cv.printable")}</Button>
      </div>
      <WorkingValues />
      <Skills />
      <Timeline />
      <Hobbies />
    </>
  );
};

Index.defaultProps = {};

export default Index;
