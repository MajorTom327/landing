// import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import classNames from "classnames";
import { EyeOff } from "lucide-react";
import {
  always,
  compose,
  defaultTo,
  filter,
  head,
  includes,
  isEmpty,
  map,
  not,
  split,
  when,
} from "ramda";
import { useState } from "react";
import { HoneypotProvider } from "remix-utils/honeypot/react";
import stylesheet from "~/tailwind.css";

import { honeypot } from "~/services/honeypot.server";

import Layout from "./components/Layout";
import Footer from "./components/Layout/Footer";
import MusicPlayer from "./components/MusicPlayer";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/toaster";
import { VisionContext } from "./context/visionContext";
import { getPublicEnv } from "./lib/env.server";
import getImageUrl from "./lib/getImageUrl";
import SessionStore from "./services/session.server";
import type { Locale } from "./types/refs";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
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

const acceptedLocales = ["en", "fr"];

export const meta: MetaFunction = () => {
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

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await new SessionStore(request).load();
  const env = getPublicEnv();

  // @ts-expect-error Ramda shitty types
  const locale: Locale = compose(
    head,
    when(isEmpty, always(["en"])),
    filter((locale: string) => includes(locale, acceptedLocales)), // Filter out locales that are not accepted
    map(compose(head, split("-"))), // Clean up locale to only get the language not the region
    split(","), // Handle multiple languages
    defaultTo("en-US") // Handle header doesn't exist
  )(request.headers.get("accept-language"));

  const csrf = session.getCsrfToken();

  return json(
    {
      csrf,
      env,
      locale,
      honeypotInputProps: honeypot.getInputProps(),
    },
    {
      headers: await session.withCookieHeader({}),
    }
  );
};

export default function App() {
  const { env, locale, honeypotInputProps } = useLoaderData<typeof loader>();
  const [isDeficitVision, setIsDeficitVision] = useState(false);

  const bodyClasses = classNames(
    "bg-neutral text-neutral-content transition-all",
    {
      "tracking-wider !uppercase": isDeficitVision,
    }
  );

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <HoneypotProvider {...honeypotInputProps}>
        <VisionContext.Provider value={isDeficitVision}>
          <body className={bodyClasses}>
            <Layout
              nav={
                <Navbar>
                  <div className="flex gap-2 items-center">
                    <Navbar.Brand>
                      <Button color="ghost" to="/">
                        {env.APP_NAME}
                      </Button>
                    </Navbar.Brand>
                  </div>

                  <MusicPlayer />

                  <div className="flex gap-2 items-center">
                    <Navbar.Menu>
                      <Navbar.Item to="/projects" label="menu.project" />
                      <Navbar.Item to="/resume" label="menu.cv" />
                      <Navbar.Item to="/contact" label="menu.contact" />
                    </Navbar.Menu>
                    <Button
                      size={"icon"}
                      onClick={() => setIsDeficitVision(not)}
                    >
                      <EyeOff />
                    </Button>
                  </div>
                </Navbar>
              }
              footer={<Footer />}
            >
              <Outlet />
            </Layout>

            <Toaster />
            <Analytics />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.ENV = ${JSON.stringify(env)}`,
              }}
            />
          </body>
        </VisionContext.Provider>
      </HoneypotProvider>
    </html>
  );
}
