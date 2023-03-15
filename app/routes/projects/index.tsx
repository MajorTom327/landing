import React from "react";
import { Trans, useTranslation } from "react-i18next";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import Title from "~/components/Title";
import constants from "~/refs/constants";

import projects from "~/data/projects";
import Routlet from "~/components/Routlet/Routlet";
import { Outlet } from "@remix-run/react";

type Props = {};

export const Index: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className="container mx-auto">
          <Title center xl className="mt-8 mb-4">
            {t("menu.project")}
          </Title>

          <Title center md>
            <Trans t={t} i18nKey="projects.title">
              <a
                className="underline text-accent-darken hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
                href={constants.social.github + "?tab=repositories"}
              >
                {t("social.github")}
              </a>
            </Trans>
          </Title>

          <div className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-4">
            {projects.map((project) => (
              <div key={project.key}>
                <ProjectCard project={project}>
                  <Routlet route={`/projects/${project.key}`} />
                </ProjectCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Index.defaultProps = {};

export default Index;
