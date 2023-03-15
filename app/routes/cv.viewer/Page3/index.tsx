import { Page, StyleSheet, View, Text } from "@react-pdf/renderer";
import React from "react";
import { useTranslation } from "react-i18next";
import PdfTitle from "~/components/PdfTitle";
import { documentStyle } from "~/refs/constants";
import pageStyles, { pageSizeConfig, textSizes } from "../config";
import CvProjects from "./CvProjects";

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

const projects = ["deadsafe", "basemint", "andromeda", "styx"];

export const Index: React.FC<Props> = ({}) => {
  const { t } = useTranslation("cv");

  return (
    <>
      <Page size={pageSizeConfig} style={pageStyles.page} wrap>
        <View style={styles.container}>
          <CvProjects projects={projects} />

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
