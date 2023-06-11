import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";
import { Trans } from "react-i18next";
import { textSizes } from "~/refs/PdfConfig";

type Props = {
  children: React.ReactNode;
};

const style = StyleSheet.create({
  line: {
    fontSize: textSizes.content,
    textAlign: "justify",
  },
});

export const PdfBulletLine: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Text style={style.line}>
        &bull; <Trans>{children}</Trans>
      </Text>
    </>
  );
};

PdfBulletLine.defaultProps = {};

export default PdfBulletLine;
