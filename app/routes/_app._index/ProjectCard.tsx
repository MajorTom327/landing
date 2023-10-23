import classNames from "classnames";
import React from "react";
import type { Project } from "~/data/projects";

import TechBadge from "~/components/ProjectCard/TechBadge";
import Title from "~/components/Title";

import { useTranslation } from "~/hooks/useTranslation";

type Props = {
  project: Project;
  textLight?: boolean;
};

export const ProjectCard: React.FC<Props> = ({ project, textLight }) => {
  const classes = classNames(
    "border border-neutral-darken bg-neutral rounded-xl p-4 relative",
    "group",
    "bg-local bg-center bg-cover",
    "flex flex-col gap-4",
    { "text-white": textLight }
  );

  const { t } = useTranslation();

  return (
    <>
      <div
        className={classes}
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <Title center lg>
          {t(project.title)}
        </Title>
        <div className="backdrop-blur-lg lg:backdrop-blur rounded px-2 py-4 transition group-hover:backdrop-blur-xl">
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
