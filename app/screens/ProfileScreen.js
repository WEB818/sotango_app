import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ProfileItem from "../components/ProfileItem";
import Icon from "../components/Icon";
import colors from "../config/colors";

const initialMessages = [
  {
    id: 1,
    icon: require("../assets/dancers.png"),
    title: "Milonga LA",
  },
  {
    id: 2,
    icon: require("../assets/dancers.png"),
    title: "Milonga SF",
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
function ProfileScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen style={styles.screen}>
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

      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              icon={item.icon}
              title={item.title}
              onPress={() => console.log("selected", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              {
                id: 3,
                icon: require("../assets/dancers.png"),
                title: "M3",
              },
            ]);
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ProfileScreen;
