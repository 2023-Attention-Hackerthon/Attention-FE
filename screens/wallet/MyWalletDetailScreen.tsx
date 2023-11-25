import React from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Typography from "../../components/common/Typography";

type ParamType = {
  wallet: { params: { wallet: number } };
};

type DetailScreenProps = NativeStackScreenProps<ParamType, "wallet">;

export default function MyWalletDetailScreen({
  // navigation: { setOptions },
  route: { params },
}: DetailScreenProps) {
  const { wallet } = params.params;
  // const walletToJSON = JSON.stringify(wallet);
  // console.log(walletToJSON);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Typography>내 지갑 {wallet} 디테일 페이지</Typography>
    </View>
  );
}
