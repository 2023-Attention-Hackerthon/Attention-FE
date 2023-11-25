import { StyleSheet, TouchableOpacity, View } from "react-native";
import Typography, { TextType } from "../components/common/Typography";
import RoutePath from "../navigation/routePath";

export default function NotFoundScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Typography type={TextType.Title3} style={styles.title}>
        페이지가 존재하지 않습니다.
      </Typography>
      <TouchableOpacity onPress={() => navigation.go(RoutePath.MainStack)} style={styles.link}>
        <Typography type={TextType.Label2}>내 카드 페이지로 돌아가기</Typography>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
