import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoutePath from "./routePath";
import MyCardDetailScreen from "../screens/MyCardDetailScreen";
import MyCardsScreen from "../screens/MyCardsScreen";

const NativeStack = createNativeStackNavigator();

export default function MyCardTabNavigator() {
  return (
    <NativeStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <NativeStack.Screen name={RoutePath.MyCardsScreen} component={MyCardsScreen} />
      <NativeStack.Screen name={RoutePath.MyCardDetailScreen} component={MyCardDetailScreen} />
    </NativeStack.Navigator>
  );
}
