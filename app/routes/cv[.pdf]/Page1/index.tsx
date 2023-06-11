import { Page } from "@react-pdf/renderer";
import React from "react";
import pageStyles, { pageSizeConfig } from "../../../refs/PdfConfig";
import CvContact from "./CvContact";
import CvSynthese from "./CvSynthese";
import CvSkillsSummary from "./CvSkillsSummary";
import PdfRuler from "~/components/PdfRuler";
import CvExperience from "./CvExperience";

type Props = {};

export const Index: React.FC<Props> = ({}) => {
  return (
    <>
      <Page size={pageSizeConfig} style={pageStyles.page}>
        <CvContact />
        <PdfRuler large color="#505050" />
        <CvSynthese />
        <PdfRuler />
        <CvSkillsSummary />
        <PdfRuler />
        <CvExperience />
      </Page>
    </>
  );
};

Index.defaultProps = {};

export default Index;
