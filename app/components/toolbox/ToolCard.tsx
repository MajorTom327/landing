import { PropsWithChildren } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";

type ToolLevel = "Advanced" | "Intermediate" | "Beginner";

type Props = PropsWithChildren<{
  duration?: string;
  large?: boolean;
  label: string;
  level: ToolLevel;
}>;
export const ToolCard: React.FC<Props> = ({
  children,
  label,
  level,
  large,
}) => {
  return (
    <Card
      className={cn("transition hover:bg-secondary", {
        "col-span-2": large,
      })}
    >
      <CardHeader className={cn(" text-center")}>
        <CardTitle>{label}</CardTitle>
        <CardDescription>{level}</CardDescription>
      </CardHeader>
      <CardContent className={""}>{children}</CardContent>
    </Card>
  );
};
