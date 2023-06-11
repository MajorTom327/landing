import React from "react";
import { PdfBold } from "~/components/PdfBold";
import { PdfTitle } from "~/components/PdfTitle";
import PdfContainer from "~/components/PdfContainer/PdfContainer";
import { PdfBulletLine } from "~/components/PdfBulletLine";

type Props = {};

export const CvSkillsSummary: React.FC<Props> = ({}) => {
  return (
    <>
      <PdfContainer>
        <PdfTitle>Skills</PdfTitle>

        <PdfBulletLine>
          Native <PdfBold>French</PdfBold> speaker and intermediate English
          speaker
        </PdfBulletLine>

        <PdfBulletLine>Advanced computer skills</PdfBulletLine>

        <PdfBulletLine>
          <PdfBold>Autonomous</PdfBold> and able to work in a team
        </PdfBulletLine>
        <PdfBulletLine>
          <PdfBold>Curious</PdfBold> of new technologies
        </PdfBulletLine>
        <PdfBulletLine>
          Bring a <PdfBold>creative</PdfBold> and <PdfBold>innovative</PdfBold>{" "}
          vision
        </PdfBulletLine>
        <PdfBulletLine>
          Have already work with <PdfBold>Agile methodology</PdfBold> and
          associated tools like <PdfBold>Jira</PdfBold>,{" "}
          <PdfBold>Confluence</PdfBold> and <PdfBold>Trello</PdfBold>
        </PdfBulletLine>
      </PdfContainer>
    </>
  );
};

CvSkillsSummary.defaultProps = {};

export default CvSkillsSummary;
