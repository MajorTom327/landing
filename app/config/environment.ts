import type { EnvConfiguration } from "~/lib/envCheck";

export const environment: EnvConfiguration = {
  required: {
    NODE_ENV: "Execution environnement",
    COOKIES_SECRET: "Secret for the cookies",
  },
  optional: {
  }
}

export default environment;
