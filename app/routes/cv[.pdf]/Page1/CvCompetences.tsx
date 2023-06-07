import { View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { useTranslation } from "react-i18next";
import PdfTitle from "~/components/PdfTitle";
import { documentStyle } from "~/refs/constants";
import { textSizes } from "../../../refs/PdfConfig";
import PdfList from "../../../components/PdfList/PdfList";

type Props = {};

export const CvCompetences: React.FC<Props> = ({}) => {
  const { t } = useTranslation("cv");

  const styles = StyleSheet.create({
    section: {
      fontSize: textSizes.title,
      margin: documentStyle.margin,
      padding: documentStyle.padding,
      flexDirection: "column",
      gap: 25,
    },
    skillGroup: {
      flexDirection: "column",
      gap: 10,
    },
  });
  const skillsGroup = [
    ["skills.languages.french", "skills.languages.english"],
    ["skills.cs.advanced", "skills.cs.middle", "skills.cs.beginner"],
    ["skills.problem_solving", "skills.leadership", "skills.pedagogy"],
  ];

  return (
    <>
      <View style={styles.section}>
        <PdfTitle>skills.title</PdfTitle>
        {skillsGroup.map((skills) => (
          <View style={styles.skillGroup} key={skills[0]}>
            {skills.map((skill) => (
              <PdfList
                key={skill}
                item={{
                  title: t(`${skill}.title`),
                  content: t(`${skill}.level`),
                }}
              />
            ))}
          </View>
        ))}
      </View>
    </>
  );
};

CvCompetences.defaultProps = {};

export default CvCompetences;
