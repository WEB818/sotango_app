import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ProfileItem({ IconComponent, count }) {
  return (
    <View>
      <View style={styles.container}>
        {IconComponent}
        <Text style={styles.text}>{count}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 10,
    paddingTop: 10,
  },
});
export default ProfileItem;
