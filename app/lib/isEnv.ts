import { pathEq } from "ramda";

export const isDevelopment = () => pathEq("development", ["env", "NODE_ENV"], process);
export const isProduction = () => pathEq("production", ["env", "NODE_ENV"], process);
