import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import FooterItem from "./FooterItem";
import Icon from "./Icon";

const footerItems = [
  {
    id: 1,
    icon: {
      name: "account",
      backgroundColor: colors.primary,
      iconColor: colors.white,
    },
    label: "Profile",
  },
  {
    id: 2,
    icon: {
      name: "map-marker",
      backgroundColor: colors.primary,
      iconColor: colors.white,
    },
    label: "Nearby",
  },
  {
    id: 3,
    icon: {
      name: "message-text",
      backgroundColor: colors.primary,
      iconColor: colors.white,
    },
    label: "DJs",
  },
  {
    id: 4,
    icon: {
      name: "message-text",
      backgroundColor: colors.primary,
      iconColor: colors.white,
    },
    label: "Nearby",
  },
];

function Footer(props) {
  const [active, setActive] = useState(false);
  const handleActive = (footerItem) => {
    setActive((footerItem) => footerItem.id);
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        scrollEnabled={false}
        data={footerItems}
        keyExtractor={(footerItem) => footerItem.id}
        renderItem={({ item }) => (
          <FooterItem
            IconComponent={
              <Icon
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
                iconColor={item.icon.iconColor}
              />
            }
            label={item.label}
            onPress={() => handleActive(item.id)}
            active={active}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: colors.secondary,
    alignItems: "center",
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
});
export default Footer;
