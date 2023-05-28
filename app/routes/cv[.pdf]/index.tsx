import { renderToBuffer } from "@react-pdf/renderer";
import type { LoaderFunction } from "@remix-run/node";
import CvDocument from "./CvDocument";
import { pdf } from "remix-utils";

export const loader: LoaderFunction = async () => {
  const pdfFile = await renderToBuffer(<CvDocument />);

  return pdf(pdfFile);
};
