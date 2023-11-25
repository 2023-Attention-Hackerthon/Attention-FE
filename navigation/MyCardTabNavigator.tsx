import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoutePath from "./routePath";
import MyCardDetailScreen from "../screens/card/MyCardDetailScreen";
import MyCardsScreen from "../screens/card/MyCardsScreen";
import { tabNavigatorOptions } from "./options";
import CreateCardButton from "../components/CreateCardButton";

const NativeStack = createNativeStackNavigator();

export default function MyCardTabNavigator() {
  return (
    <NativeStack.Navigator
      initialRouteName={RoutePath.MyCardsScreen}
      screenOptions={{
        ...tabNavigatorOptions,
        headerTitle: "카드",
        headerTitleAlign: "left",
        headerRight: CreateCardButton,
      }}
    >
      <NativeStack.Screen name={RoutePath.MyCardsScreen} component={MyCardsScreen} />
      <NativeStack.Screen name={RoutePath.MyCardDetailScreen} component={MyCardDetailScreen} />
    </NativeStack.Navigator>
  );
}
