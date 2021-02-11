import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MapScreen from "../screens/MapScreen";

const Drawer = createDrawerNavigator();

const MapNavigator = () => (
  <Drawer.Navigator initialRouteName="Milongas">
    <Drawer.Screen name="Milongas" component={MapScreen} />
    <Drawer.Screen name="Dancers" component={MapScreen} />
    <Drawer.Screen name="DJs" component={MapScreen} />
    <Drawer.Screen name="Classes" component={MapScreen} />
  </Drawer.Navigator>
);

export default MapNavigator;
