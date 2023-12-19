import React from "react";

type Props = {
  children: React.ReactNode;
};

export const DarkBlock: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-full px-4 py-6 justify-center  text-primary-content relative before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-primary before:shadow-lg">
        {children}
      </div>
    </>
  );
};

DarkBlock.defaultProps = {};

export default DarkBlock;
