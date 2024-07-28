import { Trans, useTranslation } from "react-i18next";
import { ProjectCard, ProjectSchema } from "~/components/ProjectCard";
import { useMemo } from "react";

export const ProjectsIndexRoute: React.FC = () => {
  const { t } = useTranslation("projects");

  const projects = useMemo(() => {
    const projectNames = t("projects.list", {
      returnObjects: true,
    }) as string[];

    return projectNames
      .map((projectName) => {
        const project = t(`${projectName}`, { returnObjects: true });
        const result = ProjectSchema.safeParse(project);
        return result.success ? { ...result.data, key: projectName } : null;
      })
      .filter((p) => p !== null);
  }, [t]);

  return (
    <>
      <div className={"flex flex-col gap-12 p-4"}>
        <h1 className="text-4xl">
          <Trans t={t}>projects.label</Trans>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.label} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsIndexRoute;
