import { skills } from "~/data/skills";

import { useTranslation } from "~/hooks/useTranslation";

import { Title } from "../Title";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Skill from "./Skill";

export const SkillsCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-center w-full px-4 lg:px-16">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>
              <Title xl center>
                {t("skills.title")}
              </Title>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, i) => (
                <Skill key={i} {...skill} light />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
