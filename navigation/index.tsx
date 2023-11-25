import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../screens/NotFoundScreen";
import MainNavigator from "./MainNavigator";
import useAppRepository from "../hooks/useAppRepository";
import LoginScreen from "../screens/LoginScreen";
import RoutePath from "./routePath";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  const { isAuthenticated } = useAppRepository();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isAuthenticated ? RoutePath.MainStack : RoutePath.LoginScreen}
    >
      {(() => {
        if (!isAuthenticated) {
          return <Stack.Screen name={RoutePath.LoginScreen} component={LoginScreen} />;
        }
        return (
          <>
            <Stack.Screen name={RoutePath.MainStack} component={MainNavigator} />
            <Stack.Screen
              name={RoutePath.NotFoundScreen}
              component={NotFoundScreen}
              options={{ title: "Oops!" }}
            />
          </>
        );
      })()}
    </Stack.Navigator>
  );
}
