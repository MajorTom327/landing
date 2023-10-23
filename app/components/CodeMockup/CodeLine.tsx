import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const CodeLine: React.FC<Props> = ({ children, className }) => {
  const classes = classNames("flex gap-2", className);
  return <pre className={classes}>{children}</pre>;
};

CodeLine.defaultProps = {};

export default CodeLine;
