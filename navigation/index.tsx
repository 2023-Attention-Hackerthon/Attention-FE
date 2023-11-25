import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../screens/NotFoundScreen";
import MainNavigator from "./MainNavigator";
import useAppRepository from "../hooks/useAppRepository";
import LoginScreen from "../screens/login/LoginScreen";
import RoutePath from "./routePath";
import KakaoLoginWebview from "../screens/login/KakaoLoginWebview";
import KakaoLoginRedirect from "../screens/login/KakaoLoginRedirect";

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
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isAuthenticated ? RoutePath.MainStack : RoutePath.LoginScreen}
    >
      {(() => {
        if (!isAuthenticated) {
          return (
            <>
              <Stack.Screen name={RoutePath.LoginScreen} component={LoginScreen} />
              <Stack.Screen name={RoutePath.KakaoLoginWebview} component={KakaoLoginWebview} />
              <Stack.Screen name={RoutePath.KakaoLoginRedirect} component={KakaoLoginRedirect} />
            </>
          );
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
