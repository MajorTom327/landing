import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { isNil } from "ramda";
import { useEffect } from "react";

import { SessionStore } from "~/services/session.server";

import ActorHero from "~/components/ActorHero";
import CauseThatMatter from "~/components/CauseThatMatter";
import Divider from "~/components/Divider";
// import ErrorHandler from "~/components/ErrorHandler";
import MyValues from "~/components/MyValues";
import { useToast } from "~/components/ui/use-toast";

import SomeProject from "./SomeProject";

type Toast = {
  message: string;
};

export const config = { runtime: "edge" };

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await new SessionStore(request).load();

  const toast = session.get<Toast>("toast");

  return json(
    {
      toast,
    },
    {
      headers: await session.withCookieHeader({}),
    }
  );
};

export const App = () => {
  const { toast } = useLoaderData<typeof loader>();
  const { pathname } = useLocation();
  const toaster = useToast();

  useEffect(() => {
    if (isNil(toast)) return;

    const { message } = toast;

    toaster.toast({
      title: message,
    });
  }, [toast, toaster]);

  if (pathname.startsWith("/cause") || pathname === "/") {
    return (
      <>
        <ActorHero />

        <div className="flex flex-col gap-4 py-8">
          <CauseThatMatter />
          <div className="container mx-auto">
            <Divider />
          </div>

          <MyValues />

          <div className="container mx-auto">
            <Divider />
          </div>

          <SomeProject />
        </div>
      </>
    );
  }

  return <Outlet />;
};

export default App;
