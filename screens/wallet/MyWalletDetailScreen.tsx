import React from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Typography from "../../components/common/Typography";
import { Wallet } from "../../types/Wallet";

type ParamType = {
  wallet: Wallet;
};

type DetailScreenProps = NativeStackScreenProps<ParamType, "wallet">;

export default function MyWalletDetailScreen({
  // navigation: { setOptions },
  route: { params },
}: DetailScreenProps) {
  const { id } = params;

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Typography>내 지갑 {id} 디테일 페이지</Typography>
    </View>
  );
}
