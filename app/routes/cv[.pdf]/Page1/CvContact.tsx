import { StyleSheet, Text, View, Link } from "@react-pdf/renderer";
import React from "react";
import { Trans } from "react-i18next";
import { documentStyle, portfolioUrl } from "~/refs/constants";
import FontSizes from "../FontSizes";
import { linkedinUrl } from "~/refs/constants";

type Props = {};

export const CvContact: React.FC<Props> = ({}) => {
  const style = StyleSheet.create({
    container: {
      marginHorizontal: documentStyle.margin,

      padding: documentStyle.padding,
    },
    section: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 10,
    },
    title: {
      fontSize: FontSizes.body,
    },
    civility: {
      fontSize: FontSizes.title,
      width: "100%",
      textAlign: "center",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: FontSizes.subtitle,
    },
  });
  return (
    <>
      <View style={style.container}>
        <View style={style.civility}>
          <Text>
            <Trans>Valentin THOMAS</Trans>
          </Text>
          <Text style={style.subtitle}>
            <Trans>Fullstack Developer</Trans>
          </Text>
        </View>
        <View style={style.section}>
          <Text style={style.title}>
            <Trans>me@valentin-thomas.com</Trans>
          </Text>
          <Text style={style.title}>
            <Link src={linkedinUrl}>
              <Trans>LinkedIn</Trans>
            </Link>
          </Text>
          <Text style={style.title}>
            <Link src={portfolioUrl}>
              <Trans>Portfolio</Trans>
            </Link>
          </Text>
        </View>
      </View>
    </>
  );
};

CvContact.defaultProps = {};

export default CvContact;
