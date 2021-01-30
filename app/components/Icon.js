import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function Icon({
  name,
  size = 40,
  backgroundColor = "#fff",
  iconColor = "#000",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
