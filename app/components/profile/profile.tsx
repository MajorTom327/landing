import { Card, CardContent } from "~/components/ui/card";
import { ProfileMenu } from "~/components/profile/profile-menu";
import { AnimatePresence } from "framer-motion";
import { useProfileStore } from "~/components/profile/profile-store";
import { match } from "ts-pattern";
import {
  AboutMeCard,
  AboutWorkCard,
  MyValuesCard,
  TheCausesCard,
} from "~/components/profile/cards";

type Props = {};

export const Profile: React.FC<Props> = () => {
  const menu = useProfileStore((state) => state.menu);
  return (
    <>
      <div className="grid md:grid-cols-3 gap-2">
        <Card>
          <CardContent className="p-6">
            <AnimatePresence>
              <ProfileMenu />
            </AnimatePresence>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          {match(menu)
            .with("about-me", () => <AboutMeCard />)
            .with("about-work", () => <AboutWorkCard />)
            .with("my-values", () => <MyValuesCard />)
            .with("causes", () => <TheCausesCard />)
            .exhaustive()}
        </div>
      </div>
    </>
  );
};
