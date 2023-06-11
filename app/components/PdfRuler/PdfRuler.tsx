import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import { documentStyle } from "~/refs/constants";

type Props = {};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: documentStyle.padding + documentStyle.margin,
  },
  ruler: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 2,
  },
});

export const PdfRuler: React.FC<Props> = ({}) => {
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
