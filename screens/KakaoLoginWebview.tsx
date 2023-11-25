import React from "react";
import { Dimensions } from "react-native";
import WebView from "react-native-webview";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URL } from "@env";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function KakaoLoginWebview({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.webview}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=code`,
        }}
        onNavigationStateChange={(e) => {
          if (e.navigationType === "formsubmit") {
            console.log("제출됨");
            console.log(e);
            navigation.navigate("KakaoLoginRedirect", {
              token: e.url.split("code=")[1],
            });
          }
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});
