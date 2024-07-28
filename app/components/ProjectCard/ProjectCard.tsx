import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components";
import { Trans, useTranslation } from "react-i18next";
import { Project } from "./Project.types";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib";
import { ProjectImage } from "~/components/ProjectCard/ProjectImage";
import { isEmpty } from "rambda";

type Props = {
  project: Project & { key: string };
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const { t } = useTranslation("projects");

  return (
    <>
      <Card className="flex flex-col">
        <ProjectImage projectKey={project.key} />
        <CardHeader>
          <CardTitle>
            <Trans>{t(project.label)}</Trans>
          </CardTitle>
          <div className="flex gap-2">
            {project.tech.map((tech) => {
              return <Badge key={tech}>{tech}</Badge>;
            })}
          </div>
        </CardHeader>
        <CardContent className={cn("space-y-4 grow")}>
          {project.description.map((paragraph) => (
            <p key={paragraph}>
              <Trans>{paragraph}</Trans>
            </p>
          ))}
        </CardContent>
        {!isEmpty(project.urls) && (
          <CardFooter className={cn("flex w-full gap-2")}>
            {project.urls.website && (
              <Button asChild variant={"outline"} className={"w-full"}>
                <a href={project.urls.website}>{t("website")}</a>
              </Button>
            )}
            {project.urls.repo && (
              <Button asChild variant={"outline"} className={"w-full"}>
                <a href={project.urls.repo}>{t("repo")}</a>
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </>
  );
};
