import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Header } from "../components/Text";
import Button from "../components/Button";

function WelcomeScreen({ navigation }) {
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
        <Header>SoTango</Header>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Log In" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
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
