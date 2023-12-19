import { useToggle } from "ahooks";
import classNames from "classnames";
import { ScanSearch } from "lucide-react";
import React, { useContext } from "react";
import { VisionContext } from "~/context/visionContext";
import type { Project } from "~/data/projects";

import TechBadge from "~/components/ProjectCard/TechBadge";
import Title from "~/components/Title";
import { Button } from "~/components/ui/button";

import { useTranslation } from "~/hooks/useTranslation";

type Props = {
  project: Project;
  textLight?: boolean;
};

export const ProjectCard: React.FC<Props> = ({ project, textLight }) => {
  const classes = classNames(
    "border border-neutral-darken bg-neutral rounded-xl p-4 relative overflow-hidden",
    "group",
    "bg-local bg-center bg-cover",
    "flex flex-col gap-4 ",
    { "text-white": textLight }
  );

  const { t } = useTranslation();

  const isDeficitVision = useContext(VisionContext);
  const [showImage, { toggle: setShowImage }] = useToggle();

  return (
    <>
      <div
        className={classes}
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <Title center lg>
          {t(project.title)}
        </Title>

        <Button
          size="icon"
          variant="ghost"
          className="absolute top-1 right-1 opacity-20 hover:opacity-100 transition"
          onClick={() => setShowImage()}
        >
          <ScanSearch />
        </Button>
        <div
          className={classNames("rounded px-2 py-4 transition", {
            "backdrop-blur-xl": !isDeficitVision,
            "bg-black backdrop-blur-xl bg-opacity-50": isDeficitVision,
            "opacity-0": showImage,
          })}
        >
          <div className="flex flex-wrap justify-center gap-2 my-4">
            {project.techs.map((skill) => (
              <TechBadge key={skill} skill={skill} />
            ))}
          </div>
          <div className="flex flex-col gap-2 w-full">
            {project.description?.map((p, i) => (
              <p className="text-justify" key={i + 1}>
                {t(p)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

ProjectCard.defaultProps = {};

export default ProjectCard;
