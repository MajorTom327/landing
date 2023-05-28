import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { ClientOnly } from "remix-utils";
import Button from "~/components/Button";
import Hobbies from "~/components/Hobbies";
import Skills from "~/components/Skills";
import Timeline from "~/components/Timeline";
import WorkingValues from "~/components/WorkingValues";

type Props = {};

export function headers() {
  return {
    "Cache-Control": "s-maxage=60",
  };
}

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
