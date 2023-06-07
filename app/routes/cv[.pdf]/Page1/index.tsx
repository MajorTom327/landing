import { Page } from "@react-pdf/renderer";
import React from "react";
import pageStyles, { pageSizeConfig } from "../../../refs/PdfConfig";
import CvCompetences from "./CvCompetences";
import CvContact from "./CvContact";
import CvSynthese from "./CvSynthese";

type Props = {};

export const Index: React.FC<Props> = ({}) => {
  return (
    <>
      <Page size={pageSizeConfig} style={pageStyles.page}>
        <CvContact />
        <CvSynthese />
        <CvCompetences />
      </Page>
    </>
  );
};

Index.defaultProps = {};

export default Index;
