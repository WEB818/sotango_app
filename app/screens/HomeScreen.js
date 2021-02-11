import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import DJHighlight from "../components/DJHighlight";

import Screen from "../components/Screen";
import Search from "../components/Search";

function HomeScreen(props) {
  return (
    <Screen>
      <DJHighlight image={require("../assets/djoftheweek.jpg")} />
      <View style={styles.buttonContainer}>
        <Search width="80%" />
        <Button title="Search" width="25%" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.8,
    width: "100%",
  },
});
export default HomeScreen;
