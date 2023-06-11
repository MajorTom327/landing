import { View, StyleSheet } from "@react-pdf/renderer";
import { isNilOrEmpty } from "ramda-adjunct";
import React, { useMemo } from "react";
import PdfProjects from "~/components/PdfProjects";
import PdfTitle from "~/components/PdfTitle";
import { textSizes } from "../../../refs/PdfConfig";
import PdfContainer from "~/components/PdfContainer/PdfContainer";

type Props = {
  projects: string[];
};

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

export const CvProjects: React.FC<Props> = ({ projects }) => {
  const items = useMemo(() => {
    return projects.map((item) => `projects.${item}`);
  }, [projects]);

  if (isNilOrEmpty(items)) return null;
  return (
    <>
      <PdfContainer>
        <PdfTitle>Personal projects</PdfTitle>

        <View style={styles.expContainer}>
          {items.map((item) => (
            <PdfProjects key={item + ".cv_project"} project={item} />
          ))}
        </View>
      </PdfContainer>
    </>
  );
};

CvProjects.defaultProps = {};

export default CvProjects;
