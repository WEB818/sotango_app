import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function Footer(props) {
  return (
    <View style={styles.footerContainer}>
      <Text>Footer section: [Me, Nearby, DJs, Explore]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    height: 50,
    backgroundColor: colors.secondary,
  },
});
export default Footer;
