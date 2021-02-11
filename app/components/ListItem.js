import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { AppText } from "./Text";
import colors from "../config/colors";

function ListItem({
  icon,
  IconComponent,
  location,
  title,
  onPress,
  renderRightActions,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={[styles.container, style]}>
          {IconComponent}
          {icon && <Image style={styles.icon} source={icon} />}
          <View style={styles.detailsContainer}>
            <AppText>{title}</AppText>
            {location && <AppText>{location}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  icon: {
    height: 40,
    width: 40,
  },
});
export default ListItem;
