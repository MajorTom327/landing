import { PropsWithChildren } from "react";
import { NavLink } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useIsNavLinkActive } from "~/hooks/useIsNavLinkActive";

type Props = PropsWithChildren<{
  to: string;
  end?: boolean;
}>;

export const NavbarItem: React.FC<Props> = ({ children, to, end }) => {
  const isActive = useIsNavLinkActive({ to, end });
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(
            "py-2 px-4 transition rounded justify-center",
            "hover:bg-secondary/90",
            "flex flex-col",
            {
              "bg-primary text-primary-foreground hover:bg-primary/90":
                isActive,
            }
          )
        }
      >
        {children}
        <AnimatePresence>
          {isActive && (
            <>
              <motion.div
                className={"border-b-2 rounded border-primary-foreground/25"}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </>
          )}
        </AnimatePresence>
      </NavLink>
    </>
  );
};
