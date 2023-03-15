import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";
import { has, is } from "ramda";
import { isNotNil, isNotNilOrEmpty } from "ramda-adjunct";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaLink } from "react-icons/fa";
import { documentStyle } from "~/refs/constants";
import { textSizes } from "../../routes/cv.viewer/config";

type Item = {
  title: string;
  content: string;
};

type Props = {
  project: string;
};

const styles = StyleSheet.create({
  section: {
    fontSize: textSizes.title,
    margin: documentStyle.margin,
    padding: documentStyle.padding,
    flexDirection: "column",
    gap: 20,
  },
  blockGroup: {
    flexDirection: "column",
    gap: 5,
  },
  blockTitle: {
    fontSize: textSizes.subtitle,
    color: "black",
    textDecoration: "underline",
  },
  blockContent: {
    fontSize: textSizes.content,
    textAlign: "justify",
  },
  linkStyle: {
    fontSize: textSizes.subtitle,
    color: "#404080",
    textDecoration: "underline",
  },
});

export const PdfProjects: React.FC<Props> = ({ project }) => {
  const { t } = useTranslation();

  const projectDescription = t(`${project}.description`, {
    returnObjects: true,
  }) as string[];

  if (!is(Array, projectDescription)) {
    return null;
  }

  const link = has("link", t(`${project}`, { returnObjects: true }))
    ? t(`${project}.link`)
    : undefined;

  return (
    <>
      <View style={styles.blockGroup} wrap={false}>
        {isNotNil(link) ? (
          <Link src={link} style={styles.linkStyle}>
            {t(`${project}.title`)}
          </Link>
        ) : (
          <Text style={styles.blockTitle}>{t(`${project}.title`)}</Text>
        )}
        {(projectDescription || []).map((item) => (
          <Text key={item} style={styles.blockContent}>
            {item}
          </Text>
        ))}
      </View>
    </>
  );
};

PdfProjects.defaultProps = {};

export default PdfProjects;
