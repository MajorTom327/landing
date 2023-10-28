import { useParams } from "@remix-run/react";
import React from "react";
import projects from "~/data/projects";

import getImageUrl from "~/lib/getImageUrl";

import ErrorView from "~/components/ErrorView";

import { useTranslation } from "~/hooks/useTranslation";

type Props = {};

export function headers() {
  return {
    "Cache-Control": "s-maxage=60",
  };
}

export const ProjectByIdPage: React.FC<Props> = ({}) => {
  const { projectKey } = useParams();
  const { t } = useTranslation();

  const project = projects.find((el) => el.key === projectKey);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {project.description?.map((p, i) => (
        <p className="text-justify" key={i + 1}>
          {t(p)}
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
          {/* <img src={getImageUrl(project.image)} alt="" className="w-full" /> */}
        </div>
      )}
    </div>
  );
};

export const ErrorBoundary = () => <ErrorView />;

ProjectByIdPage.defaultProps = {};

export default ProjectByIdPage;
