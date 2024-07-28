import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "~/components/ui/scroll-area";

export const AboutMeCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Card className={"h-[38rem]"}>
      <CardHeader>
        <CardTitle>{t("profile.fullname")}</CardTitle>
        <CardDescription>{t("profile.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className={"h-[32rem] p-4"}>
          <div className={"flex flex-col gap-6 items-center"}>
            {(
              (t("profile.who.description", {
                returnObjects: true,
              }) as Array<string>) ?? []
            ).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
