import React from "react";
import PdfContainer from "~/components/PdfContainer/PdfContainer";
import { PdfTitle } from "~/components/PdfTitle";

type Props = {};

export const CvStudies: React.FC<Props> = ({}) => {
  return (
    <>
      <PdfContainer>
        <PdfTitle>Studies / Training</PdfTitle>
      </PdfContainer>
    </>
  );
};

CvStudies.defaultProps = {};

export default CvStudies;
