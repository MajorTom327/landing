import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { isNil } from "ramda";
import { useEffect } from "react";

import { SessionStore } from "~/services/session.server";

import { useToast } from "~/components/ui/use-toast";

import HomePage from "./HomePage";

type Toast = {
  message: string;
};

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
        <HomePage />
      </>
    );
  }

  return <Outlet />;
};

export default App;
