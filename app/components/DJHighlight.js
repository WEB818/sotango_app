import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppButton from "./AppButton";

import { AppHeader } from "./AppText";

function DJHighlight({ image, color }) {
  return (
    <View style={styles.dj}>
      <Text style={styles.djheader} color={color}>
        DJ of the Week
      </Text>
      <View style={styles.detailsContainer}>
        <AppButton title="About" color="clear" width="40%" />
        <AppButton title="Schedule" color="clear" width="40%" />
      </View>
      <Image style={styles.image} source={image} />
    </View>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    top: "40%",
  },
  dj: {
    marginTop: 20,
    width: "100%",
    height: "40%",
  },
  djheader: {
    color: colors.white,
    top: "30%",
    textAlign: "right",
    fontSize: 52,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  image: {
    height: "100%",
    width: "100%",
    zIndex: -100,
  },
});
export default DJHighlight;
