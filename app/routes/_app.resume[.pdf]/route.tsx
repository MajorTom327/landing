import type { LoaderFunctionArgs } from "@remix-run/node";
import { pdf } from "remix-utils/responses";

// import resume from "~/assets/resume.pdf";
import ErrorHandler from "~/components/ErrorHandler";

// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   return pdf(resume);
// };

export default () => {
  return <>NO PDF FOR NOW</>;
};

export const ErrorBoundary = ErrorHandler;
