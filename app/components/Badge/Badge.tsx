import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Badge: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="rounded-xl bg-accent text-accent-content px-2 text-sm cursor-default">
        {children}
      </div>
    </>
  );
};

Badge.defaultProps = {};

export default Badge;
