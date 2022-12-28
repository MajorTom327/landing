import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useTransition } from "@remix-run/react";
import { isNilOrEmpty, isNotNil } from "ramda-adjunct";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthenticityTokenInput, verifyAuthenticityToken } from "remix-utils";
import Alert from "~/components/Alert";
import Button from "~/components/Button";
import Input from "~/components/Input/Input";
import mailer from "~/services/mailer.server";
import { sessionStorage } from "~/services/session.server";

type Props = {};

export const Index: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  const transition = useTransition();
  const [hasSubmited, setHasSubmited] = useState(false);

  useEffect(() => {
    const submission = transition.submission;
    if (isNotNil(submission) && hasSubmited === false) {
      setHasSubmited(true);
    }
  }, [transition.submission, hasSubmited]);

  return (
    <>
      <div className="flex items-center justify-center w-full my-8 px-2">
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
            <AuthenticityTokenInput />
            <Input name="name" label="contact.name" required />
            <Input name="subject" label="contact.subject" required />
            <Input type="email" name="email" label="contact.email" required />
            <Input
              type="textarea"
              name="message"
              label="contact.message"
              required
            />

            {hasSubmited && <Alert>{t("contact.submited")}</Alert>}

            <div className="mt-8">
              <Button
                className="w-full rounded"
                type="submit"
                disabled={isNotNil(transition.submission)}
                loading={isNotNil(transition.submission)}
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
  const formData = await request.clone().formData();

  let session = await sessionStorage.getSession(request.headers.get("Cookie"));
  await verifyAuthenticityToken(request, session);

  const name = formData.get("name")?.toString();
  const subject = formData.get("subject")?.toString();
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();

  if ([name, subject, email, message].some((value) => isNilOrEmpty(value))) {
    return redirect("/contact");
  }

  // @ts-ignore
  mailer.contact({ name, subject, email, message });

  return null;
};

Index.defaultProps = {};

export default Index;
