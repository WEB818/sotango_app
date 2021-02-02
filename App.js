import React from "react";

import { StyleSheet } from "react-native";

import colors from "./app/config/colors";
import RegistrationScreen from "./app/screens/RegistrationScreen";

export default function App() {
  return <RegistrationScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    top: "80%",
  },
});
