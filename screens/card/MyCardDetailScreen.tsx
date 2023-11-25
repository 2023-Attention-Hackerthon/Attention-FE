import React from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Typography from "../../components/common/Typography";
import { Card } from "../../types/Card";

type ParamType = {
  card: Card;
};

type DetailScreenProps = NativeStackScreenProps<ParamType, "card">;

export default function MyCardDetailScreen({
  // navigation: { setOptions },
  route: { params },
}: DetailScreenProps) {
  const { id } = params;

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Typography>내 카드 {id} 디테일 페이지</Typography>
    </View>
  );
}
