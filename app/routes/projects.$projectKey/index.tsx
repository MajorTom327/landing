import { useParams } from "@remix-run/react";

import { find, propEq, T } from "ramda";
import React from "react";
import { useTranslation } from "react-i18next";
import projects from "~/data/projects";
import getImageUrl from "~/lib/getImageUrl";

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

      {/* 640 | 750 | 828 | 1080 | 1200 */}

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

ProjectByIdPage.defaultProps = {};

export default ProjectByIdPage;
