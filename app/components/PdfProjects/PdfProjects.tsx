import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";
import { has, is } from "ramda";
import { isNotNil } from "ramda-adjunct";
import type { ReactNode } from "react";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { documentStyle } from "~/refs/constants";
import { textSizes } from "~/refs/PdfConfig";

type Item = {
  title: string;
  content: string;
};

type Props = {
  title: string;
  to?: string;
  children: React.ReactNode;
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

export const PdfProjects: React.FC<Props> = ({ title, to, children }) => {
  const link = to;

  return (
    <>
      <View style={styles.blockGroup} wrap={false}>
        {isNotNil(link) ? (
          <Link src={link} style={styles.linkStyle}>
            <Trans>{title}</Trans>
          </Link>
        ) : (
          <Text style={styles.blockTitle}>
            <Trans>{title}</Trans>
          </Text>
        )}
        {children}
      </View>
    </>
  );
};

export const PdfProjectsDescription: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <Text style={styles.blockContent}>
      <Trans>{children}</Trans>
    </Text>
  );
};

PdfProjects.defaultProps = {};

export default PdfProjects;
