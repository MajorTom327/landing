import React from "react";
import { Document } from "@react-pdf/renderer";
import Page1 from "./Page1";
import { useTranslation } from "react-i18next";
import type CvPart from "~/refs/CvPart";

type Props = {
  hidePart: Array<CvPart>;
};

export const CvDocument: React.FC<Props> = ({ hidePart }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <Document
        title="CV Valentin THOMAS"
        author="Valentin THOMAS"
        language={i18n.language}
        // language={"FR"}
        creator="Valentin THOMAS"
        producer="Valentin THOMAS"
      >
        <Page1 hidePart={hidePart} />
      </Document>
    </>
  );
};

CvDocument.defaultProps = {};

export default CvDocument;
