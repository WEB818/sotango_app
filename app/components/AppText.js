import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function AppHeader({ children, style }) {
  return <Text style={[styles.header, style]}>{children}</Text>;
}

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 52,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export { AppText, AppHeader };
