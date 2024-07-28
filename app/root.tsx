import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";
import { Navbar, NavbarItem, NavbarMenu } from "~/components/navbar";
import { MotionConfig } from "framer-motion";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  always,
  compose,
  defaultTo,
  filter,
  head,
  includes,
  isEmpty,
  map,
  split,
  when,
} from "rambda";
import { honeypot } from "~/.server/honeypot";
import { HoneypotProvider } from "remix-utils/honeypot/react";
import { useTranslation } from "react-i18next";
import { Footer } from "~/components/footer";
import { env } from "~/.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Valentin Thomas" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const acceptedLocales = ["en", "fr"];

export const loader: LoaderFunction = ({ request }) => {
  // @ts-expect-error Ramda shitty types
  const locale: Locale = compose(
    head,
    when(isEmpty, always(["en"])),
    filter((locale: string) => includes(locale, acceptedLocales)), // Filter out locales that are not accepted
    map(compose(head, split("-"))), // Clean up locale to only get the language not the region
    split(","), // Handle multiple languages
    defaultTo("en-US") // Handle header doesn't exist
  )(request.headers.get("accept-language"));

  const result = {
    env: env.getPublicEnv(),
    locale,
    honeypotInputProps: honeypot.getInputProps(),
  };

  return result;
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MotionConfig reducedMotion="user">
          <div className="flex gap justify-between">
            <Navbar>
              <NavbarMenu>
                <NavbarItem to={"/"} end>
                  {t("profile.fullname")}
                </NavbarItem>
              </NavbarMenu>
              <NavbarMenu>
                <NavbarItem to={"/projects"}>My projects</NavbarItem>
                <NavbarItem to={"/resume"}>My resume</NavbarItem>
                <NavbarItem to={"/contact"}>Contact me</NavbarItem>
              </NavbarMenu>
            </Navbar>
          </div>
          <div className="flex flex-col gap-2 mx-4 sm:mx-auto md:w-9/10 lg:w-8/10 my-2">
            {children}
          </div>
          <Footer />
        </MotionConfig>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <HoneypotProvider {...data.honeypotInputProps}>
      <Outlet />
    </HoneypotProvider>
  );
}
