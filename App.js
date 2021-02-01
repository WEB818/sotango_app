import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "./app/screens/LoginScreen";
import MainScreen from "./app/screens/MainScreen";
import MainSearch from "./app/components/MainSearch";
import { AppHeader, AppText } from "./app/components/AppText";
import DJHighlight from "./app/components/DJHighlight";
import colors from "./app/config/colors";
import MainMap from "./app/components/MainMap";
import Footer from "./app/components/Footer";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ProfileScreen from "./app/screens/ProfileScreen";
import CheckInsScreen from "./app/screens/CheckInsScreen";
import ListItem from "./app/components/ListItem";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
const categories = [
  { id: 1, label: "Milonga", value: 1 },
  { id: 2, label: "Classes", value: 2 },
  { id: 3, label: "Music", value: 3 },
];
export default function App() {
  const [category, setCategory] = useState(categories[1]);

  return (
    // <View style={styles.container}>
    //   <DJHighlight
    //     title="DJ of the Week"
    //     color="secondary"
    //     image={require("./app/assets/djoftheweek.jpg")}
    //   ></DJHighlight>
    //   <MainSearch />
    //   <MainMap image={require("./app/assets/milongamap.jpg")} />
    //   <Footer />
    // </View>

    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder="Category"
        icon="apps"
      />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    top: "80%",
  },
});
