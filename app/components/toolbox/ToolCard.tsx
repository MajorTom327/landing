import { PropsWithChildren } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { Trans, useTranslation } from "react-i18next";

type ToolLevel = "Advanced" | "Intermediate" | "Beginner";

type Props = PropsWithChildren<{
  duration?: string;
  large?: boolean;
  label: string;
  icon?: React.ReactNode;
  level: ToolLevel;
}>;
export const ToolCard: React.FC<Props> = ({
  children,
  label,
  level,
  large,
  icon,
}) => {
  const { t } = useTranslation();
  return (
    <Card
      className={cn("transition hover:bg-secondary", {
        "sm:col-span-2": large,
      })}
    >
      <CardHeader className={cn("")}>
        <CardTitle className={cn("flex gap-2 items-center")}>
          {icon && <div className={""}>{icon}</div>}
          <div>{t(label)}</div>
        </CardTitle>
        <CardDescription>{level}</CardDescription>
      </CardHeader>
      <CardContent className={""}>
        <Trans>{children}</Trans>
      </CardContent>
    </Card>
  );
};
