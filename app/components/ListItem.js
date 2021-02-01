import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { AppText } from "./AppText";
import colors from "../config/colors";

function ListItem({ icon, IconComponent, title, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {icon && <Image style={styles.icon} source={icon} />}
          <View style={styles.detailsContainer}>
            <AppText>{title}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
export default ListItem;
