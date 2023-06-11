import { View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { Trans } from "react-i18next";
import { documentStyle } from "~/refs/constants";
import FontSizes from "../FontSizes";
import PdfRuler from "~/components/PdfRuler";

type Props = {};

export const CvSynthese: React.FC<Props> = ({}) => {
  const style = StyleSheet.create({
    container: {
      marginHorizontal: documentStyle.margin,
      padding: documentStyle.padding,
      flexDirection: "column",
      gap: 10,
    },
    line: {
      fontSize: FontSizes.body,
      textAlign: "justify",
    },
    title: {
      fontSize: FontSizes.title,
      marginBottom: 5,
    },
  });

  return (
    <>
      <View style={style.container}>
        <Text style={style.title}>
          <Trans>Summary</Trans>
        </Text>

        <Text style={style.line}>
          <Trans>
            I have had the opportunity to work on projects such as a client
            portal for insurance companies and a clients management application
            for a Crematorium in various environments. These experiences
            demonstrate my adaptability and my area of expertise.
          </Trans>
        </Text>
        <Text style={style.line}>
          <Trans>
            My objective is to be part of a team where we collaborate to create
            high-quality products, and where my passion for software development
            and ability to find solutions in the face of unexpected challenges
            play a role in the overall success of the company.": "My objective
            is to be part of a team where we collaborate to create high-quality
            products, and where my passion for software development and ability
            to find solutions in the face of unexpected challenges play a role
            in the overall success of the company.
          </Trans>
        </Text>
        {/* <PdfRuler /> */}
      </View>
    </>
  );
};

CvSynthese.defaultProps = {};

export default CvSynthese;
