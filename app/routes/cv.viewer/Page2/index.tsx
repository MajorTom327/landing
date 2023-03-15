import { Page, StyleSheet, View, Text } from "@react-pdf/renderer";
import React from "react";
import { useTranslation } from "react-i18next";
import PdfKeyValue from "~/components/PdfKeyValue/PdfKeyValue";
import PdfTitle from "~/components/PdfTitle";
import { documentStyle } from "~/refs/constants";
import pageStyles, { pageSizeConfig, textSizes } from "../config";
import CvExperiences from "./CvExperiences";
import CvStudies from "./CvStudies";

type Props = {};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: documentStyle.margin,
    padding: documentStyle.padding,
    gap: 20,
  },
  group: {
    flexDirection: "column",
    gap: 7,
  },
  contentText: {
    fontSize: textSizes.content,
  },
});

export const Index: React.FC<Props> = ({}) => {
  const { t } = useTranslation("cv");

  return (
    <>
      <Page size={pageSizeConfig} style={pageStyles.page} wrap>
        <View style={styles.container}>
          <CvStudies />
          <CvExperiences />

          <View style={styles.group}>
            <PdfTitle>hobbies.title</PdfTitle>
            <Text style={styles.contentText}>{t("hobbies.value")}</Text>
          </View>
        </View>
      </Page>
    </>
  );
};

Index.defaultProps = {};

export default Index;
