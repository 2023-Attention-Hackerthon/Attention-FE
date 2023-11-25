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
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import Typography from "../components/common/Typography";

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
  const Home = ({ navigation }) => {
    // 로그인 여부에 따른 navigation 동작 여부
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/images/main.png")} style={styles.backgroundImage} />
        <View style={styles.titleWrap}>
          <Typography style={styles.title}>SNS 계정으로 빨리 시작해 보세요</Typography>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              navigation.navigate(RoutePath.MainStack);
            }}
          >
            <Image source={require("../assets/images/kakao.png")} style={styles.loginIcon} alt="kakao-icon" />
          </TouchableOpacity>
        </View>
        {/* 로그인 여부에 따른 버튼 노출 여부 */}
      </View>
    );
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName={isAuthenticated ? RoutePath.MainStack : RoutePath.LoginScreen}
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
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name={RoutePath.MainStack} component={MainNavigator} options={{ gestureEnabled: false }} />
            <Stack.Screen name={RoutePath.NotFoundScreen} component={NotFoundScreen} options={{ title: "Oops!" }} />
          </>
        );
      })()}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  titleWrap: {
    flex: 1,
    position: "absolute",
    display: "flex",
    alignSelf: "center",
    bottom: 110,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
  },
  loginButton: {
    alignItems: "center",
  },
  loginIcon: {
    width: 48,
    height: 48,
    marginTop: 16,
  },
});
