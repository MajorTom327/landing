import { Link, Outlet } from "@remix-run/react";
import classNames from "classnames";
import React from "react";
import type { Project } from "~/data/projects";

import getImageUrl from "~/lib/getImageUrl";

import { useTranslation } from "~/hooks/useTranslation";

import Routlet from "../Routlet/Routlet";
import Title from "../Title";
import TechBadge from "./TechBadge";

type Props = {
  project: Project;
  children?: React.ReactNode;
};

const buttonClasses = classNames(
  "w-full bg-accent hover:bg-accent-focus text-accent-content p-2",
  "text-center rounded shadow hover:shadow-lg"
);

export const ProjectCard: React.FC<Props> = ({ project, children }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="z-0 border border-neutral-darken bg-neutral hover:bg-neutral-darken rounded-xl p-4 transition hover:transform hover:motion-safe:-translate-y-1 group">
        <Link prefetch="intent" to={`/projects/${project.key}`}>
          {project.image && (
            <div className="-mt-4 -mx-4 h-32 rounded-t-xl overflow-y-hidden grayscale group-hover:grayscale-0 transition">
              <img
                src={getImageUrl(project.image, { width: 750 })}
                alt=""
                className="w-full"
              />
            </div>
          )}
          <Title center lg>
            {t(project.title)}
          </Title>

          <div className="flex flex-wrap justify-center gap-2 my-4">
            {project.techs.map((skill) => (
              <TechBadge key={skill} skill={skill} />
            ))}
          </div>
        </Link>
        {children}

        <div className="flex gap-2 py-4 px-2 w-full">
          {project.url && (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.url}
              className={buttonClasses}
            >
              {t("inspect.website")}
            </a>
          )}
          {project.repo && (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.repo}
              className={buttonClasses}
            >
              {t("inspect.repository")}
            </a>
          )}
        </div>
      </div>
    </>
  );
};

ProjectCard.defaultProps = {};

export default ProjectCard;
