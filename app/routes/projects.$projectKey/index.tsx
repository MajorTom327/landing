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

  const project = find(propEq("key", projectKey), projects);

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
          <img src={getImageUrl(project.image)} alt="" className="w-full" />
        </div>
      )}
    </div>
  );
};

ProjectByIdPage.defaultProps = {};

export default ProjectByIdPage;
