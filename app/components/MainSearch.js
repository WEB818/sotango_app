import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
function MainSearch(props) {
  return (
    <View style={styles.container}>
      <View style={styles.input}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: colors.white,
  },
});
export default MainSearch;
