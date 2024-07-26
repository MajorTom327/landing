import { motion } from "framer-motion";
import { PropsWithChildren, useCallback } from "react";
import { cn } from "~/lib/utils";
import { ChevronRight } from "lucide-react";
import {
  ProfileRoutes,
  useProfileStore,
} from "~/components/profile/profile-store";
import { Button } from "~/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

type MenuItemProps = PropsWithChildren<{
  to: ProfileRoutes;
}>;

const MenuItem: React.FC<MenuItemProps> = ({ children, to }) => {
  const { menu, navigate } = useProfileStore((state) => state);
  const onClickHandle = useCallback(() => {
    navigate(to);
  }, [navigate, to]);

  const isActive = to === menu;
  return (
    <motion.li variants={item}>
      <Button
        variant={"ghost"}
        onClick={onClickHandle}
        className={cn(
          "p-2 flex flex-col rounded group items-center w-full overflow-hidden cursor-pointer",
          "transition relative text-wrap text-left",
          {
            "text-secondary-foreground": isActive,
            "hover:bg-primary/50": !isActive
          }
        )}
      >
        <div className="flex w-full justify-between items-center z-10">
          <span>{children}</span>
          <ChevronRight className="opacity-20 group-hover:opacity-100 transition hidden sm:block" />
        </div>

        {isActive && (
          <motion.div
            layout
            className={
              "absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500"
            }
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
          />
        )}
      </Button>
    </motion.li>
  );
};

export const ProfileMenu: React.FC = () => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className={"flex flex-col justify-evenly gap-2 flex-wrap"}
    >
      <MenuItem to={"about-me"}>Who am I?</MenuItem>
      <MenuItem to={"about-work"}>What I do?</MenuItem>
      <MenuItem to={"my-values"}>What are my values?</MenuItem>
      <MenuItem to={"causes"}>Which causes are importants to me?</MenuItem>
    </motion.ul>
  );
};
