import { zodResolver } from "@hookform/resolvers/zod";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { isNilOrEmpty, isNotNil } from "ramda-adjunct";
import React, { useEffect, useState } from "react";
import {
  RemixFormProvider,
  getValidatedFormData,
  useRemixForm,
} from "remix-hook-form";
import zod from "zod";

import mailer from "~/services/mailer.server";
import { sessionStorage } from "~/services/session.server";

import Alert from "~/components/Alert";
import Button from "~/components/Button";
import ErrorView from "~/components/ErrorView";
import Input from "~/components/Input/Input";

import { useTranslation } from "~/hooks/useTranslation";

type Props = {};

type LoaderData = {
  captcha: string;
};

const schema = zod.object({
  name: zod.string().min(1),
  subject: zod.string().min(1),
  email: zod.string().email().min(1),
  message: zod.string().min(1).max(2000),

  captcha: zod.string().min(1),
});

type FormData = zod.infer<typeof schema>;

const resolver = zodResolver(schema);

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
  const navigation = useNavigation();

  const form = useRemixForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
      captcha: "",
    },
    resolver,
  });

  const [hasSubmited, setHasSubmited] = useState(false);
  const { captcha } = useLoaderData<LoaderData>();

  useEffect(() => {
    const submission = navigation.formData;
    if (isNotNil(submission) && hasSubmited === false) {
      setHasSubmited(true);
    }
  }, [navigation, hasSubmited]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full my-8 px-2">
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
          <RemixFormProvider {...form}>
            <Form
              onSubmit={form.handleSubmit}
              className="flex flex-col text-left mt-8 gap-4"
            >
              <Input label="contact.name" name="name" required />
              <Input label="contact.subject" name="subject" required />
              <Input type="email" label="contact.email" name="email" required />
              <Input
                type="textarea"
                label="contact.message"
                name="message"
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
                  label="contact.captcha"
                  name="captcha"
                  required
                />
              </div>

              {hasSubmited && <Alert>{t("contact.submited")}</Alert>}

              <div className="mt-8">
                <Button
                  className="w-full rounded"
                  type="submit"
                  // disabled={isNotNil(transition.submission)}
                  // loading={isNotNil(transition.submission)}
                >
                  {t("contact.send")}
                </Button>
              </div>
            </Form>
          </RemixFormProvider>
        </div>
      </div>
    </>
  );
};

export const ErrorBoundary = () => <ErrorView />;

export const action: ActionFunction = async ({ request }) => {
  let session = await sessionStorage.getSession(request.headers.get("Cookie"));

  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<FormData>(request, resolver);

  if (errors || !data) {
    // The keys "errors" and "defaultValue" are picked up automatically by useRemixForm
    return json({ errors, defaultValues });
  }

  const { name, subject, email, message } = data;

  if (data.captcha !== session.get("captcha")) {
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
