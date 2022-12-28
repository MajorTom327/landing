import classNames from "classnames";
import React, { useId } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  type?: "text" | "email" | "textarea";
  name: string;
  label: string;
};

export const Input: React.FC<Props> = ({ type, name, label }) => {
  const { t } = useTranslation();
  const id = useId();

  const classes = classNames(
    "border-neutral-darken rounded-lg resize-none ",
    "focus:outline-none focus:ring focus:ring-neutral-darken focus:border-neutral-darken"
  );
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor={id}>{t(label)}</label>
        {type === "textarea" ? (
          <textarea rows={4} id={id} name={name} className={classes} />
        ) : (
          <input id={id} type={type} name={name} className={classes} />
        )}
      </div>
    </>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
