import type { LoaderFunctionArgs } from "@remix-run/node";
import { flatten } from "ramda";
import { xml } from "remix-utils/responses";
import projects from "~/data/projects";

import { isDevelopment } from "~/lib/env.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const routes = flatten([
    "/",
    "/cause/spa",
    "/cause/resto",
    "/cause/privacy",
    "/projects",
    projects.map((project) => `/projects/${project.key}`),
    "/resume",
    "/resume.pdf",
  ]);

  const dateContent = isDevelopment() ? new Date().toISOString() : BUILD_DATE;

  const xmlContent = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...routes.map(
      (route) =>
        `<url><loc>https://valentin-thomas.com${route}</loc><lastmod>${dateContent}</lastmod></url>`
    ),
    `</urlset>`,
  ];

  return xml(xmlContent.join(""), {});
};
