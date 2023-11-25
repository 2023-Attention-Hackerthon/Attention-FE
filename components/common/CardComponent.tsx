import React from "react";
import Typography, { TextType } from "./Typography";
import CardTemplate from "../CardTemplate";
import { Card, Gender } from "../../types/Card";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../EditScreenInfo";

export default function CardComponent({ card }: { card: Card }) {
  const fontColor = getFontColor(card.colorCode);

  return (
    <CardTemplate backgroudColor={card.colorCode}>
      <View style={{ gap: 15 }}>
        <Typography style={{ color: fontColor }} type={TextType.Title1}>
          {card.nickname}
        </Typography>
        <View>
          <Typography style={{ color: fontColor }}>
            {card.gender === Gender.Man
              ? "남자"
              : card.gender === Gender.Woman
              ? "여자"
              : "선택 안함"}
          </Typography>
          <Typography style={{ color: fontColor }}>{card.age}세</Typography>
          <Typography style={{ color: fontColor }}>{card.mbti}</Typography>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{ gap: 4 }}
          showsHorizontalScrollIndicator={false}
        >
          {card.adjective?.map((adj) => (
            <View
              key={adj}
              style={{
                flexDirection: "row",
                borderColor: fontColor,
                borderRadius: 99,
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 6,
              }}
            >
              <Typography style={{ color: fontColor }} type={TextType.Chips}>
                #{adj}
              </Typography>
            </View>
          ))}
        </ScrollView>
      </View>
      <Typography style={{ color: fontColor }}>{card.introduce}</Typography>
      <View style={{ gap: 10 }}>
        {card?.contact && (
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Typography type={TextType.Label5}>Phone</Typography>
            <Typography type={TextType.Chips}>{card.contact}</Typography>
          </View>
        )}
        {card?.instagramId && (
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Typography type={TextType.Label5}>Instagram</Typography>
            <Typography type={TextType.Chips}>@{card.instagramId}</Typography>
          </View>
        )}
        {card?.blogUrl && (
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Typography type={TextType.Label5}>Blog</Typography>
            <Typography type={TextType.Chips}>blog.naver.com/{card.blogUrl}</Typography>
          </View>
        )}
        {card?.youtubeUrl && card.youtubeUrl !== "없음" && (
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Typography type={TextType.Label5}>YouTube</Typography>
            <Typography type={TextType.Chips}>youtube.com/@{card.youtubeUrl}</Typography>
          </View>
        )}
      </View>
    </CardTemplate>
  );
}

function getFontColor(backgroundColor: string) {
  switch (backgroundColor) {
    case "#FFB3B3":
      return "#330000";
    case "#330000":
      return "#FFB3B3";

    case "#FFD1B3":
      return "#331400";
    case "#331400":
      return "#FFD1B3";

    case "#332900":
      return "#FFF0B3";
    case "#FFF0B3":
      return "#332900";

    case "#293300":
      return "#F0FFB3";
    case "#F0FFB3":
      return "#293300";

    case "#D1FFB3":
      return "#143300";
    case "#143300":
      return "#D1FFB3";

    case "#B3FFB3":
      return "#003300";
    case "#003300":
      return "#B3FFB3";

    case "#B3FFD1":
      return "#003314";
    case "#003314":
      return "#B3FFD1";

    case "#003329":
      return "#B3FFF0";
    case "#B3FFF0":
      return "003329";

    case "#B3FFF0":
      return "#003329";

    case "#B3F0FF":
      return "#002933";
    case "#002933":
      return "#B3F0FF";

    case "#B3D1FF":
      return "#001433";
    case "#001433":
      return "#B3D1FF";

    case "#000033":
      return "#B3B3FF";
    case "#B3B3FF":
      return "#000033";

    case "#140033":
      return "#D1B3FF";
    case "#D1B3FF":
      return "#140033";

    case "#290033":
      return "#F0B3FF";
    case "#F0B3FF":
      return "#290033";

    case "#330029":
      return "#FFB3F0";
    case "#FFB3F0":
      return "#330029";

    case "#FFB3D1":
      return "#330014";
    case "#330014":
      return "#FFB3D1";

    default:
      return "black";
  }
  return "black";
}
