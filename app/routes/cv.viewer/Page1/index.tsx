import { Page } from '@react-pdf/renderer';
import React from 'react';
import pageStyles, { pageSizeConfig } from '../config';
import CvCompetences from './CvCompetences';
import CvContact from './CvContact';

type Props = {
};

export const Index: React.FC<Props> = ({}) => {
  return (<>
  <Page size={pageSizeConfig} style={pageStyles.page}>
      <CvContact />
      <CvCompetences />
    </Page>
  </>);
}

Index.defaultProps = {
};

export default Index;
