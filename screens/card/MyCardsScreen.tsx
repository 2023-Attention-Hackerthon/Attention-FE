import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Card as CardType, CardList } from "../../types/Card";
import Typography, { TextType } from "../../components/common/Typography";
import CardTemplate from "../../components/CardTemplate";
import Colors from "../../constants/Colors";
import _ from "lodash";
import CardComponent from "../../components/common/CardComponent";
import { baseAxios } from "../../apis/baseAxios";
import { useQuery } from "@tanstack/react-query";
import { ErrorText, LoadingText } from "../wallet/MyWalletDetailScreen";
import RoutePath from "../../navigation/routePath";

export default function MyCardsScreen() {
  const [cards, setCards] = useState<CardList>([]);
  const navigation = useNavigation();
  setCards;

  const navigateDetailCardPage = (card: CardType) => {
    //@ts-ignore
    navigation.navigate(RoutePath.MyCardDetailScreen, {
      params: {
        card,
      },
    });
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getCardList"],
    queryFn: getCardList,
  });

  useEffect(() => {
    if (data) {
      setCards(data.data);
    }
  }, [data]);

  return (
    <ScrollView
      horizontal
      pagingEnabled
      contentContainerStyle={{
        columnGap: 30,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 50,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {(() => {
        if (isLoading || !data) {
          return <LoadingText />;
        }
        if (isError) {
          return <ErrorText />;
        }
        if (_.isEmpty(cards)) {
          return <EmptyCard />;
        }
        return cards.map((card) => (
          // <TouchableOpacity onPress={() => navigateDetailCardPage(card)} key={card.id}>
          <CardComponent card={card} />
          // </TouchableOpacity>
        ));
      })()}
    </ScrollView>
  );
}

const EmptyCard = () => {
  return (
    <CardTemplate>
      <Typography type={TextType.Title1} style={{ color: Colors.text.alternative }}>
        카드가 없어요
      </Typography>
      <View>
        <Typography type={TextType.Body1} style={{ color: Colors.text.alternative }}>
          상단의 + 버튼을 클릭해서
        </Typography>
        <Typography type={TextType.Body1} style={{ color: Colors.text.alternative }}>
          카드를 만들어보세요
        </Typography>
      </View>
    </CardTemplate>
  );
};

export const getCardList = async () => {
  const { data } = await baseAxios.get(`/api/wallets/cards`);
  return data;
};
