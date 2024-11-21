import { json } from "@remix-run/node";

export const loader = () => {
  return json({
    status: "healthy",
    buildDate: BUILD_DATE,
  });
};
