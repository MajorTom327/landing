import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";

export const AboutWorkCard: React.FC = () => {
  return (
    <Card className={"h-[38rem]"}>
      <CardHeader>
        <CardTitle>About work</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className={"h-[32rem] p-4"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          assumenda commodi dolore hic iste labore magnam sunt tempore
          veritatis. Animi asperiores commodi culpa cupiditate deserunt iste,
          libero officiis sequi veritatis.
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
