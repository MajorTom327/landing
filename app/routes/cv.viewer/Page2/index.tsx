import { Page, StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
import pageStyles, { pageSizeConfig } from '../config';
import CvExperiences from './CvExperiences';
import CvStudies from './CvStudies';

type Props = {
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
  },
});

export const Index: React.FC<Props> = ({}) => {

  return (<>
  <Page size={pageSizeConfig} style={pageStyles.page} wrap>
    <View style={styles.container}>
      <CvStudies />
      <CvExperiences />
    </View>
  </Page>
  </>);
}

Index.defaultProps = {
};

export default Index;
