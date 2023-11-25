import React, { useMemo, useState } from "react";
import { Card, Gender } from "../../types/Card";
import InputFormContainer from "../../components/common/InputFormContainer";
import UnderlinedInput from "../../components/common/UnderlinedInput";
// import UnderlinedSelectForm from "../../components/common/UnderlinedSelectForm";
import { Image, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import Typography from "../../components/common/Typography";
import Colors from "../../constants/Colors";

export default function CreateCardScreen() {
  const [card, setCard] = useState<Partial<Card>>({
    nickname: "",
    gender: Gender.None,
    cardname: "",
    contact: "",
  });

  const genders: string[] = ["남자", "여자", "선택 안함"];

  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [genderQuestion, setGenderQuestion] = useState<string>("당신의 성별을 알려주세요.");
  // 0 : 남자, 1 : 여자, 2 : 선택 안함
  const [selectedGender, setSelectedGender] = useState<number>(0);
  const listOpenImage = isListOpen ? require("../../assets/images/up.png") : require("../../assets/images/non-activated-down.png");

  // const { mutate: createCard, isLoading } = useMutation({
  //   // 여기에 axios function
  //   mutationFn: putShopConnectionWithBrand,
  //   onSuccess: () => {
  //     //Todo
  //   },
  // });

  // const navigation = useNavigation();

  // const navigateLoadingCreatePage = () => {
  //   //@ts-ignore
  //   navigation.navigate(RoutePath.CreateCardScreen, {
  //     params: {
  //       card,
  //     },
  //   });
  // };

  const disabled = useMemo(() => {
    if (!card?.nickname || !card.gender || !card.gender) {
      return true;
    }
    return false;
  }, []);

  // Todo: isLoading 일때 카드 로딩 페이지

  const SelectGender = (props: { gender: string; idx: number }) => {
    const activatedValue =
      props.idx === selectedGender ? require("../../assets/images/activated-check.png") : require("../../assets/images/non-activated-check.png");
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 8, paddingBottom: 8, paddingTop: 16 }}
        onPress={() => {
          setSelectedGender(props.idx);
          setIsListOpen(!isListOpen);
          if (props.idx === 0) {
            setGenderQuestion("남자");
          } else if (props.idx === 1) {
            setGenderQuestion("여자");
          } else {
            setGenderQuestion("선택 안함");
          }
        }}
      >
        <Typography style={{ color: props.idx === selectedGender ? Colors.primary.normal : Colors.text.alternative }}>{props.gender}</Typography>
        <Image source={activatedValue} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      <InputFormContainer question={`다른 사람들이 \n당신을 뭐라고\n 부르면 좋을까요?`} formNumber={1} helperText="최대 5자 이하로 적어주세요">
        <UnderlinedInput
          maxLength={5}
          value={(card?.nickname ?? "").toString()}
          onChangeText={(nickname) => setCard((prevCard) => ({ ...prevCard, nickname }))}
          placeholder="이름이나 별명을 적어주세요"
        />
      </InputFormContainer>
      <InputFormContainer question={"당신의 성별을 \n알려주세요."} formNumber={2}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, padding: 8 }}
          onPress={() => {
            if (isListOpen) {
              if (selectedGender === 0) {
                setGenderQuestion("남자");
              } else if (selectedGender === 1) {
                setGenderQuestion("여자");
              } else {
                setGenderQuestion("선택 안함");
              }
            }
            setIsListOpen(!isListOpen);
          }}
        >
          <Typography style={{ color: Colors.text.alternative }}>{genderQuestion}</Typography>
          <Image source={listOpenImage} />
        </TouchableOpacity>
        <View style={{ display: isListOpen ? "flex" : "none" }}>
          {genders.map((gender: string, idx: number) => (
            <SelectGender gender={gender} idx={idx} key={gender + idx} />
          ))}
        </View>
        {/* todo */}
        {/* <UnderlinedSelectForm
          options={["남자", "여자", "선택 안 함"]}
          searchPlaceholder="성별을 선택해주세요"
          defaultValue={card.gender}
          onSelect={(_, gender) => setCard((prevCard) => ({ ...prevCard, gender }))}
        /> */}
      </InputFormContainer>
      <InputFormContainer question={`당신의 나이를\n알려주세요.`} formNumber={3}>
        <UnderlinedInput
          keyboardType="numeric"
          maxLength={3}
          value={(card?.age ?? 0).toString()}
          onChangeText={(age) => setCard((prevCard) => ({ ...prevCard, age: Number(age) }))}
          placeholder="ex) 13"
        />
      </InputFormContainer>
      <InputFormContainer question={`당신의 MBTI를 선택해주세요.`} formNumber={4}>
        {/* Todo */}
      </InputFormContainer>
      {/* Todo 남은 컴포넌트 */}
      {/* last question */}
      <View>
        <InputFormContainer
          question={`마지막으로,\n 어텐션 카드의 이름을 \n 정해주세요.`}
          helperText="최대 5자 이하로 적어주세요."
          caption="* 한 번 정하면 수정할 수 없어요!"
        >
          <UnderlinedInput
            maxLength={5}
            value={card?.nickname ?? ""}
            onChangeText={(nickname) => setCard((prevCard) => ({ ...prevCard, nickname }))}
            placeholder="ex) 해커톤 민지"
          />
        </InputFormContainer>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary.normal,
              borderRadius: 99,
              padding: 16,
              width: "90%",
              alignItems: "center",
            }}
            disabled={disabled}
            // onPress={createCard}
          >
            <Typography>완료하기</Typography>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const MBTI = ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"];
