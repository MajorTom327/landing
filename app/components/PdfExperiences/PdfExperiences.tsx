import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { is } from "ramda";
import React from "react";
import { useTranslation } from "react-i18next";
import { documentStyle } from "~/refs/constants";
import { textSizes } from "~/refs/PdfConfig";;

type Item = {
  title: string;
  content: string;
};

type Props = {
  item: Item;
};

const styles = StyleSheet.create({
  section: {
    fontSize: textSizes.title,
    margin: documentStyle.margin,
    padding: documentStyle.padding,
    flexDirection: "column",
    gap: 20,
  },
  blockGroup: {
    flexDirection: "column",
    gap: 5,
  },
  blockTitle: {
    fontSize: textSizes.subtitle,
    textDecoration: "underline",
  },
  blockContent: {
    fontSize: textSizes.content,
    textAlign: "justify",
  },
});

export const PdfExperiences: React.FC<Props> = ({ item }) => {
  const { t } = useTranslation("cv");

  const experiences = t(item.content, { returnObjects: true });

  if (!is(Array, experiences)) {
    return null;
  }

  return (
    <>
      <View style={styles.blockGroup} wrap={false}>
        <Text style={styles.blockTitle}>{t(item.title)}</Text>
        {(experiences as string[]).map((item, index) => (
          <Text key={item} style={styles.blockContent}>
            {item}
          </Text>
        ))}
      </View>
    </>
  );
};

PdfExperiences.defaultProps = {};

export default PdfExperiences;
