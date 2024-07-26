import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const NavbarMenu: React.FC<Props> = ({ children }) => {
  return <div className={"flex gap-2"}>{children}</div>;
};
