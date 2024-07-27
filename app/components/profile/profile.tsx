import { Card, CardContent } from "~/components/ui/card";
import { ProfileMenu } from "~/components/profile/profile-menu";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useProfileStore } from "~/components/profile/profile-store";
import { match } from "ts-pattern";
import {
  AboutMeCard,
  AboutWorkCard,
  MyValuesCard,
  TheCausesCard,
} from "~/components/profile/cards";

type Props = {};

const cardProfileAnimationProps: MotionProps = {
  // initial: { opacity: 0 },
  // animate: { opacity: 1 },
  // exit: { opacity: 0 },

  initial: { y: 300, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -300, opacity: 0 },
};

export const Profile: React.FC<Props> = () => {
  const menu = useProfileStore((state) => state.menu);
  return (
    <>
      <div className="grid md:grid-cols-3 gap-2 min-h-[38rem]">
        <Card>
          <CardContent className="p-6">
            <AnimatePresence>
              <ProfileMenu />
            </AnimatePresence>
          </CardContent>
        </Card>

        <div className="md:col-span-2 flex flex-col gap-2 relative h-full">
          <AnimatePresence initial={false} custom={{ mode: "wait" }}>
            <motion.div
              key={menu}
              {...cardProfileAnimationProps}
              className="absolute h-full"
            >
              {match(menu)
                .with("about-me", () => <AboutMeCard />)
                .with("about-work", () => <AboutWorkCard />)
                .with("my-values", () => <MyValuesCard />)
                .with("causes", () => <TheCausesCard />)
                .exhaustive()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
