import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { useTranslation } from "react-i18next";
import { Separator } from "~/components";
import { ScrollArea } from "~/components/ui/scroll-area";

const ValueGroup: React.FC<{
  value: string;
}> = ({ value }) => {
  const { t } = useTranslation();

  return (
    <div className={"flex flex-col gap-2 w-full"}>
      <div className="text-xl text-center">{t(`${value}.label`)}</div>

      {(
        t(`${value}.description`, {
          returnObjects: true,
        }) as string[]
      ).map((paragraph) => (
        <p className={"text-justify"} key={paragraph}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export const MyValuesCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card className={"h-[38rem]"}>
      <CardHeader>
        <CardTitle>{t("profile.values.label")}</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className={"h-[32rem] p-4"}>
          <div className={"flex flex-col gap-6 items-center"}>
            <ValueGroup value={"profile.values.openness"} />
            <Separator />
            <ValueGroup value={"profile.values.quality"} />
            <Separator />
            <ValueGroup value={"profile.values.creativity"} />
            <Separator />
            <ValueGroup value={"profile.values.honesty"} />
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
