import { View, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import PdfTitle from "~/components/PdfTitle";
import { textSizes } from "../../../refs/PdfConfig";
import PdfExperiences from "~/components/PdfExperiences";

type Props = {};

const styles = StyleSheet.create({
  container: {
    fontSize: textSizes.title,
    flexDirection: "column",
    gap: 20,
  },
  expContainer: {
    fontSize: textSizes.title,
    flexDirection: "column",
    gap: 10,
  },
});

const items = Array.from({ length: 6 }, (_, i) => `experiences.items.${i}`);

export const CvExperiences: React.FC<Props> = ({}) => {
  return (
    <>
      <View style={styles.container}>
        <PdfTitle>experiences.title</PdfTitle>

        <View style={styles.expContainer}>
          {items.map((item) => (
            <PdfExperiences
              key={item}
              item={{ title: `${item}.title`, content: `${item}.value` }}
            />
          ))}
        </View>
      </View>
    </>
  );
};

CvExperiences.defaultProps = {};

export default CvExperiences;
