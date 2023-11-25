import React, { useState } from "react";
import { Card, Gender } from "../../types/Card";
import InputFormContainer from "../../components/common/InputFormContainer";
import UnderlinedInput from "../../components/common/UnderlinedInput";
import UnderlinedSelectForm from "../../components/common/UnderlinedSelectForm";
import { ScrollView } from "react-native";

export default function CreateCardScreen() {
  const [card, setCard] = useState<Partial<Card>>({ gender: Gender.None });
  console.log(card);

  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      <InputFormContainer
        question={`다른 사람들이 \n당신을 뭐라고\n 부르면 좋을까요?`}
        formNumber={1}
        helperText="최대 5자 이하로 적어주세요"
      >
        <UnderlinedInput
          maxLength={5}
          value={(card?.nickname ?? "").toString()}
          onChangeText={(nickname) => setCard((prevCard) => ({ ...prevCard, nickname }))}
          placeholder="이름이나 별명을 적어주세요"
        />
      </InputFormContainer>
      <InputFormContainer question={`당신의 성별을 \n알려주세요.`} formNumber={2}>
        {/* todo */}
        <UnderlinedSelectForm
          options={["남자", "여자", "선택 안 함"]}
          searchPlaceholder="성별을 선택해주세요"
          defaultValue={card.gender}
          onSelect={(_, gender) => setCard((prevCard) => ({ ...prevCard, gender }))}
        />
      </InputFormContainer>
      <InputFormContainer question={`당신의 나이를\n알려주세요.`} formNumber={3}>
        <UnderlinedInput
          keyboardType="numeric"
          maxLength={3}
          value={(card?.age ?? 0).toString()}
          onChangeText={(age) => setCard((prevCard) => ({ ...prevCard, age: Number(age) }))}
          placeholder="예) 13"
        />
      </InputFormContainer>
      <InputFormContainer question={`당신의 MBTI를 선택해주세요.`} formNumber={4}>
        {/* Todo */}
      </InputFormContainer>
    </ScrollView>
  );
}

const MBTI = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];
