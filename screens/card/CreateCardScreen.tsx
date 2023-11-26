import React, { useMemo, useState } from "react";
import { Card, Gender } from "../../types/Card";
import InputFormContainer from "../../components/common/InputFormContainer";
import UnderlinedInput from "../../components/common/UnderlinedInput";
// import UnderlinedSelectForm from "../../components/common/UnderlinedSelectForm";
import { Image, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import Typography from "../../components/common/Typography";
import Colors from "../../constants/Colors";
import baseAxios from "../../apis/baseAxios";

export default function CreateCardScreen({ navigation }) {
  const [card, setCard] = useState<Partial<Card>>({
    nickname: "",
  });

  // 2. 당신의 성별을 알려주세요.
  const genders: string[] = ["남자", "여자", "선택 안함"];
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [genderQuestion, setGenderQuestion] = useState<string>("당신의 성별을 알려주세요.");
  // 0 : 남자, 1 : 여자, 2 : 선택 안함
  const [selectedGender, setSelectedGender] = useState<number>(0);
  const listOpenImage = isListOpen ? require("../../assets/images/up.png") : require("../../assets/images/non-activated-down.png");

  // 4. 당신의 MBTI를 선택해주세요.
  const [selectedMBTI, setSelectedMBTI] = useState<string>("");

  // 5. 당신을 표현할 수 있는 단어를 모두 선택해주세요.
  const [selectedAdjective, setSelectedAdjective] = useState<string[]>([]);
  const adjectives: string[] = [
    "따뜻한",
    "쾌활한",
    "자연스러운",
    "평화로운",
    "몽환적인",
    "건강한",
    "잔잔한",
    "시크한",
    "세련된",
    "핫한",
    "청량한",
    "퇴폐적인",
    "생기발랄한",
    "부드러운",
    "자유분방한",
    "유쾌한",
    "담백한",
    "싱그러운",
    "섹시한",
    "사랑스러운",
    "은은한",
    "맑은",
    "고급스러운",
    "로맨틱한",
    "빈티지한",
    "특별한",
    "여유로운",
    "중후한",
    "강렬한",
    "귀여운",
    "다채로운",
    "도시적인",
  ];

  const onAddAdjective = ({ adjective }: { adjective: string }) => {
    const isExist = selectedAdjective.indexOf(adjective);
    if (isExist === -1) {
      if (selectedAdjective.length >= 5) {
        return;
      }
      setSelectedAdjective([...selectedAdjective, adjective]);
    } else {
      setSelectedAdjective([...selectedAdjective.slice(0, isExist), ...selectedAdjective.slice(isExist + 1)]);
    }
  };

  // 6. 주절주절.. 당신의 TMI를 알려주세요!
  const [introduce, setIntroduce] = useState<string>("");

  // 7. 당신과 더 연결될 수 있는 정보를 채워주세요.
  const [phone, setPhone] = useState<string>("");
  const [insta, setInsta] = useState<string>("");
  const [blog, setBlog] = useState<string>("");
  const [youtube, setYoutube] = useState<string>("");
  const [github, setGithub] = useState<string>("");

  // 마지막 페이지
  const [cardName, setCardName] = useState<string>("");
  // const { mutate: createCard, isLoading } = useMutation({
  //   // 여기에 axios function
  //   mutationFn: putShopConnectionWithBrand,
  //   onSuccess: () => {
  //     //Todo
  //   },
  // });

  const sendDatas = {
    nickname: card.nickname,
    cardName: cardName,
    contact: phone,
    gender: selectedGender === 0 ? "MALE" : selectedGender === 1 ? "FEMALE" : "",
    age: card.age,
    mbti: selectedMBTI,
    adjective: selectedAdjective,
    introduce: introduce,
    instagramId: insta,
    blogUrl: blog,
    youtubeUrl: youtube,
    githubId: github,
  };

  const createCard = () => {
    baseAxios
      .post("/api/cards/1/create", sendDatas)
      .then((res) => {
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const navigateLoadingCreatePage = () => {
  //   //@ts-ignore
  //   navigation.navigate(RoutePath.CreateCardScreen, {
  //     params: {
  //       card,
  //     },
  //   });
  // };

  const disabled = useMemo(() => {
    if (!card?.nickname || !phone || genderQuestion === "당신의 성별을 알려주세요.") {
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
        activeOpacity={0.5}
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
        <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: 1 }}>
          {MBTI.map((mbti: string, idx: number) => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={mbti + idx}
              style={{
                borderRadius: 99,
                borderWidth: 1,
                paddingVertical: 8,
                width: "48%",
                marginBottom: 15,
                backgroundColor: mbti === selectedMBTI ? Colors.primary.normal : "#ffffff",
              }}
              onPress={() => setSelectedMBTI(mbti)}
            >
              <Typography key={`${mbti}-text-${idx}`} style={{ textAlign: "center" }}>
                {mbti}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </InputFormContainer>
      <InputFormContainer question={`당신을 표현할 수 있는\n단어를 모두 선택해주세요.`} formNumber={5}>
        {/* Todo */}
        <ScrollView contentContainerStyle={{ flexDirection: "row", justifyContent: "space-between", flexWrap: 1 }}>
          {adjectives.map((adjective: string, idx: number) => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={adjective + idx}
              style={{
                borderRadius: 99,
                borderWidth: 1,
                paddingVertical: 8,
                width: "48%",
                marginBottom: 15,
                backgroundColor: selectedAdjective.indexOf(adjective) !== -1 ? Colors.primary.normal : "#ffffff",
              }}
              onPress={() => onAddAdjective({ adjective })}
            >
              <Typography key={`${adjective}-text-${idx}`} style={{ textAlign: "center" }}>
                {adjective}
              </Typography>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </InputFormContainer>
      <InputFormContainer question={`주절주절..\n당신의 TMI를 알려주세요!`} formNumber={6} caption="어떤 이야기든 다 좋아요 :)">
        {/* Todo */}
        <TextInput
          placeholder="당신의 이야기를 입력해주세요!"
          multiline={true}
          maxLength={100}
          style={{ borderWidth: 1, padding: 16, height: 150, backgroundColor: "rgba(245, 224, 255, 0.5)" }}
          value={introduce}
          onChangeText={(e) => setIntroduce(e)}
        />
        <Typography style={{ marginTop: 18, color: Colors.text.alternative }}>최대 100자 이하로 적어주세요</Typography>
      </InputFormContainer>
      <InputFormContainer question={"당신과 더 연결될 수 있는\n정보를 채워주세요."} formNumber={7}>
        <View style={{ paddingBottom: 28 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={{ marginRight: 3 }} source={require("../../assets/images/info-1.png")} />
            <Typography>휴대전화</Typography>
          </View>
          <TextInput
            style={{ paddingVertical: 8, borderBottomWidth: 1 }}
            placeholder="당신의 연락처를 알려주세요!"
            value={phone}
            onChangeText={(e) => setPhone(e)}
          />
        </View>
        <View style={{ paddingBottom: 28 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={{ marginRight: 3 }} source={require("../../assets/images/info-2.png")} />
            <Typography>Instagram</Typography>
          </View>
          <TextInput
            value={insta}
            style={{ paddingVertical: 8, borderBottomWidth: 1 }}
            placeholder="인스타 아이디 알려주세요!"
            onChangeText={(e) => setInsta(e)}
          />
        </View>
        <View style={{ paddingBottom: 28 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={{ marginRight: 3 }} source={require("../../assets/images/info-3.png")} />
            <Typography>블로그</Typography>
          </View>
          <TextInput value={blog} style={{ paddingVertical: 8, borderBottomWidth: 1 }} placeholder="블로그 링크 알려주세요!" onChangeText={(e) => setBlog(e)} />
        </View>
        <View style={{ paddingBottom: 28 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={{ marginRight: 3 }} source={require("../../assets/images/info-4.png")} />
            <Typography>YouTube</Typography>
          </View>
          <TextInput
            value={youtube}
            style={{ paddingVertical: 8, borderBottomWidth: 1 }}
            placeholder="유튜브 링크 알려주세요!"
            onChangeText={(e) => setYoutube(e)}
          />
        </View>
        <View style={{ paddingBottom: 28 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={{ marginRight: 3 }} source={require("../../assets/images/info-5.png")} />
            <Typography>Github</Typography>
          </View>
          <TextInput
            value={github}
            style={{ paddingVertical: 8, borderBottomWidth: 1 }}
            placeholder="깃허브 링크 알려주세요!"
            onChangeText={(e) => setGithub(e)}
          />
        </View>
      </InputFormContainer>
      {/* Todo 남은 컴포넌트 */}
      {/* last question */}
      <View>
        <InputFormContainer
          question={`마지막으로,\n 어텐션 카드의 이름을 \n 정해주세요.`}
          helperText="최대 5자 이하로 적어주세요."
          caption="* 한 번 정하면 수정할 수 없어요!"
        >
          <UnderlinedInput maxLength={5} value={cardName} onChangeText={(e) => setCardName(e)} placeholder="ex) 해커톤 민지" />
        </InputFormContainer>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: disabled ? "rgba(245, 224, 255, 1)" : Colors.primary.normal,
              borderRadius: 99,
              padding: 16,
              width: "90%",
              alignItems: "center",
            }}
            disabled={disabled}
            onPress={createCard}
          >
            <Typography>완료하기</Typography>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const MBTI = ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"];
