import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "./ListItem";
import ListItemDeleteAction from "./ListItemDeleteAction";
import ListItemSeparator from "./ListItemSeparator";
import Screen from "./Screen";

import colors from "../config/colors";

const initialCheckIns = [
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

function CheckIns(props) {
  const [checkIns, setCheckIns] = useState(initialCheckIns);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (checkIn) => {
    setCheckIns(checkIns.filter((c) => c.id !== checkIn.id));
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={checkIns}
          keyExtractor={(checkIn) => checkIn.id.toString()}
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
            setCheckIns([
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
    flex: 1,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
export default CheckIns;
