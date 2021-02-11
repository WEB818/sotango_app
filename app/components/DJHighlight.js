import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import Button from "./Button";

function DJHighlight({ image, color }) {
  return (
    <View style={styles.djContainer}>
      <Text style={styles.djheader} color={color}>
        DJ of the Week
      </Text>
      <View style={styles.djButtons}>
        <Button
          title="About"
          color="clear"
          width="40%"
          borderWidth={5}
          borderColor={colors.white}
          borderRadius={0}
        />
        <Button
          title="Schedule"
          color="clear"
          width="40%"
          borderWidth={5}
          borderColor={colors.white}
          borderRadius={0}
        />
      </View>
      <Image style={styles.image} source={image} />
    </View>
  );
}
const styles = StyleSheet.create({
  djButtons: {
    alignItems: "flex-end",
    height: "50%",
    top: "100%",
    width: "100%",
  },
  djContainer: {
    height: "50%",
    justifyContent: "flex-end",
    width: "100%",
  },

  djheader: {
    color: colors.white,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 52,
    marginRight: 10,
    textAlign: "right",
    top: "100%",
  },
  image: {
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: -100,
  },
});
export default DJHighlight;
