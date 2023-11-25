import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./options";

export default function UnderlinedInput(props: TextInputProps) {
  return <TextInput style={styles.underlinedForm} {...props} />;
}
