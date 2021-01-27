import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

import colors from "../config/colors";
function MainScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/dancers.png")}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 2,
    // justifyContent: "flex-end",
    // alignItems: "center",
  },
});

export default MainScreen;
