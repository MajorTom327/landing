import type { ActionFunction, LoaderFunction } from "@vercel/remix";
import { redirect } from "@vercel/remix";
import { json } from "@vercel/remix";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
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

type LoaderData = {
  captcha: string;
};

const generateCaptcha = () => {
  return [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .join("");
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const captcha = generateCaptcha();

  session.set("captcha", captcha);

  return json<LoaderData>(
    { captcha },
    {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(session),
      },
    }
  );
};

export const Index: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  const transition = useTransition();
  const [hasSubmited, setHasSubmited] = useState(false);
  const { captcha } = useLoaderData<LoaderData>();

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

            <div className="flex flex-col gap-1 py-4">
              <div className="">{t("contact.captcha_label")}</div>
              <div className="flex justify-center">
                <div className="text-center text-xl text-secondary font-semibold bg-slate-300 rounded px-4 py-2">
                  {captcha}
                </div>
              </div>
              <Input
                type="text"
                name="captcha"
                label="contact.captcha"
                required
              />
            </div>

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

  const captcha = formData.get("captcha")?.toString();
  if (captcha !== session.get("captcha")) {
    return redirect("/contact", 400);
  }

  if ([name, subject, email, message].some((value) => isNilOrEmpty(value))) {
    return redirect("/contact");
  }

  // @ts-ignore
  mailer.contact({ name, subject, email, message });

  return null;
};

Index.defaultProps = {};

export default Index;
