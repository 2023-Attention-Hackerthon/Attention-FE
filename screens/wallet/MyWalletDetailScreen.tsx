import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import Typography, { TextType } from "../../components/common/Typography";
import { baseAxios } from "../../apis/baseAxios";
import { useQuery } from "@tanstack/react-query";
import _ from "lodash";
import Colors from "../../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../constants/screenSize";

export default function MyWalletDetailScreen({
  // navigation: { setOptions },
  route: {
    params: { params },
  },
}: any) {
  const { id } = params;
  const [imageFileUrls, setImageFileUrls] = useState<string[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getWallet", id],
    queryFn: () => getWallet(id),
    enabled: Boolean(id),
  });

  useEffect(() => {
    if (data) {
      setImageFileUrls(data.data.imageUrls);
    }
  }, [data]);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {(() => {
        if (isError) {
          return <ErrorText />;
        }
        if (isLoading) {
          return <LoadingText />;
        }
        if (_.isEmpty(imageFileUrls)) {
          return (
            <View style={{ justifyContent: "center", alignItems: "center", gap: 20 }}>
              <View style={{ justifyContent: "center", alignItems: "center", gap: 5 }}>
                <Typography style={{ color: Colors.text.alternative }} type={TextType.Title1}>
                  지갑 안에
                </Typography>
                <Typography style={{ color: Colors.text.alternative }} type={TextType.Title1}>
                  카드가 없어요
                </Typography>
              </View>
              <Typography style={{ color: Colors.text.alternative }} type={TextType.Body2}>
                카드를 추가해주세요
              </Typography>
            </View>
          );
        }
        return (
          // <View
          //   style={{
          //     padding: 20,
          //     justifyContent: "center",
          //   }}
          // >
          //   <FlatList
          //     ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          //     data={imageFileUrls}
          //     renderItem={({ item }) => (
          //       <View style={{ flex: 1 }}>
          //         <Image
          //           key={item}
          //           style={{
          //             width: SCREEN_WIDTH / 3,
          //             height: SCREEN_HEIGHT / 4,
          //             resizeMode: "contain",
          //           }}
          //           source={{
          //             uri: item,
          //           }}
          //         />
          //       </View>
          //     )}
          //   />
          // </View>

          <ScrollView
            pagingEnabled
            contentContainerStyle={{ gap: 20, paddingVertical: 50 }}
            showsHorizontalScrollIndicator={false}
          >
            {imageFileUrls.map((uri) => (
              <Image
                key={uri}
                source={{ uri }}
                style={{
                  width: SCREEN_WIDTH,
                  height: SCREEN_HEIGHT / 2,
                  resizeMode: "contain",
                }}
              />
            ))}
          </ScrollView>
        );
      })()}
    </View>
  );
}

export const getWallet = async (walletId: number) => {
  const { data } = await baseAxios.get(`/api/wallets/${walletId}`, {
    params: { walletId },
  });
  return data;
};

export const LoadingText = () => {
  return (
    <Typography style={{ marginLeft: 20 }} type={TextType.Chips}>
      불러오는 중...
    </Typography>
  );
};

export const ErrorText = () => {
  return (
    <Typography style={{ marginLeft: 20 }} type={TextType.Chips}>
      문제가 발생했습니다.
    </Typography>
  );
};
