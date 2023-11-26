import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, ImageSourcePropType, SafeAreaView } from "react-native";
import Typography from "../../components/common/Typography";
import RoutePath from "../../navigation/routePath";
import Colors from "../../constants/Colors";
import { baseAxios } from "../../apis/baseAxios";
import { useQuery } from "@tanstack/react-query";
import { WalletList } from "../../types/Wallet";
import { ErrorText, LoadingText } from "./MyWalletDetailScreen";

export default function MyWalletsScreen() {
  const navigation = useNavigation();

  const [wallets, setWallets] = useState<WalletList>([]);

  const navigateDetailWalletPage = (id: number) => {
    //@ts-ignore
    navigation.navigate(RoutePath.MyWalletDetailScreen, {
      params: {
        id,
      },
    });
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getWalletList"],
    queryFn: getWalletList,
    refetchOnMount: true,
  });

  useEffect(() => {
    if (data) {
      setWallets(data.data);
    }
  }, [data]);

  if (isError) {
    return <ErrorText />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "space-between" }}>
      {isLoading || !wallets ? (
        <LoadingText />
      ) : (
        <>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
            {wallets.map((wallet, idx: number) => {
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
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 99,
              marginBottom: 60,
              marginHorizontal: 15,
              backgroundColor: Colors.primary.normal,
            }}
          >
            <Typography style={{ textAlign: "center", paddingVertical: 8 }}>지갑 만들기</Typography>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}

export const getWalletList = async () => {
  const { data } = await baseAxios.get(`/api/wallets`);
  return data;
};
