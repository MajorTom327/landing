import { View, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { documentStyle } from '~/refs/constants';
import { textSizes } from '../../routes/cv.viewer/config';

type Item = {
  title: string;
  content: string;
}

type Props = {
  item: Item
};

const styles = StyleSheet.create({
  section: {
    fontSize: textSizes.title,
    margin: documentStyle.margin,
    padding: documentStyle.padding,
    flexDirection: 'column',
    gap: 20,
  },
  blockGroup: {
    flexDirection: 'column',
    gap: 5,
  },
  blockTitle: {
    fontSize: textSizes.subtitle,
    textDecoration: 'underline',
  },
  blockContent: {
    fontSize: textSizes.content,
    textAlign: 'justify'
  }
});


export const PdfList: React.FC<Props> = ({ item }) => {
  const { t } = useTranslation("cv");
  return (<>
    <View style={styles.blockGroup} wrap={false}>
      <Text style={styles.blockTitle}>{t(item.title)}</Text>
      <Text style={styles.blockContent}>{t(item.content)}</Text>
    </View>
  </>);
}

PdfList.defaultProps = {
};

export default PdfList;
