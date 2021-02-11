import React from "react";
import { View } from "react-native";
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
        alignItems: "center",
        backgroundColor,
        borderRadius: size / 2,
        height: size,
        justifyContent: "center",
        width: size,
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
