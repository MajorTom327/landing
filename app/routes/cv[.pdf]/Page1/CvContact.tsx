import { StyleSheet, Text, View, Link } from "@react-pdf/renderer";
import React from "react";
import { Trans } from "react-i18next";
import PdfContainer from "~/components/PdfContainer/PdfContainer";
import { textSizes } from "~/refs/PdfConfig";
import { portfolioUrl } from "~/refs/constants";
import { linkedinUrl } from "~/refs/constants";

type Props = {};

export const CvContact: React.FC<Props> = ({}) => {
  const style = StyleSheet.create({
    section: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 10,
    },
    civility: {
      fontSize: textSizes.title,
      width: "100%",
      textAlign: "center",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: textSizes.subtitle,
    },
  });
  return (
    <>
      <PdfContainer>
        <View style={style.civility}>
          <Text>
            <Trans>Valentin THOMAS</Trans>
          </Text>
          <Text style={style.subtitle}>
            <Trans>Fullstack Developer</Trans>
          </Text>
        </View>
        <View style={style.section}>
          <Text>
            <Trans>me@valentin-thomas.com</Trans>
          </Text>
          <Text>
            <Link src={linkedinUrl}>
              <Trans>LinkedIn</Trans>
            </Link>
          </Text>
          <Text>
            <Link src={portfolioUrl}>
              <Trans>Portfolio</Trans>
            </Link>
          </Text>
        </View>
      </PdfContainer>
    </>
  );
};

CvContact.defaultProps = {};

export default CvContact;
