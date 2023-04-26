import React from "react";

type Props = {
  children: React.ReactNode;
};

export const CodeMockup: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="bg-slate-700 text-slate-300 overflow-y-auto">
        <div className="flex flex-col p-4">{children}</div>
      </div>
    </>
  );
};

CodeMockup.defaultProps = {};

export default CodeMockup;
