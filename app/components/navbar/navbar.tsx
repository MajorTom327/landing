import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex gap-2 justify-between w-full px-4 border-b-2 py-2 z-100 bg-background">
        {children}
      </div>
    </>
  );
};
