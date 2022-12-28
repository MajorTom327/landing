import { useTransition } from "@remix-run/react";
import classNames from "classnames";
import { isNotNil } from "ramda-adjunct";
import React, { useEffect, useId, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaAsterisk } from "react-icons/fa";

type Props = {
  type?: "text" | "email" | "textarea";
  name: string;
  label: string;
  required?: boolean;
};

export const Input: React.FC<Props> = ({ type, name, label, required }) => {
  const { t } = useTranslation();
  const id = useId();
  const ref = useRef(null);

  const classes = classNames(
    "border-neutral-darken rounded-lg resize-none ",
    "focus:outline-none focus:ring focus:ring-neutral-darken focus:border-neutral-darken"
  );

  const transition = useTransition();

  useEffect(() => {
    const submission = transition.submission;
    if (submission && isNotNil(ref.current)) {
      const current = ref.current! as HTMLInputElement;

      current.value = "";
    }
  }, [transition.submission]);

  return (
    <>
      <div className="flex flex-col gap-2 group">
        <label htmlFor={id} className="flex gap-2 items-center font-semibold ">
          <div>{t(label)}</div>
          {required && (
            <div className="text-red-400 group-hover:text-red-500 transition text-sm">
              <FaAsterisk />
            </div>
          )}
        </label>
        {type === "textarea" ? (
          <textarea
            rows={4}
            ref={ref}
            id={id}
            name={name}
            className={classes}
            defaultValue=""
            required={required}
          />
        ) : (
          <input
            ref={ref}
            id={id}
            type={type}
            name={name}
            className={classes}
            defaultValue=""
            required={required}
          />
        )}
      </div>
    </>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
