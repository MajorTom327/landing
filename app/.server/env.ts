import { z } from "zod";
import configure from "env-refiner";

const publicSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  APP_URL: z.string().default("https://www.valentin-thomas.com"),
});

const schema = z.object({}).merge(publicSchema);

export const env = configure({
  schema,
  publicSchema,
});
