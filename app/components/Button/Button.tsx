import { Link } from "@remix-run/react";
import classNames from "classnames";
import { identity } from "ramda";
import { isNotNilOrEmpty } from "ramda-adjunct";
import React from "react";

type Props = {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({
  to,
  onClick,
  children,
  disabled,
}) => {
  const classes = classNames("px-4 py-2", {
    "bg-blue-500 hover:bg-blue-600 text-white": !disabled,
  });

  const isLink = isNotNilOrEmpty(to) && !disabled;

  if (isLink) {
    return (
      <Link className={classes} to={to!}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} onClick={disabled ? identity : onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {};

export default Button;
