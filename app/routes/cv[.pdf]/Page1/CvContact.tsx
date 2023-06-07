import { StyleSheet, Text, View, Link } from "@react-pdf/renderer";
import React from "react";
import { useTranslation } from "react-i18next";
import { documentStyle, portfolioUrl } from "~/refs/constants";
import FontSizes from "../FontSizes";
import { linkedinUrl } from "~/refs/constants";

type Props = {};

export const CvContact: React.FC<Props> = ({}) => {
  const { t } = useTranslation("cv");
  const { t: tCommon } = useTranslation("translation");

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
    ruler: {
      width: "100%",
      height: 1,
      backgroundColor: "black",
      marginVertical: 8,
    },
  });

  const fields = [
    "contact.name",
    // "contact.address",
    // "contact.phone.fr",
    "contact.email",
  ];
  return (
    <>
      <View style={style.container}>
        <View style={style.civility}>
          <Text>{t("contact.name.value")}</Text>
          <Text style={style.subtitle}>{tCommon("jobs.fullstack")}</Text>
        </View>
        <View style={style.section}>
          <Text style={style.title}>{t("contact.email.value")}</Text>
          <Text style={style.title}>
            <Link src={linkedinUrl}>{tCommon("social.linkedin")}</Link>
          </Text>
          <Text style={style.title}>
            <Link src={portfolioUrl}>{tCommon("social.portfolio")}</Link>
          </Text>
        </View>
        <View style={style.ruler} />
      </View>
    </>
  );
};

CvContact.defaultProps = {};

export default CvContact;
