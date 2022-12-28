import { Link } from "@remix-run/react";
import classNames from "classnames";
import { identity } from "ramda";
import { isNotNilOrEmpty } from "ramda-adjunct";
import React from "react";

type Props = {
  to?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
};

export const Button: React.FC<Props> = ({
  to,
  onClick,
  children,
  disabled,
  type,
  className,
  loading,
}) => {
  const classes = classNames(
    "px-4 py-2 items-center justify-center rounded-md flex gap-2",
    {
      "bg-blue-500 hover:bg-blue-600 text-white": !disabled,
    },
    className
  );

  const isLink = isNotNilOrEmpty(to) && !disabled;

  if (isLink) {
    return (
      <Link className={classes} to={to!}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={classes}
      onClick={disabled ? identity : onClick}
    >
      {loading && (
        <div className="animate-spin border-l border-r rounded-full h-6 w-6"></div>
      )}
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
