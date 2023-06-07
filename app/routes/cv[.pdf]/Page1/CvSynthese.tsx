import { View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { useTranslation } from "react-i18next";
import { documentStyle } from "~/refs/constants";
import FontSizes from "../FontSizes";

type Props = {};

export const CvSynthese: React.FC<Props> = ({}) => {
  const { t } = useTranslation("cv");

  const lines = t("synthese", { returnObjects: true }) as string[];

  const style = StyleSheet.create({
    container: {
      marginHorizontal: documentStyle.margin,
      padding: documentStyle.padding,
      flex: 1,
      flexDirection: "column",
      gap: 10,
    },
    line: {
      fontSize: FontSizes.body,
    },
  });

  return (
    <>
      <View style={style.container}>
        {lines.map((line) => (
          <Text key={line} style={style.line}>
            {line}
          </Text>
        ))}
      </View>
    </>
  );
};

CvSynthese.defaultProps = {};

export default CvSynthese;
