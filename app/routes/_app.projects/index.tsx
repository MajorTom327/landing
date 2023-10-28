import React from "react";
import projects from "~/data/projects";
import constants from "~/refs/constants";

import ErrorView from "~/components/ErrorView";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import Routlet from "~/components/Routlet/Routlet";
import Title from "~/components/Title";

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
      <div>
        <div className="container mx-auto">
          <Title center xl className="mt-8 mb-4">
            {t("menu.project")}
          </Title>

          <Title center md>
            <a
              className="underline text-accent-darken hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
              href={constants.social.github + "?tab=repositories"}
            >
              {t("social.github")}
            </a>
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

export const ErrorBoundary = () => <ErrorView />;

Index.defaultProps = {};

export default Index;
