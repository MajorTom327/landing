import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";
import { documentStyle } from "~/refs/constants";

type Props = {
  children: string | React.ReactNode;
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: documentStyle.margin,
    paddingHorizontal: documentStyle.padding,
    flexDirection: "column",
    gap: 5,
  },
});

export const PdfContainer: React.FC<Props> = ({ children }) => {
  return (
    <>
      <View style={style.container}>{children}</View>
    </>
  );
};

PdfContainer.defaultProps = {};

export default PdfContainer;
