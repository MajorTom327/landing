import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const TheCausesCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>The causes I believe in</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        assumenda commodi dolore hic iste labore magnam sunt tempore veritatis.
        Animi asperiores commodi culpa cupiditate deserunt iste, libero officiis
        sequi veritatis.
      </CardContent>
    </Card>
  );
};
