import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import { useTranslation } from "react-i18next";
import { documentStyle } from "~/refs/constants";

type Props = {};

export const CvContact: React.FC<Props> = ({}) => {
  const { t } = useTranslation("cv");

  const style = StyleSheet.create({
    container: {
      margin: documentStyle.margin,
      padding: documentStyle.padding,
    },
    section: {
      flexDirection: "row",
      gap: 10,
    },
    title: {
      fontSize: 14,
      textDecoration: "underline",
    },
    value: {
      fontSize: 14,
    },
  });

  const fields = [
    "contact.name",
    "contact.address",
    "contact.phone.fr",
    "contact.phone.ca",
    "contact.email",
  ];
  return (
    <>
      <View style={style.container}>
        {fields.map((field) => (
          <View key={field} style={style.section}>
            <Text style={style.title}>{t(`${field}.title`)} :</Text>
            <Text style={style.value}>{t(`${field}.value`)}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

CvContact.defaultProps = {};

export default CvContact;
