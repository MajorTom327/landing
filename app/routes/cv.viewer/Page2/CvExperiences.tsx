import { View, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PdfTitle from '~/components/PdfTitle';
import { documentStyle } from '~/refs/constants';
import { textSizes } from '../config';
import PdfList from '../../../components/PdfList/PdfList';

type Props = {
};

const styles = StyleSheet.create({
  container: {
    fontSize: textSizes.title,
    margin: documentStyle.margin,
    padding: documentStyle.padding,
    flexDirection: 'column',
    gap: 20,
  },
  expContainer: {
    fontSize: textSizes.title,
    flexDirection: 'column',
    gap: 25,
  },
});

const items = Array.from({length: 7 }, (_, i) => `experiences.items.${i}`);

export const CvExperiences: React.FC<Props> = ({}) => {

  return (<>
    <View style={styles.container}>
      <PdfTitle>experiences.title</PdfTitle>

      <View style={styles.expContainer}>
      {items.map((item) => (
        <PdfList key={item} item={{ title: `${item}.title`, content: `${item}.value`}} />
      ))}
      </View>
    </View>
  </>);
}

CvExperiences.defaultProps = {
};

export default CvExperiences;
