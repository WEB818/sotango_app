import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    id: 1,
    title: "4",
    icon: {
      name: "human",
      backgroundColor: colors.primary,
    },
  },
  {
    id: 2,
    title: "4",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.secondary,
    },
  },
  {
    id: 3,
    title: "4",
    icon: {
      name: "message-text",
      backgroundColor: colors.secondary,
    },
  },
];

function CheckInsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          icon={require("../assets/djoftheweek.jpg")}
          title="DJ Meow o'Neva"
        />
      </View>
      <View style={styles.detailsContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.id}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  detailsContainer: {
    flexDirection: "row",
  },
  screen: {
    backgroundColor: colors.light,
  },
});
export default CheckInsScreen;
