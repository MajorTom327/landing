import { pathEq } from 'ramda';

export const isDevelopment = () => pathEq(['env', 'NODE_ENV'], 'development', process);
export const isProduction = () => pathEq(['env', 'NODE_ENV'], 'production', process);
