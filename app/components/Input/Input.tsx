import classNames from "classnames";
import { Asterisk } from "lucide-react";
import React, { useId } from "react";
import { useRemixFormContext } from "remix-hook-form";
import { match } from "ts-pattern";

import { useTranslation } from "~/hooks/useTranslation";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export type InputProps = Omit<
  {
    addon?: React.ReactNode;
    label: string;
  } & React.HTMLProps<HTMLInputElement | HTMLTextAreaElement>,
  "ref"
>;

export const BaseInput: React.FC<InputProps> = ({ addon, label, ...props }) => {
  const id = useId();
  const { register, getFieldState } = useRemixFormContext();
  const { t } = useTranslation();

  const fieldstate = getFieldState(props.name!);

  const inputProps = {
    placeholder: t(props.placeholder ?? label),
    id,
    className: classNames("px-2 py-2 rounded-lg w-full flex-grow", {
      "invalid:border-destructive invalid:bg-destructive-50 invalid:text-destructive":
        fieldstate.isTouched,
    }),
    ...props,
    ...register(props.name!, {
      required: props.required,
    }),
  };

  const input = match(props.type)
    .with("textarea", () => <Textarea {...inputProps} rows={5} />)
    .otherwise(() => <Input {...inputProps} />);

  return (
    <>
      <div className="flex flex-col gap-1">
        <Label htmlFor={id} className="flex gap-2 items-center mt-2">
          {t(label)}
          {props.required && (
            <span className="text-destructive">
              <Asterisk />
            </span>
          )}
        </Label>
        {addon ? (
          <div className="w-full flex gap-1">
            {input}
            {addon && <div className="flex-shrink">{addon}</div>}
          </div>
        ) : (
          input
        )}
      </div>
    </>
  );
};

BaseInput.defaultProps = {};

export default BaseInput;
