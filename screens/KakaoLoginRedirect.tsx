import axios from "axios";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Typography from "../components/common/Typography";
import { StyleSheet } from "react-native";

export default function KakaoLoginRedirect({ navigation, route }) {
  const code = route.params.token;
  useEffect(() => {
    // URL에서 인가 코드 추출
    // 인가 코드를 백엔드 서버로 전달
    if (code) {
      // CSRF 토큰 가져오기
      //const csrftoken = getCookie('csrftoken');
      console.log("useEffect 내부 " + code);
      axios
        .get(`https://www.attention.n-e.kr/v1/auth/kakao/idtoken?code=${code}`)
        .then((getRes) => {
          // 처리 완료 후 원하는 페이지로 리다이렉트
          //navigate('/auth/finish');
          console.log("가져오기 성공");
          console.log(getRes.data);
          axios.post(`https://www.attention.n-e.kr/v1/auth/kakao/signup?idtoken=${getRes.data.data.idToken}`).then((postRes) => {
            console.log("post 성공" + postRes.data);
            // navigation.navigate("TabOneScreen");
            navigation.popToTop();
          });
        })
        .catch((error) => {
          console.error("Failed to handle Kakao login:", error);
          // 에러 처리
        });
    } else {
      // 인가 코드가 없을 경우 에러 처리
      console.log("인가 코드 없어서 나왔음");
    }
  }, [code]);
  return (
    <SafeAreaView style={styles.container}>
      <Typography>Loading...</Typography>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
