import type { ActionFunction } from "@remix-run/node";
import { Form, useTransition } from "@remix-run/react";
import React from "react";
import { useTranslation } from "react-i18next";
import Button from "~/components/Button";
import Input from "~/components/Input/Input";

type Props = {};

export const Index: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  const { state } = useTransition();

  const hasSubmitted = state === "loading";

  return (
    <>
      <div className="flex items-center justify-center w-full my-8">
        <div className="shadow-lg rounded-xl border border-gray-200 p-4 text-center gap-4">
          <div className="text-4xl font-bold">{t("contact.title")}</div>
          <div className="text-gray-500">
            <p className="justify">{t("contact.description")}</p>
            <p>
              <a
                href="mailto:me@valentin-thomas.com"
                className="text-secondary hover:underline"
              >
                me@valentin-thomas.com
              </a>
            </p>
          </div>
          <Form method="post" className="flex flex-col text-left mt-8 gap-4">
            <Input name="name" label="contact.name" />
            <Input name="subject" label="contact.subject" />
            <Input type="email" name="email" label="contact.email" />
            <Input type="textarea" name="message" label="contact.message" />

            <div className="mt-8">
              <Button
                className="w-full rounded"
                type="submit"
                disabled={["loading", "submitting"].includes(state)}
                loading={state === "loading"}
              >
                {t("contact.send")}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const subject = formData.get("subject");
  const email = formData.get("email");
  const message = formData.get("message");

  const body = JSON.stringify({
    name,
    subject,
    email,
    message,
  });

  return null;
};

Index.defaultProps = {};

export default Index;
