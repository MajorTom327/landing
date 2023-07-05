import React from "react";
import { ProjectCard } from "./ProjectCard";

import projects from "~/data/projects";
import { Title } from "~/components/Title";
import { Trans } from "react-i18next";
import { Button } from "~/components/Button";

type Props = {};

const keep = ["styx", "deadsafe", "bellz"];
const darkImage = ["styx", "deadsafe"];

export const SomeProject: React.FC<Props> = ({}) => {
  const keepedProjects = projects.filter((project) =>
    keep.includes(project.key)
  );
  return (
    <>
      <div className="container mx-auto">
        <Title lg center className="my-4">
          <Trans>menu.project</Trans>
        </Title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {keepedProjects.map((project) => (
            <ProjectCard
              project={project}
              key={project.key}
              textLight={darkImage.includes(project.key)}
            />
          ))}

          <Button
            to="/projects"
            className="bg-transparent hover:bg-primary/20 transition text-primary/50 hover:text-primary"
          >
            <Trans>inspect.more</Trans>
          </Button>
        </div>
      </div>
    </>
  );
};

SomeProject.defaultProps = {};

export default SomeProject;
