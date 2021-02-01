import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { AppText, AppHeader } from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/dancefloor.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/dancers.png")}
        ></Image>
        <AppHeader>SoTango</AppHeader>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Log In" onPress={() => console.log("Tapped")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("Tapped")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
export default WelcomeScreen;
