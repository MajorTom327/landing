import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";
import Layout from "./components/Layout";

import { useTranslation } from "react-i18next";
import i18next from "~/services/i18n.server";

import styles from "./styles/app.css";

import {
  AuthenticityTokenProvider,
  createAuthenticityToken,
} from "remix-utils";
import { sessionStorage } from "~/services/session.server";
import { useEffect } from "react";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Valentin Thomas",
  viewport: "width=device-width,initial-scale=1",
  description:
    "Valentin THOMAS is a developper and here you can find his experiences and his CV",
});

type EnvironmentData = {
  NODE_ENV: string;
};

type LoaderData = {
  locale: string;
  csrf: string;
  environment: EnvironmentData;
};

type BasePageProps = {
  children: React.ReactNode;
};

export const loader: LoaderFunction = async ({ request }) => {
  const locale = await i18next.getLocale(request);

  const session = await sessionStorage.getSession(
    request.headers.get("cookie")
  );

  let token = createAuthenticityToken(session);

  return json<LoaderData>(
    {
      locale,
      csrf: token,
      environment: {
        NODE_ENV: process.env.NODE_ENV,
      },
    },
    {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(session),
      },
    }
  );
};

export let handle = {
  i18n: "translation",
};

export const BasePage: React.FC<BasePageProps> = ({ children }) => {
  let { locale, csrf } = useLoaderData<LoaderData>() || { locale: "fr" };
  let { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-neutral text-neutral-content">
        <AuthenticityTokenProvider token={csrf}>
          <Layout>{children}</Layout>
          {/* <ScrollRestoration /> */}
          <Scripts />
          <LiveReload />
        </AuthenticityTokenProvider>
      </body>
    </html>
  );
};

export default function App() {
  return (
    <BasePage>
      <Outlet />
    </BasePage>
  );
}
