import React from 'react';
import { useTranslation } from 'react-i18next';
import { textSizes } from '~/routes/cv.viewer/config';
import { Text, StyleSheet } from '@react-pdf/renderer';

type Props = {
  children: string
};

const styles = StyleSheet.create({
  title: {
    fontSize: textSizes.title,
    marginBottom: 5
  },
});

export const PdfTitle: React.FC<Props> = ({ children }) => {
  const { t } = useTranslation("cv");
  return (<>
  <Text style={styles.title}>{t(children)}</Text>
  </>);
}

PdfTitle.defaultProps = {
};

export default PdfTitle;
