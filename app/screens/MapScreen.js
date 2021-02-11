import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { Header } from "../components/Text";
import colors from "../config/colors";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";

function MapScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          name="arrow-expand-right"
          onPress={() => navigation.openDrawer()}
          style={styles.swipe}
          size={30}
        />
        <Header>SoTango</Header>
      </View>
      <Image
        source={require("../assets/milongamap.jpg")}
        style={styles.image}
      />
      <MaterialCommunityIcons
        name="map-marker"
        style={styles.marker}
        size={50}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
  marker: {
    color: colors.secondary,
    position: "absolute",
    right: "10%",
    top: "50%",
    zIndex: 100,
  },
  swipe: {
    padding: 15,
    color: colors.primary,
  },
});

export default MapScreen;
