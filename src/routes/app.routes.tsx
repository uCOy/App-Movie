import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";
import { MoviesDescription } from "../screens/MoviesDescription";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Search} />
      <Screen name="MoviesDescription" component={MoviesDescription} />
    </Navigator>
  );
}
