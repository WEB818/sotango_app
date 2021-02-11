import React from "react";

import TextInput from "../components/TextInput";
import { StyleSheet, View } from "react-native";

function Search({ width = "100%" }) {
  return (
    <View style={styles.container}>
      <TextInput
        icon="magnify"
        placeholder="Search for milongas, DJs, classes, music"
        style={[styles.input, { width: width }]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {},
});
export default Search;
