import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Typography, { TextType } from "./common/Typography";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import RoutePath from "../navigation/routePath";
import { View } from "react-native";

export default function CreateCardButton() {
  const navigation = useNavigation();

  const navigateCreateCardPage = () => {
    //@ts-ignore
    navigation.navigate(RoutePath.CreateCardScreen);
  };

  return (
    <TouchableOpacity onPress={navigateCreateCardPage}>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          borderWidth: 1,
          paddingRight: 8,
          padding: 4,
          borderColor: Colors.text.alternative,
          borderRadius: 100,
        }}
      >
        <Ionicons name="add" size={16} color={Colors.text.alternative} />
        <Typography type={TextType.Chips} style={{ color: Colors.text.alternative }}>
          추가하기
        </Typography>
      </View>
    </TouchableOpacity>
  );
}
