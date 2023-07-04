import React from "react";
import { Trans } from "react-i18next";
import { textSizes } from "~/refs/PdfConfig";
import { Text, StyleSheet } from "@react-pdf/renderer";

type Props = {
  children: string | React.ReactNode;
};

const styles = StyleSheet.create({
  title: {
    fontSize: textSizes.title,
    marginBottom: 5,
    backgroundColor: "#eaeaea",
    color: "#000",
    textTransform: "uppercase",
    textAlign: "center",
    padding: 5,
  },
});

export const PdfTitle: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Text style={styles.title}>
        <Trans>{children}</Trans>
      </Text>
    </>
  );
};

PdfTitle.defaultProps = {};

export default PdfTitle;
