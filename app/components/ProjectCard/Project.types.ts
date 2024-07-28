import { z } from "zod";

export const ProjectSchema = z.object({
  label: z.string().min(1),
  description: z.array(z.string()).default([]),
  tech: z.array(z.string()).default([]),
  urls: z.object({
    repo: z.string().url().optional(),
    website: z.string().url().optional(),
  }),
});

export type Project = z.infer<typeof ProjectSchema>;
