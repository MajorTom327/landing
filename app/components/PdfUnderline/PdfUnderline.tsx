import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";

type Props = {
  children: React.ReactNode;
};

const style = StyleSheet.create({
  underline: {
    textDecoration: "underline",
  },
});

export const PdfUnderline: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Text style={style.underline}>{children}</Text>
    </>
  );
};

PdfUnderline.defaultProps = {};

export default PdfUnderline;
