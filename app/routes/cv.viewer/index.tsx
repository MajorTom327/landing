import React from "react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { PDFViewer } from "@react-pdf/renderer";
import CvDocument from "./CvDocument";
import { ClientOnly } from "remix-utils";

type LoaderData = {};

export const loader: LoaderFunction = async ({ request }) => {
  return null;
};

export let handle = {
  i18n: "cv",
};

export const CvViewer = () => {
  return (
    <div>
      <ClientOnly>
        {() => (
          <div className="w-full h-full flex">
            <PDFViewer
              className="w-full "
              style={{ minHeight: "calc(100vh - 96px)" }}
            >
              <CvDocument />
            </PDFViewer>
          </div>
        )}
      </ClientOnly>
    </div>
  );
};

export const action: ActionFunction = async ({ request }) => {
  return null;
};

export default CvViewer;
