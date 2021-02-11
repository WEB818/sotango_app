import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function Button({
  title,
  onPress,
  color = "primary",
  width = "100%",
  borderWidth,
  borderColor,
  borderRadius = 25,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,

        {
          backgroundColor: colors[color],
          width: width,
          borderWidth: borderWidth,
          borderColor: borderColor,
          borderRadius: borderRadius,
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 10,
    padding: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Button;
