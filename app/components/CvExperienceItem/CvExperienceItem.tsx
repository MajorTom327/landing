import { View, Text, StyleSheet } from "@react-pdf/renderer";
import type { DateTime } from "luxon";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { PdfBold } from "../PdfBold";
import { PdfUnderline } from "../PdfUnderline";
import { textSizes } from "~/refs/PdfConfig";

type Props = {
  title: string;
  date: string;

  society: string;
  societyDescription: string;
  country: string;
  children: React.ReactNode;
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
  },
  societyInfo: {
    flexDirection: "row",
    gap: 5,
  },
  societyDescription: {
    fontFamily: "Helvetica-Oblique",
    fontSize: textSizes.small,
    paddingVertical: 2,
  },

  content: {
    marginTop: 5,
  },
});

export const CvExperienceItem: React.FC<Props> = ({
  title,
  date,
  society,
  societyDescription,
  country,
  children,
}) => {
  return (
    <>
      <View wrap={false}>
        <View style={style.container}>
          <View>
            <PdfBold>
              <Trans>{title}</Trans>
            </PdfBold>
            <View style={style.societyInfo}>
              <PdfUnderline>
                <Trans>{society}</Trans>
              </PdfUnderline>
              <Text>
                <Trans>{country}</Trans>
              </Text>
            </View>
          </View>
          <PdfBold>
            <Trans>{date}</Trans>
          </PdfBold>
        </View>
        <Text style={style.societyDescription}>
          <Trans>{societyDescription}</Trans>
        </Text>
        <View style={style.content}>{children}</View>
      </View>
    </>
  );
};

CvExperienceItem.defaultProps = {};

export default CvExperienceItem;
