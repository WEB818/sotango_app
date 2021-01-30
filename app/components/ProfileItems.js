import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ProfileItems({
  image,
  name,
  location,
  friends,
  checkIns,
  reviews,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/dancers.png")} />
      <MaterialCommunityIcons
        name="magnify-plus-outline"
        size={35}
        color={colors.white}
      />

      <MaterialCommunityIcons
        name="comment-edit-outline"
        size={35}
        color={colors.white}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "red",
    width: "100%",
    height: 70,
  },
});
export default ProfileItems;
