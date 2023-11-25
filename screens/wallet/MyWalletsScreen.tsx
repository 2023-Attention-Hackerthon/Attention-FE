import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Wallet, WalletList } from "../../types/Wallet";
import { View, TouchableOpacity, Image, ImageSourcePropType, SafeAreaView, Text, StyleSheet } from "react-native";
import Typography from "../../components/common/Typography";
import RoutePath from "../../navigation/routePath";
import Colors from "../../constants/Colors";

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

  const mockWallets: WalletList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
        {mockWallets.map((wallet, idx) => {
          let url: ImageSourcePropType | undefined;
          switch (idx % 3) {
            case 0:
              url = require("../../assets/images/wallet-1.png");
              break;
            case 1:
              url = require("../../assets/images/wallet-2.png");
              break;
            case 2:
              url = require("../../assets/images/wallet-3.png");
              break;
            default:
              url = require("../../assets/images/wallet-1.png");
              break;
          }
          return (
            <TouchableOpacity style={{ alignItems: "center", marginBottom: 20 }} onPress={() => navigateDetailWalletPage(wallet)} key={wallet.id}>
              <Image source={url} style={{ width: 80, height: 112, marginBottom: 8 }} />
              <Typography>내 지갑 페이지 {wallet.id}</Typography>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={{ borderWidth: 1, borderRadius: 99, marginBottom: 60, marginHorizontal: 15, backgroundColor: Colors.primary.normal }}>
        <Typography style={{ textAlign: "center", paddingVertical: 8 }}>지갑 만들기</Typography>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
});
