import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";
import { PdfBold } from "~/components/PdfBold";
import { Trans } from "react-i18next";
import { textSizes } from "~/refs/PdfConfig";
import { PdfTitle } from "~/components/PdfTitle";
import PdfContainer from "~/components/PdfContainer/PdfContainer";

type Props = {};

const style = StyleSheet.create({
  line: {
    fontSize: textSizes.content,
    textAlign: "justify",
  },
  title: {
    fontSize: textSizes.title,
    marginBottom: 5,
  },
});

export const CvSkillsSummary: React.FC<Props> = ({}) => {
  return (
    <>
      <PdfContainer>
        <PdfTitle>Skills</PdfTitle>

        <Text style={style.line}>
          &bull;{" "}
          <Trans>
            Native <PdfBold>French</PdfBold> speaker and intermediate English
            speaker
          </Trans>
        </Text>
        <Text style={style.line}>
          &bull; <Trans>Advanced computer skills</Trans>
        </Text>
        <Text style={style.line}>
          &bull;{" "}
          <Trans>
            <PdfBold>Autonomous</PdfBold> and able to work in a team
          </Trans>
        </Text>
        <Text style={style.line}>
          &bull;{" "}
          <Trans>
            <PdfBold>Curious</PdfBold> of new technologies
          </Trans>
        </Text>
        <Text style={style.line}>
          &bull;{" "}
          <Trans>
            Bring a <PdfBold>creative</PdfBold> and{" "}
            <PdfBold>innovative</PdfBold> vision
          </Trans>
        </Text>
        <Text style={style.line}>
          &bull;{" "}
          <Trans>
            Have already work with <PdfBold>Agile methodology</PdfBold> and
            associated tools like <PdfBold>Jira</PdfBold>,{" "}
            <PdfBold>Confluence</PdfBold> and <PdfBold>Trello</PdfBold>
          </Trans>
        </Text>
      </PdfContainer>
    </>
  );
};

CvSkillsSummary.defaultProps = {};

export default CvSkillsSummary;
