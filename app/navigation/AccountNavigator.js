import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CheckIns from "../components/CheckIns";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Check-Ins" component={CheckIns} />
    <Stack.Screen name="Bookmarks" component={CheckIns} />
    <Stack.Screen name="Favorites" component={CheckIns} />
    <Stack.Screen name="Friends" component={CheckIns} />
  </Stack.Navigator>
);

export default AccountNavigator;
