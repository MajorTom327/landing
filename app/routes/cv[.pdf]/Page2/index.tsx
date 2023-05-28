import { Page, StyleSheet, View, Text } from "@react-pdf/renderer";
import React from "react";
import { useTranslation } from "react-i18next";
import PdfTitle from "~/components/PdfTitle";
import { documentStyle } from "~/refs/constants";
import pageStyles, { pageSizeConfig, textSizes } from "../../../refs/PdfConfig";
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
        </View>
      </Page>
    </>
  );
};

Index.defaultProps = {};

export default Index;
