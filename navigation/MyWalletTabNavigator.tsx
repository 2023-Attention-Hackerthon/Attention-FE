import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoutePath from "./routePath";
import MyWalletsScreen from "../screens/wallet/MyWalletsScreen";
import MyWalletDetailScreen from "../screens/wallet/MyWalletDetailScreen";
import { tabNavigatorOptions } from "./options";

const NativeStack = createNativeStackNavigator();

export default function MyWalletTabNavigator() {
  return (
    <NativeStack.Navigator screenOptions={{ ...tabNavigatorOptions, headerTitle: "지갑" }}>
      <NativeStack.Screen name={RoutePath.MyWalletsScreen} component={MyWalletsScreen} options={{ headerShadowVisible: false, headerTitleStyle: {} }} />
      <NativeStack.Screen name={RoutePath.MyWalletDetailScreen} component={MyWalletDetailScreen} />
    </NativeStack.Navigator>
  );
}
