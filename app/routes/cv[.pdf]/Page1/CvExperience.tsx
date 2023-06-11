import { StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
import PdfContainer from "~/components/PdfContainer/PdfContainer";
import PdfTitle from "~/components/PdfTitle";

type Props = {};

const styles = StyleSheet.create({
  container: {},
});

export const CvExperience: React.FC<Props> = ({}) => {
  return (
    <>
      <PdfContainer>
        <PdfTitle>Professional experience</PdfTitle>
      </PdfContainer>
    </>
  );
};

CvExperience.defaultProps = {};

export default CvExperience;
