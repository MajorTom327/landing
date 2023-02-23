import { documentStyle } from "~/refs/constants";
import { StyleSheet } from "@react-pdf/renderer";

export const pageStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: documentStyle.padding,
  },
});

export const textSizes = {
  title: 18,
  subtitle: 16,
  content: 14
}

export const pageSizeConfig = "LETTER"

export default pageStyles;
