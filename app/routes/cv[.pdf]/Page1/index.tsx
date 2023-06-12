import { Page } from "@react-pdf/renderer";
import React from "react";
import pageStyles, { pageSizeConfig } from "../../../refs/PdfConfig";
import CvContact from "./CvContact";
import CvSynthese from "./CvSynthese";
import CvSkillsSummary from "./CvSkillsSummary";
import PdfRuler from "~/components/PdfRuler";
import CvExperiences from "./CvExperiences";
import CvStudies from "./CvStudies";
import CvProjects from "./CvProjects";

type Props = {};

const projects = ["deadsafe", "basemint", "andromeda", "styx"];

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
        <CvExperiences />
        <PdfRuler />
        <CvStudies />
        <PdfRuler />
        <CvProjects />
      </Page>
    </>
  );
};

Index.defaultProps = {};

export default Index;
