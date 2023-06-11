import { documentStyle } from "~/refs/constants";
import { StyleSheet } from "@react-pdf/renderer";

export const pageStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
    padding: documentStyle.padding,
    fontWeight: "normal",
  },
});

export const textSizes = {
  title: 14,
  subtitle: 12,
  content: 10,
};

export const pageSizeConfig = "LETTER";

export default pageStyles;
