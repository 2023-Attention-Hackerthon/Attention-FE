import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import useToken from "../hooks/useToken";
import Typography from "../components/common/Typography";
import { View } from "react-native";

export default function LoginScreen() {
  const { setTokenStorage } = useToken();

  const login = () => {
    setTokenStorage("tokentoken");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity onPress={login}>
        <Typography>로그인로그인</Typography>
      </TouchableOpacity>
    </View>
  );
}
