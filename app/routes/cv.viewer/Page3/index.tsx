import React from 'react';
import pageStyles, { pageSizeConfig, textSizes } from '../config';
import { Page, StyleSheet, View, Text } from '@react-pdf/renderer';
import PdfTitle from '~/components/PdfTitle';
import PdfKeyValue from '~/components/PdfKeyValue/PdfKeyValue';
import { documentStyle } from '~/refs/constants';
import { useTranslation } from 'react-i18next';

type Props = {
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 70,
    margin: documentStyle.margin,
    padding: documentStyle.padding,
  },
  group: {
    flexDirection: 'column',
    gap: 7,
  },
  contentText: {
    fontSize: textSizes.content,
  }
});

export const Index: React.FC<Props> = ({}) => {
  const { t } =  useTranslation("cv");
  return (<>
  <Page size={pageSizeConfig} style={pageStyles.page}>
    <View style={styles.container}>
      <View style={styles.group}>
        <PdfTitle>inactivity.title</PdfTitle>
        <PdfKeyValue name="inactivity.items.0.title" value="inactivity.items.0.value" />
        <PdfKeyValue name="inactivity.items.1.title" value="inactivity.items.1.value" />
      </View>
      <View style={styles.group}>
        <PdfTitle>travels.title</PdfTitle>
        <PdfKeyValue name="travels.items.0.title" value="travels.items.0.value" />
        <PdfKeyValue name="travels.items.1.title" value="travels.items.1.value" />
      </View>
      <View style={styles.group}>
        <PdfTitle>hobbies.title</PdfTitle>
        <Text style={styles.contentText}>{t("hobbies.value")}</Text>
      </View>
    </View>
  </Page>
  </>);
}

Index.defaultProps = {
};

export default Index;
