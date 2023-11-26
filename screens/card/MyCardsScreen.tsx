import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Typography, { TextType } from "../../components/common/Typography";
import CardTemplate from "../../components/CardTemplate";
import Colors from "../../constants/Colors";
import _ from "lodash";
import { baseAxios } from "../../apis/baseAxios";
import { useQuery } from "@tanstack/react-query";
import { ErrorText, LoadingText } from "../wallet/MyWalletDetailScreen";
import CardPreview from "../../components/CardPreview";
import { CardList } from "../../types/Card";

export default function MyCardsScreen() {
  const [cards, setCards] = useState<CardList>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getCardList"],
    queryFn: getCardList,
    refetchOnMount: true,
  });

  useEffect(() => {
    if (data) {
      setCards(data.data);
    }
  }, [data]);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        gap: 30,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
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
        return cards.map((card) => <CardPreview card={card} key={card.id} />);
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
