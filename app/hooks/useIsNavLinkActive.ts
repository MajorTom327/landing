import { useLocation } from "@remix-run/react";

type UseIsNavLinkActiveOptions = {
  to: string;
  end?: boolean;
};
export const useIsNavLinkActive = (options: UseIsNavLinkActiveOptions) => {
  const location = useLocation();

  const isActive = options.end
    ? location.pathname === options.to
    : location.pathname.startsWith(options.to);

  return isActive;
};
