import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  underlinedForm: {
    padding: 8,
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary.normal,
  },
  formText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
