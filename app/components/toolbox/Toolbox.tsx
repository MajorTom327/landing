import { ToolCard } from "~/components/toolbox/ToolCard";
import { Input } from "~/components/ui";
import { useTranslation } from "react-i18next";
import { FaGitAlt, FaNodeJs } from "react-icons/fa6";
import {
  SiDocker,
  SiPostgresql,
  SiReact,
  SiRemix,
  SiTypescript,
} from "react-icons/si";

export const Toolbox: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col gap-6 group">
        <div className="flex justify-between">
          <h1 className={"text-4xl"}>{t("toolbox.label")}</h1>
          <div className="group-hover:opacity-100 opacity-25 transition">
            <Input placeholder={"filter..."} />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <ToolCard label={"tech.react"} level={"Advanced"} icon={<SiReact />}>
            tech.description.react
          </ToolCard>

          <ToolCard
            label={"tech.node"}
            level={"Advanced"}
            large
            icon={<FaNodeJs />}
          >
            tech.description.node
          </ToolCard>
          <ToolCard
            label={"tech.git"}
            level={"Intermediate"}
            icon={<FaGitAlt />}
          >
            tech.description.git
          </ToolCard>
          <ToolCard
            label={"tech.remix"}
            level={"Advanced"}
            large
            icon={<SiRemix />}
          >
            tech.description.remix
          </ToolCard>

          <ToolCard
            label={"tech.ts"}
            level={"Intermediate"}
            icon={<SiTypescript />}
          >
            tech.description.ts
          </ToolCard>
          <ToolCard
            label={"tech.postgres"}
            level={"Intermediate"}
            icon={<SiPostgresql />}
          >
            tech.description.postgres
          </ToolCard>
          <ToolCard
            label={"tech.docker"}
            level={"Intermediate"}
            large
            icon={<SiDocker />}
          >
            tech.description.docker
          </ToolCard>
        </div>
      </div>
    </>
  );
};
