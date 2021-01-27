import React from "react";
import { Image, StyleSheet, View } from "react-native";

function MainMap({ image }) {
  return (
    <View>
      <Image source={image} />
    </View>
  );
}
const styles = StyleSheet.create({});
export default MainMap;
