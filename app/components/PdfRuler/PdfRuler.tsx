import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import { documentStyle } from "~/refs/constants";

type Props = {
  large?: boolean;
  color?: string;
};

export const PdfRuler: React.FC<Props> = ({ large, color }) => {
  const style = StyleSheet.create({
    container: {
      paddingHorizontal: documentStyle.padding + documentStyle.margin,
    },
    ruler: {
      width: "100%",
      height: large ? 2 : 1,
      backgroundColor: color || "#d0d0d0",
      marginVertical: 4,
    },
  });
  return (
    <>
      <View style={style.container}>
        <View style={style.ruler} />
      </View>
    </>
  );
};

PdfRuler.defaultProps = {};

export default PdfRuler;
