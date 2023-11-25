import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import useToken from "../../hooks/useToken";
import Typography from "../../components/common/Typography";
import { View } from "react-native";

export default function LoginScreen({ navigation }) {
  const { setTokenStorage } = useToken();

  const login = () => {
    navigation.navigate("KakaoLoginWebview");
    // setTokenStorage("tokentoken");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity onPress={login}>
        <Typography>카카오 로그인</Typography>
      </TouchableOpacity>
    </View>
  );
}
