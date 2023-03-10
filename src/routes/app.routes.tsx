import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";
import { MoviesDescription } from "../screens/MoviesDescription";
import { Favorites } from "../screens/Favorites";

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
      <Screen name="Favorites" component={Favorites} />
      <Screen name="MoviesDescription" component={MoviesDescription} />
    </Navigator>
  );
}
