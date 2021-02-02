import React from "react";
import { Text, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

function AppHeader({ children, style }) {
  return <Text style={[styles.header, style]}>{children}</Text>;
}

function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 52,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Menlo-BoldItalic",
  },
});
export { AppText, AppHeader };
