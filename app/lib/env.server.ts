import { v4 as uuid } from "uuid";
import zod from "zod";

export const publicEnvSchema = zod.object({
  NODE_ENV: zod.enum(["development", "production", "test"]),
  APP_NAME: zod.string().default("Valentin Thomas"),
  APP_URL: zod.string().default("https://www.valentin-thomas.com"),
  COOLIFY_URL: zod
    .string()
    .optional()
    .default("https://www.valentin-thomas.com"),
});

export const envSchema = zod
  .object({
    MAILER_FROM: zod
      .string()
      .email()
      .default("Landing <landing@mail.styx-sys.com>"),
    MAILER_TO: zod
      .string()
      .email()
      .default("Valentin Thomas <contact@valentin-thomas.com>"),
    APP_KEY: zod.string().default(uuid()),
    SESSION_SECRET: zod.string().uuid().default(uuid()),
  })
  .merge(publicEnvSchema);

export type IEnvVars = zod.infer<typeof envSchema>;

export const getEnv = (key: keyof IEnvVars, defaultValue: any = undefined) => {
  const env = envSchema.parse(process.env);

  const value = env[key];
  return value || defaultValue;
};

/**
 * A tool utility function to get all the public environment variables.
 * @returns A record of all the environment variable that are public.
 */
export const getPublicEnv = () => {
  return publicEnvSchema.parse(process.env);
};

export const isProduction = () => getEnv("NODE_ENV") === "production";
export const isDevelopment = () => getEnv("NODE_ENV") === "development";
export const isTest = () => getEnv("NODE_ENV") === "test";
