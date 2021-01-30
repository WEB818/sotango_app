import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ProfileItem({ IconComponent, count }) {
  return (
    <View style={styles.container}>
      {IconComponent}
      <Text style={styles.text}>{count}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 10,
    alignItems: "center",
  },
});
export default ProfileItem;
