import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, ImageSourcePropType, SafeAreaView, StyleSheet } from "react-native";
import Typography from "../../components/common/Typography";
import RoutePath from "../../navigation/routePath";
import Colors from "../../constants/Colors";
import baseAxios from "../../apis/baseAxios";

interface WalletProps {
  createdDate: string;
  id: number;
  imageUrls: any[];
  modifiedDate: string;
  name: string;
  status: string;
  user: {
    authInfo: { accountStatus: string; email: string; loginType: string; role: string };
    createdDate: string;
    id: number;
    modifiedDate: string;
    name: null;
    universityName: null;
  };
}

export default function MyWalletsScreen() {
  const navigation = useNavigation();

  const [wallets, setWallets] = useState<WalletProps[]>([]);

  const navigateDetailWalletPage = (wallet: number) => {
    //@ts-ignore
    navigation.navigate(RoutePath.MyWalletDetailScreen, {
      params: {
        wallet,
      },
    });
  };

  useEffect(() => {
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
    baseAxios
      .get("/api/wallets", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setWallets(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
        {wallets.map((wallet: WalletProps, idx: number) => {
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
            <TouchableOpacity style={{ alignItems: "center", marginBottom: 20 }} onPress={() => navigateDetailWalletPage(wallet.id)} key={wallet.id}>
              <Image source={url} style={{ width: 80, height: 112, marginBottom: 8 }} />
              <Typography>{wallet.name}</Typography>
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
