import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import CheckIns from "../components/CheckIns";

function CheckInsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <CheckIns />
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default CheckInsScreen;
