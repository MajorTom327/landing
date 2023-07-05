import classNames from "classnames";
import React from "react";
import { Trans } from "react-i18next";
import TechBadge from "~/components/ProjectCard/TechBadge";
import Title from "~/components/Title";
import type { Project } from "~/data/projects";

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

  return (
    <>
      <div
        className={classes}
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <Title center lg>
          <Trans>{project.title}</Trans>
        </Title>
        <div className="backdrop-blur rounded px-2 py-4 transition group-hover:backdrop-blur-xl">
          <div className="flex flex-wrap justify-center gap-2 my-4">
            {project.techs.map((skill) => (
              <TechBadge key={skill} skill={skill} />
            ))}
          </div>
          <div className="flex flex-col gap-2 w-full">
            {project.description?.map((p, i) => (
              <p className="text-justify" key={i + 1}>
                <Trans>{p}</Trans>
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

/*
<div className="flex flex-col gap-4">
        {project.description?.map((p, i) => (
          <p className="text-justify" key={i + 1}>
            <Trans>{p}</Trans>
          </p>
        ))}

        {project.image && (
          <div className="transition hover:motion-safe:scale-110 lg:hover:motion-safe:scale-125 shadow hover:shadow-xl rounded-lg overflow-hidden">
            <picture className="w-full">
              <source
                srcSet={getImageUrl(project.image, { width: 640 })}
                media="(max-width: 640px)"
              />
              <source
                srcSet={getImageUrl(project.image, { width: 750 })}
                media="(max-width: 750px)"
              />
              <source
                srcSet={getImageUrl(project.image, { width: 828 })}
                media="(max-width: 828px)"
              />
              <source
                srcSet={getImageUrl(project.image, { width: 1080 })}
                media="(max-width: 1080px)"
              />
              <img src={getImageUrl(project.image)} alt="" />
            </picture>
          </div>
        )}
      </div>
*/
