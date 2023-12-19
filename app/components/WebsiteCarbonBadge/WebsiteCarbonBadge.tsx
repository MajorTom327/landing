import React, { useEffect } from "react";

import { useEnvValue } from "~/hooks/useEnv";

const darkMode = true;
export const WebsiteCarbonBadge: React.FC = () => {
  const env = useEnvValue("NODE_ENV", "production");
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://unpkg.com/website-carbon-badges@^1/b.min.js";
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (env !== "production") {
    return null;
  }

  return (
    <div
      id="wcb"
      className={`wcb carbonbadge${darkMode ? ` wcb-d` : ""}`}
    ></div>
  );
};

export default WebsiteCarbonBadge;
