import React from "react";

type Props = {
  children: React.ReactNode[];
};

export const NavbarMenu: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex gap-2">{children}</div>
    </>
  );
};

NavbarMenu.defaultProps = {};

export default NavbarMenu;
