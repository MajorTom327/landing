import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Trans } from "react-i18next";

type Props = {};

const footerStyle = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 2,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#d0d0d0",
  },
});

export const CVFooter: React.FC<Props> = ({}) => {
  return (
    <>
      <View style={footerStyle.footer}>
        <Text>
          <Trans>footer</Trans>
        </Text>
      </View>
    </>
  );
};

CVFooter.defaultProps = {};

export default CVFooter;
