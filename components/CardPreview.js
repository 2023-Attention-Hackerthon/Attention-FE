import React, { useRef, useState } from "react";
import { Platform, Pressable, Share, View } from "react-native";
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import Typography from "./common/Typography";
import CardComponent from "./common/CardComponent";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import RoutePath from "../navigation/routePath";

export default function CardPreview({ card }) {
  const [url, setUrls] = useState("");
  const viewRef = useRef();

  setUrls;
  const navigation = useNavigation();
  const navigateDetailCardPage = (card) => {
    //@ts-ignore
    navigation.navigate(RoutePath.MyCardDetailScreen, {
      params: {
        ...card,
      },
    });
  };

  return (
    <View style={{ gap: 30 }}>
      <ViewShot ref={viewRef} options={{ fileName: "shared", format: "png", quality: 1 }}>
        <TouchableOpacity onPress={() => navigateDetailCardPage(card)} key={card.id}>
          <CardComponent card={card} />
        </TouchableOpacity>
      </ViewShot>
      <View style={{ flexDirection: "row", gap: 8, justifyContent: "space-between" }}>
        <Pressable
          onPress={async () => {
            if (viewRef?.current) {
              const uri = await viewRef.current.capture().catch((err) => console.log(err));
              await Sharing.shareAsync(Platform.OS === "ios" ? `file://${uri}` : uri, {
                mimeType: "image/png",
                dialogTitle: "이미지 저장하기",
                UTI: "image/png",
              });
            }
          }}
          style={{
            borderWidth: 1,
            borderRadius: 99,
            paddingHorizontal: 40,
            paddingVertical: 14,
            borderColor: Colors.text.normal,
          }}
          hitSlop={19}
        >
          <Typography>저장하기</Typography>
        </Pressable>
        <Pressable
          disabled={!url}
          onPress={async () =>
            await Share.share({
              message: "공유 테스트",
              url,
            })
          }
          style={{
            backgroundColor: Colors.primary.normal,
            borderWidth: 1,
            borderRadius: 99,
            paddingHorizontal: 40,
            paddingVertical: 14,
            borderColor: Colors.text.normal,
          }}
        >
          <Typography>공유하기</Typography>
        </Pressable>
      </View>
    </View>
  );
}
