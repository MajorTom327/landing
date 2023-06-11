import { Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { Trans } from "react-i18next";
import PdfBold from "~/components/PdfBold";
import PdfContainer from "~/components/PdfContainer/PdfContainer";
import { PdfTitle } from "~/components/PdfTitle";
import { textSizes } from "~/refs/PdfConfig";

type Props = {};

export const CvSynthese: React.FC<Props> = ({}) => {
  const style = StyleSheet.create({
    line: {
      fontSize: textSizes.content,
      textAlign: "justify",
    },
    title: {
      fontSize: textSizes.title,
      marginBottom: 5,
    },
  });

  return (
    <>
      <PdfContainer>
        <PdfTitle>Summary</PdfTitle>

        <Text style={style.line}>
          <Trans>
            As a <PdfBold>Fullstack Developper</PdfBold>, I have had the
            opportunity to work on projects such as a{" "}
            <PdfBold>client portal</PdfBold> for insurance companies and a{" "}
            <PdfBold>clients management application</PdfBold> for a Crematorium
            in various environments. These experiences demonstrate my
            adaptability and my area of expertise.
          </Trans>
        </Text>
        <Text style={style.line}>
          <Trans>
            My objective is to be part of a team where we collaborate to create{" "}
            <PdfBold>high-quality products</PdfBold>, and where my passion for
            software development and{" "}
            <PdfBold>ability to find solutions</PdfBold> in the face of{" "}
            <PdfBold>unexpected challenges</PdfBold> play a role in the overall
            success of the company.
          </Trans>
        </Text>
      </PdfContainer>
    </>
  );
};

CvSynthese.defaultProps = {};

export default CvSynthese;
