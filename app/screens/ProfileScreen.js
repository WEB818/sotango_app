import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
80;
import colors from "../config/colors";
function ProfileScreen(props) {
  return (
    <View style={styles.checkInContainer}>
      <View style={styles.checkIn}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  checkInContainer: {
    alignItems: "center",
    backgroundColor: colors.primary,
    justifyContent: "center",
  },
  checkIn: {
    height: 40,
    width: "70%",
  },
});
export default ProfileScreen;
