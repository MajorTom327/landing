import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { Navbar, NavbarItem, NavbarMenu } from "~/components/navbar";
import { MotionConfig } from "framer-motion";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Valentin Thomas" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
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
                  Valentin Thomas
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
        </MotionConfig>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
