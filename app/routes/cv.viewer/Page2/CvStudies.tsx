import { View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PdfTitle from '~/components/PdfTitle';
import { textSizes } from '../config';
import PdfList from '../../../components/PdfList/PdfList';

type Props = {
};

const styles = StyleSheet.create({
  section: {
    fontSize: textSizes.title,
    flexDirection: 'column',
    gap: 20,
  },
});

export const CvStudies: React.FC<Props> = ({}) => {
  const { t } = useTranslation("cv");

  return (<><View style={styles.section}>
      <PdfTitle>studies.title</PdfTitle>
      <PdfList item={{ title: 'studies.college.title', content: 'studies.college.level'}} />
      <PdfList item={{ title: 'studies.university.title', content: 'studies.university.level'}} />
    </View></>);
}

CvStudies.defaultProps = {
};

export default CvStudies;
