import { View, StyleSheet } from "@react-pdf/renderer";
import { isNilOrEmpty } from "ramda-adjunct";
import React, { useMemo } from "react";
import PdfProjects from "~/components/PdfProjects";
import PdfTitle from "~/components/PdfTitle";
import { textSizes } from "../../../refs/PdfConfig";
import PdfContainer from "~/components/PdfContainer/PdfContainer";
import { PdfProjectsDescription } from "~/components/PdfProjects/PdfProjects";
import { PdfBold } from "~/components/PdfBold";
import { compose, map, reject } from "ramda";

type ProjectName = "The DeadSafe" | "BaseMint" | "Andromeda" | "Styx" | "Bellz";

type Project = {
  title: ProjectName;
  to?: string;
  description: React.ReactNode[];
};

const orderedProjects: ProjectName[] = [
  "Styx",
  "Bellz",
  "Andromeda",
  "The DeadSafe",
  "BaseMint",
];

const projects: Project[] = [
  {
    title: "The DeadSafe",
    to: "https://the-deadsafe.com",
    description: [
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        The DeadSafe project is an ambitious{" "}
        <PdfBold>decentralized management game based on NFTs</PdfBold>, with the
        aim of unlocking access to a safe.
      </PdfProjectsDescription>,
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        DeadSafe is currently being developed. However, partial documentation of
        the project is already available on the website
      </PdfProjectsDescription>,
    ],
  },
  {
    title: "BaseMint",
    to: "https://github.com/MajorTom327/basemint",
    description: [
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        The Basemint project is a fan art whose goal is to learn about using{" "}
        <PdfBold>web3</PdfBold> and interacting with an{" "}
        <PdfBold>Ethereum contract</PdfBold>. In this case, the contract is for
        VirtueAnimation's BaseMint Buds NFT.
      </PdfProjectsDescription>,
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        I was able to learn how to display the basic information of a contract
        and interact with it through <PdfBold>JavaScript.</PdfBold>
      </PdfProjectsDescription>,
    ],
  },
  {
    title: "Andromeda",
    to: "https://github.com/MajorTom327/andromeda",
    description: [
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        Andromeda is an application designed to help developers better manage
        their time and remember what they accomplished the previous day. It
        offers an <PdfBold>easy-to-use Kanban interface</PdfBold> that allows
        developers to track their work day and recall what they accomplished
        during their Daily. This application is developed in{" "}
        <PdfBold>Meteor with React and uses MongoDB</PdfBold> as its database.
        It enables developers to better organize their work and{" "}
        <PdfBold>track their progress effectively.</PdfBold>
      </PdfProjectsDescription>,
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        I was able to take advantage of creating this application to work on an
        interface that provides a visual state of things through page
        animations.
      </PdfProjectsDescription>,
    ],
  },
  {
    title: "Styx",
    description: [
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        Styx is a <PdfBold>client management application</PdfBold> for
        crematoriums. It allows easy management of deceased clients and
        associated information.
      </PdfProjectsDescription>,
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        This application is a <PdfBold>complete SaaS</PdfBold> developed
        independently to quickly meet a need. It required a long development
        time but is still in production with regular updates to continue to meet
        the needs.
      </PdfProjectsDescription>,
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        The current version is in PHP with MariaDB, but developments are focused
        on implementation through a{" "}
        <PdfBold>
          TypeScript stack using Remix, TailwindCSS, and Postgresql.
        </PdfBold>
      </PdfProjectsDescription>,
    ],
  },
  {
    title: "Bellz",
    to: "https://bellz.styx-sys.com",
    description: [
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        Bellz is a <PdfBold>personal accounting management application</PdfBold>{" "}
        that helps individuals better manage their finances. It lists
        transactions and accounts in an organized manner, facilitating financial
        decision making. The application also allows users to share this
        information with others, which can be useful when working as a couple or
        as a family. Available as a web service, Bellz allows users to track
        their accounting from anywhere and at any time. By using this
        application, individuals can more efficiently and effectively reach
        their financial goals."
      </PdfProjectsDescription>,
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        This application was built around <PdfBold>Remix</PdfBold> to learn how
        to use this framework as well as learn some optimization techniques to
        reduce loading time and make the application as fast as possible. It was
        designed to allow for <PdfBold>JavaScript-free</PdfBold> use on the
        front-end as well as in highly degraded network conditions.
      </PdfProjectsDescription>,
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        It also allowed me to create a{" "}
        <PdfBold>
          project foundation based on Remix, TailwindCSS, and Revolut
        </PdfBold>{" "}
        in order to have a complete and performant SaaS service template.
      </PdfProjectsDescription>,
      // eslint-disable-next-line react/jsx-key
      <PdfProjectsDescription>
        This application is currently in production and used by my family to
        manage the budget and finances.
      </PdfProjectsDescription>,
    ],
  },
];

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

export const CvProjects: React.FC = () => {
  const projectInOrder: Project[] = useMemo(() => {
    return compose(
      reject(isNilOrEmpty) as (a: Array<Project | undefined>) => Project[],
      map((projectName: ProjectName) => {
        return projects.find((project) => project.title === projectName);
      }) as (a: ProjectName[]) => Array<Project | undefined>
    )(orderedProjects);
  }, []);

  return (
    <>
      <PdfContainer>
        <PdfTitle>Personal projects</PdfTitle>

        <View style={styles.expContainer}>
          {projectInOrder.map((project) => (
            <PdfProjects
              key={project.title}
              title={project.title}
              to={project.to}
            >
              {project.description}
            </PdfProjects>
          ))}
        </View>
      </PdfContainer>
    </>
  );
};

CvProjects.defaultProps = {};

export default CvProjects;
