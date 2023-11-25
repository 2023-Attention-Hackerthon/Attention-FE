import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Wallet, WalletList } from "../../types/Wallet";
import { View, TouchableOpacity } from "react-native";
import Typography from "../../components/common/Typography";
import RoutePath from "../../navigation/routePath";

export default function MyWalletsScreen() {
  const navigation = useNavigation();

  const navigateDetailWalletPage = (wallet: Wallet) => {
    //@ts-ignore
    navigation.navigate(RoutePath.MyWalletDetailScreen, {
      params: {
        wallet,
      },
    });
  };

  const mockWallets: WalletList = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {mockWallets.map((wallet) => (
        <TouchableOpacity onPress={() => navigateDetailWalletPage(wallet)} key={wallet.id}>
          <Typography>내 지갑 페이지 {wallet.id}</Typography>
        </TouchableOpacity>
      ))}
    </View>
  );
}
