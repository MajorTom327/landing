import { ArrowBigUp } from "lucide-react";
import React from "react";

import { useTranslation } from "~/hooks/useTranslation";

import { Button } from "../ui/button";

type Props = {
  to: string;
  label: string;
  shiny?: boolean;
};

export const NavbarItem: React.FC<Props> = ({ to, label, shiny }) => {
  const { t } = useTranslation();

  return (
    <>
      <Button
        variant="ghost"
        to={to}
        className={
          shiny
            ? "motion-safe:animate-[pulse_5s_ease-in-out_infinite] flex"
            : undefined
        }
      >
        {t(label)}
        {/* {shiny && <ShinyAction />} */}
      </Button>
    </>
  );
};

NavbarItem.defaultProps = {};

export default NavbarItem;
