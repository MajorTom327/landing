import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";
import { SpaCauseCard } from "~/components/profile/cards/Causes/Spa";
import { Trans } from "react-i18next";
import { RestoDuCoeur, Separator } from "~/components";

const CauseCard: React.FC<{
  cause: string;
}> = ({ cause }) => {
  return <>div.flex.</>;
};

export const TheCausesCard: React.FC = () => {
  return (
    <Card className={"h-[38rem]"}>
      <CardHeader>
        <CardTitle>
          <Trans>profile.causes.label</Trans>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className={"h-[32rem] p-4"}>
          <div className={"flex flex-col gap-6 pb-6"}>
            <SpaCauseCard />
            <Separator />
            <RestoDuCoeur />
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
