import React from "react";

import { useTranslation } from "~/hooks/useTranslation";

import { Button } from "../ui/button";

type Props = {
  to: string;
  label: string;
};

export const NavbarItem: React.FC<Props> = ({ to, label }) => {
  const { t } = useTranslation();

  return (
    <>
      <Button variant="ghost" to={to}>
        {t(label)}
      </Button>
    </>
  );
};

NavbarItem.defaultProps = {};

export default NavbarItem;
