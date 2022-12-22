import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  xl?: boolean;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
};

export const Title: React.FC<Props> = ({
  children,
  className,
  xl,
  lg,
  md,
  sm,
}) => {
  const classes = classNames(
    "font-semibold",
    {
      "text-4xl": xl,
      "text-3xl": lg,
      "text-2xl": md,
      "text-xl": sm,
    },
    className
  );

  return (
    <>
      <h1 className={classes}>{children}</h1>
    </>
  );
};

Title.defaultProps = {};

export default Title;
