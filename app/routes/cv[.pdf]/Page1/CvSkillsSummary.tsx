import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { documentStyle } from "~/refs/constants";
import FontSizes from "../FontSizes";
import { PdfBold } from "~/components/PdfBold";
import { Trans } from "react-i18next";

type Props = {};

const style = StyleSheet.create({
  container: {
    marginHorizontal: documentStyle.margin,
    padding: documentStyle.padding,
    flex: 1,
    flexDirection: "column",
    gap: 5,
  },
  line: {
    fontSize: FontSizes.body,
    textAlign: "justify",
  },
  title: {
    fontSize: FontSizes.title,
    marginBottom: 5,
  },
});

export const CvSkillsSummary: React.FC<Props> = ({}) => {
  return (
    <>
      <View style={style.container}>
        <Text style={style.title}>
          <Trans>Skills</Trans>
        </Text>
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
            associated tools like <PdfBold>Jira</PdfBold>
          </Trans>
        </Text>
      </View>
    </>
  );
};

CvSkillsSummary.defaultProps = {};

export default CvSkillsSummary;
