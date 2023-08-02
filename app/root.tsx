import type { LoaderFunction, V2_MetaFunction } from "@vercel/remix";
import { json } from "@vercel/remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";
import Layout from "~/components/Layout";

import { useTranslation } from "react-i18next";
import i18next from "~/services/i18n.server";

import styles from "./styles/app.css";

import {
  AuthenticityTokenProvider,
  createAuthenticityToken,
} from "remix-utils";
import { sessionStorage } from "~/services/session.server";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import ErrorView from "./components/ErrorView";
import getImageUrl from "./lib/getImageUrl";

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

export const meta: V2_MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { title: "Valentin Thomas" },
    {
      name: "description",
      content:
        "Valentin THOMAS is a developper and here you can find his experiences and his CV",
    },

    { property: "og:type", content: "website" },
    { property: "og:title", content: "Valentin Thomas" },
    { property: "og:image", content: getImageUrl("/valentin-thomas.png") },
    { property: "og:url", content: "https://valentin-thomas.com" },
    { property: "og:site_name", content: "Valentin Thomas" },
    {
      property: "og:description",
      content: `You're looking for a senior fullstack developper ? Maybe it's me, take a look at my CV and my experiences to know more about me.`,
    },
  ];
};

type EnvironmentData = {
  NODE_ENV: string;
  VERCEL_ANALYTICS_ID: string;
};

type LoaderData = {
  locale: string;
  csrf: string;
  ENV: EnvironmentData;
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
      ENV: {
        NODE_ENV: process.env.NODE_ENV,
        VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID!,
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
  let { locale, csrf, ENV } = useLoaderData<LoaderData>() || { locale: "fr" };
  let { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);

  return (
    <html lang={locale} dir={"ltr"}>
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
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
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

export const ErrorBoundary = () => <ErrorView />;
