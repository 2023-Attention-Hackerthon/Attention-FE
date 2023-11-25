import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, CardList } from "../../types/Card";
import Typography from "../../components/common/Typography";

export default function MyCardsScreen() {
  const [cards, setCards] = useState<CardList>([]);
  const navigation = useNavigation();
  setCards;
  const navigateDetailCardPage = (card: Card) => {
    //@ts-ignore
    navigation.navigate(RoutePath.MyCardDetailScreen, {
      params: {
        card,
      },
    });
  };

  // const {data,isLoading,isError}=useQuery({
  //   queryKey:['getCardList'],
  //   queryFn:
  // })

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {(() => {
        return cards.map((card) => (
          <TouchableOpacity onPress={() => navigateDetailCardPage(card)} key={card.id}>
            <Typography>{card.id}</Typography>
          </TouchableOpacity>
        ));
      })()}
    </View>
  );
}

const CreateCardButton = () => {
  return (
    <>
      <Typography>카드가 없어요</Typography>
      <TouchableOpacity>
        <Typography>카드 만들기</Typography>
      </TouchableOpacity>
    </>
  );
};
CreateCardButton;
