import React from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Card } from "../../types/Card";
import CardComponent from "../../components/common/CardComponent";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type ParamType = {
  card: Card;
};

type DetailScreenProps = NativeStackScreenProps<ParamType, "card">;

export default function MyCardDetailScreen({
  // navigation: { setOptions },
  route: { params },
}: DetailScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableWithoutFeedback>
        <CardComponent card={params.params} />
      </TouchableWithoutFeedback>
    </View>
  );
}
