import React from "react";

import Hobbies from "~/components/Hobbies";
import { SkillsCard } from "~/components/Skills";
import Timeline from "~/components/Timeline";
import WorkingValues from "~/components/WorkingValues";
import { Button } from "~/components/ui/Button";

import { useTranslation } from "~/hooks/useTranslation";

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
        <Button variant="shiny" to="/resume/pdf">
          {t("cv.printable")}
        </Button>
      </div>
      <WorkingValues />
      <SkillsCard />
      <Timeline />
      <Hobbies />
    </>
  );
};

Index.defaultProps = {};

export default Index;
