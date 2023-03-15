import React from "react";
import { Document } from "@react-pdf/renderer";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { useTranslation } from "react-i18next";

type Props = {};

export const CvDocument: React.FC<Props> = ({}) => {
  const { i18n } = useTranslation();
  return (
    <>
      <Document
        title="CV Valentin THOMAS"
        author="Valentin THOMAS"
        language={i18n.language}
        creator="Valentin THOMAS"
        producer="Valentin THOMAS"
      >
        <Page1 />
        <Page2 />
      </Document>
    </>
  );
};

CvDocument.defaultProps = {};

export default CvDocument;
