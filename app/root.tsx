// import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
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
import SessionStore from "./services/session.server";
import type { Locale } from "./types/refs";

export const links: LinksFunction = () => [
  // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
];

const acceptedLocales = ["en", "fr"];

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

            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </body>
        </VisionContext.Provider>
      </HoneypotProvider>
    </html>
  );
}
