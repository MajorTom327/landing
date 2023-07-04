import { StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
import { CvExperienceItem } from "~/components/CvExperienceItem";
import { PdfBold } from "~/components/PdfBold";
import { PdfBulletLine } from "~/components/PdfBulletLine";
import PdfContainer from "~/components/PdfContainer/PdfContainer";
import PdfTitle from "~/components/PdfTitle";

type Props = {};

const styles = StyleSheet.create({
  container: { flexDirection: "column", gap: 10 },
});

export const CvExperiences: React.FC<Props> = ({}) => {
  return (
    <>
      <PdfContainer>
        <PdfTitle>Experience</PdfTitle>
        <View style={styles.container}>
          <CvExperienceItem
            title={"Fullstack Developer"}
            date={"July 2020 to now"}
            society={"F.ASS.T"}
            societyDescription={
              "Startup developing platforms for insurers and their customers"
            }
            country={"France"}
          >
            <PdfBulletLine>
              Development of services in <PdfBold>NodeJS</PdfBold> with{" "}
              <PdfBold>Typescript</PdfBold>
            </PdfBulletLine>
            <PdfBulletLine>
              Working on a platform for an insurer{" "}
              <PdfBold>from the early stage to production</PdfBold>
            </PdfBulletLine>
            <PdfBulletLine>
              <PdfBold>Joining the architect's team</PdfBold> to help structure
              the multiples projects of the enterprise and{" "}
              <PdfBold>make the developers work easier</PdfBold>.
            </PdfBulletLine>
            <PdfBulletLine>
              <PdfBold>Animation of multiples workshops</PdfBold> to share
              knowledge between the teams members.
            </PdfBulletLine>
            <PdfBulletLine>
              Presentation of the society and the projects to students and
              <PdfBold>managing the formation</PdfBold> of the new employees.
            </PdfBulletLine>
          </CvExperienceItem>

          <CvExperienceItem
            title={"C# software developer"}
            date={"November 2018 - July 2020"}
            society={"Ededoc"}
            societyDescription={
              "Society in charge of developing a virtual printer to manage the dematerialization of documents"
            }
            country={"France"}
          >
            <PdfBulletLine>
              Learning <PdfBold>C#</PdfBold> and{" "}
              <PdfBold>.NET framework</PdfBold> with the SOLID principles.
            </PdfBulletLine>
            <PdfBulletLine>
              Development of a service for <PdfBold>Email Tracking</PdfBold> and{" "}
              <PdfBold>document electronic signing</PdfBold> in the workflows
            </PdfBulletLine>
            <PdfBulletLine>
              Development of a <PdfBold>NodeJS</PdfBold> scrapping service to
              recover invoices.
            </PdfBulletLine>
          </CvExperienceItem>

          <CvExperienceItem
            title={"Fullstack Developer"}
            date={"August 2018 - October 2018"}
            society={"MonBuilding"}
            societyDescription={
              "Startup building a platform to manage buildings and their occupants"
            }
            country={"France"}
          >
            <PdfBulletLine>
              I learning of <PdfBold>NodeJS</PdfBold> with{" "}
              <PdfBold>Meteor</PdfBold> and <PdfBold>React</PdfBold>.
            </PdfBulletLine>
            <PdfBulletLine>
              This experience was important to me as it allowed me to discover
              the <PdfBold>Realtime interfaces</PdfBold> and{" "}
              <PdfBold>MongoDB</PdfBold>
            </PdfBulletLine>
            <PdfBulletLine>
              Working in an <PdfBold>International team</PdfBold> with{" "}
              <PdfBold>remote work</PdfBold> and coworker located in Peru
            </PdfBulletLine>
          </CvExperienceItem>

          <CvExperienceItem
            title={"Fullstack Developer"}
            date={"May 2018 - August 2018"}
            society={"Solicis"}
            societyDescription={"Society of prestations in IT"}
            country={"France"}
          >
            <PdfBulletLine>
              Deepening of knowledge in <PdfBold>PHP</PdfBold>
            </PdfBulletLine>
            <PdfBulletLine>
              Starting to learn the development with the{" "}
              <PdfBold>Zend Framework</PdfBold>
            </PdfBulletLine>
          </CvExperienceItem>

          <CvExperienceItem
            title={"Fullstack Developer"}
            date={"August 2017 - May 2018"}
            society={"MeilleurSCPI"}
            societyDescription={"Real estate investment platform"}
            country={"France"}
          >
            <PdfBulletLine>
              I had the opportunity to work on an investment portfolio
              management platform in SCPI.
            </PdfBulletLine>
            <PdfBulletLine>
              Development of a <PdfBold>Scrapping service</PdfBold> to retrieve
              public datas.
            </PdfBulletLine>
            <PdfBulletLine>
              Programming in <PdfBold>PHP</PdfBold> with a legacy framework and
              integration of <PdfBold>VueJS 2</PdfBold>.
            </PdfBulletLine>
            <PdfBulletLine>
              Working on improving the developer experience with{" "}
              <PdfBold>Docker containerization</PdfBold> and{" "}
              <PdfBold>Unit Testing</PdfBold>.
            </PdfBulletLine>
            <PdfBulletLine>
              <PdfBold>startup environment</PdfBold> and{" "}
              <PdfBold>small team</PdfBold>
            </PdfBulletLine>
          </CvExperienceItem>
        </View>
      </PdfContainer>
    </>
  );
};

CvExperiences.defaultProps = {};

export default CvExperiences;
