import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.info}>
          <MaterialCommunityIcons
            name="magnify-plus-outline"
            size={35}
            color={colors.white}
          />
        </View>
        <View style={styles.review}>
          <MaterialCommunityIcons
            name="map-marker-remove-outline"
            size={35}
            color={colors.white}
            onPress={onPress}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 140,

    alignItems: "center",
  },
  info: {
    backgroundColor: colors.primary,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  review: {
    backgroundColor: colors.secondary,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListItemDeleteAction;
