import React from "react";
import { View } from "react-native";
import Typography from "../../components/common/Typography";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RoutePath from "../../navigation/routePath";
import { Card, CardList } from "../../types/Card";

export default function MyCardsScreen() {
  const navigation = useNavigation();

  const navigateDetailCardPage = (card: Card) => {
    //@ts-ignore
    navigation.navigate(RoutePath.MyCardDetailScreen, {
      params: {
        card,
      },
    });
  };

  const mockCards: CardList = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {mockCards.map((card) => (
        <TouchableOpacity onPress={() => navigateDetailCardPage(card)} key={card.id}>
          <Typography>내 카드 페이지 {card.id}</Typography>
        </TouchableOpacity>
      ))}
    </View>
  );
}
