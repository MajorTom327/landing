import { View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { Trans } from "react-i18next";
import { PdfBold } from "~/components/PdfBold";
import PdfContainer from "~/components/PdfContainer/PdfContainer";
import { PdfTitle } from "~/components/PdfTitle";

type Props = {
  school: string;
  date: string;
  desc: string;
};

const style = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: "column",
    gap: 5,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const CvStudiesItem: React.FC<Props> = ({ school, date, desc }) => {
  return (
    <>
      <View style={style.container}>
        <View style={style.title}>
          <PdfBold>{school}</PdfBold>
          <PdfBold>{date}</PdfBold>
        </View>
        <Text>
          <Trans>{desc}</Trans>
        </Text>
      </View>
    </>
  );
};

export const CvStudies: React.FC = () => {
  return (
    <>
      <PdfContainer>
        <PdfTitle>Education</PdfTitle>
        <CvStudiesItem
          school="School 42, Paris, France"
          date="November 2015 - August 2017"
          desc="Intensive and autonomous training in software development, with intensive learning of C and PHP"
        />
      </PdfContainer>
    </>
  );
};

CvStudies.defaultProps = {};

export default CvStudies;
