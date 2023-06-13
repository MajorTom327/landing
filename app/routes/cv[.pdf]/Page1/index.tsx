import { Page } from "@react-pdf/renderer";
import type { ReactElement } from "react";
import React from "react";
import pageStyles, { pageSizeConfig } from "../../../refs/PdfConfig";
import CvContact from "./CvContact";
import CvSynthese from "./CvSynthese";
import CvSkillsSummary from "./CvSkillsSummary";
import PdfRuler from "~/components/PdfRuler";
import CvExperiences from "./CvExperiences";
import CvStudies from "./CvStudies";
import CvProjects from "./CvProjects";
import type CvPart from "~/refs/CvPart";

type Props = {
  hidePart: CvPart[];
};

const parts: Array<{ key: CvPart; component: ReactElement }> = [
  { key: CvPart.contact, component: <CvContact /> },
  { key: CvPart.synthese, component: <CvSynthese /> },
  { key: CvPart.skillsSummary, component: <CvSkillsSummary /> },
  { key: CvPart.experiences, component: <CvExperiences /> },
  { key: CvPart.studies, component: <CvStudies /> },
  { key: CvPart.projects, component: <CvProjects /> },
];
export const Index: React.FC<Props> = ({ hidePart }) => {
  return (
    <>
      <Page size={pageSizeConfig} style={pageStyles.page}>
        {parts
          .filter(({ key }) => !hidePart.includes(key))
          .map(({ key, component }) => (
            <React.Fragment key={key}>
              {component}
              <PdfRuler />
            </React.Fragment>
          ))}
        {/* <CvContact />
        <PdfRuler large color="#505050" />
        <CvSynthese />
        <PdfRuler />
        <CvSkillsSummary />
        <PdfRuler />
        <CvExperiences />
        <PdfRuler />
        <CvStudies />
        <PdfRuler />
        <CvProjects /> */}
      </Page>
    </>
  );
};

Index.defaultProps = {};

export default Index;
