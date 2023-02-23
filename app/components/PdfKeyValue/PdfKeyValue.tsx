import React from 'react';
import { Text, StyleSheet, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import { textSizes } from '~/routes/cv.viewer/config';

type Props = {
  name: string;
  value: string;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'baseline'
  },
  keyName: {
    fontSize: textSizes.content,
    textDecoration: 'underline',
  },
  keyValue: {
    fontSize: textSizes.content,
  }
});

export const PdfKeyValue: React.FC<Props> = ({ name, value }) => {
  const { t } =  useTranslation("cv");
  return (<>
  <View style={styles.container}>
    <Text style={styles.keyName}>{t(name)}:</Text>
    <Text style={styles.keyValue}>{t(value)}</Text>


  </View>
  </>);
}

PdfKeyValue.defaultProps = {
};

export default PdfKeyValue;
