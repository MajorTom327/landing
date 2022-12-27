import React from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import Title from "~/components/Title";

import projects from "~/data/projects";

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

          <div className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-4">
            {projects.map((project) => (
              <div key={project.key}>
                <ProjectCard project={project} />
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
