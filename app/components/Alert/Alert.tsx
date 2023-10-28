import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Alert: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex rounded bg-accent text-accent-lighten p-2 gap-2 items-center">
        <div></div>
        <div>{children}</div>
      </div>
    </>
  );
};

Alert.defaultProps = {};

export default Alert;
