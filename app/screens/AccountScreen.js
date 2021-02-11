import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ProfileItem from "../components/ProfileItem";
import CheckInsScreen from "../screens/CheckInsScreen";

const menuItems = [
  {
    targetScreen: "Check-Ins",
    title: "My Check-Ins",
    icon: {
      name: "map-marker-check",
      backgroundColor: colors.secondary,
      iconColor: colors.primary,
    },
  },
  {
    targetScreen: "Bookmarks",
    title: "My Bookmarks",
    icon: {
      name: "bookmark",
      backgroundColor: colors.secondary,
      iconColor: colors.primary,
    },
  },
  {
    targetScreen: "Favorites",
    title: "My Favorites",
    icon: {
      name: "heart",
      backgroundColor: colors.secondary,
      iconColor: colors.primary,
    },
  },
  {
    targetScreen: "Friends",
    title: "My Friends",
    icon: {
      name: "account-group",
      backgroundColor: colors.secondary,
      iconColor: colors.primary,
    },
  },
];
const profileItems = [
  {
    id: 1,
    icon: {
      name: "account-group",
      backgroundColor: colors.white,
      iconColor: colors.primary,
    },
    count: 4,
  },
  {
    id: 2,
    icon: {
      name: "map-marker",
      backgroundColor: colors.white,
      iconColor: colors.primary,
    },
    count: 10,
  },
  {
    id: 3,
    icon: {
      name: "message-text",
      backgroundColor: colors.white,
      iconColor: colors.primary,
    },
    count: 10,
  },
];
function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Yelizaveta"
          location="Los Angeles, CA"
          icon={require("../assets/djoftheweek.jpg")}
          style={styles.user}
        />
        <FlatList
          horizontal={true}
          data={profileItems}
          keyExtractor={(profileItem) => profileItem.id}
          renderItem={({ item }) => (
            <ProfileItem
              count={item.count}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  iconColor={item.icon.iconColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  iconColor={item.icon.iconColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon
            name="logout"
            backgroundColor={colors.primary}
            iconColor={colors.secondary}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  screen: {
    backgroundColor: colors.light,
  },
  user: {
    backgroundColor: "transparent",
  },
});

export default AccountScreen;
