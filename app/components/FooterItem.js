import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";

function FooterItem({ active, IconComponent, label }) {
  return (
    <TouchableWithoutFeedback
      active={active}
      onPress={() => console.log(active)}
    >
      {active ? (
        <View style={styles.active}>
          {IconComponent}
          <Text style={styles.text} onPress={() => console.log(active)}>
            {label}
          </Text>
        </View>
      ) : (
        <Text style={styles.text}>{label} inactive</Text>
      )}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: colors.white,
    padding: 10,
    alignItems: "center",
  },
  container: {
    padding: 10,
  },
  text: {
    color: colors.primary,
    fontSize: 30,
  },
});
export default FooterItem;
