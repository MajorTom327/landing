import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";
import { Trans } from "react-i18next";

type Props = {
  children: React.ReactNode;
};

const style = StyleSheet.create({
  bold: {
    fontWeight: "heavy",
    fontStyle: "bold",
    fontFamily: "Helvetica-Bold",
  },
});

export const PdfBold: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Text style={style.bold}>{children}</Text>
    </>
  );
};


PdfBold.defaultProps = {};

export default PdfBold;
