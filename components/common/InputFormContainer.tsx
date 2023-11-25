import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Typography, { TextType } from "./Typography";
import { SCREEN_WIDTH } from "../../constants/screenSize";
import FormNumber from "./FormNumber";

export default function InputFormContainer({
  formNumber,
  question,
  children,
  helperText,
}: {
  formNumber: number;
  question: string;
  helperText?: string;
  children: ReactNode;
}) {
  return (
    <View style={styles.inputContainer}>
      <View style={{ marginBottom: 20, gap: 10, height: 130 }}>
        <FormNumber>{formNumber}</FormNumber>
        <Typography type={TextType.Title1}>{question}</Typography>
      </View>
      {children}
      {helperText && <Typography type={TextType.Chips}>{helperText}</Typography>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: SCREEN_WIDTH,
    paddingTop: 150,
    padding: 16,
    // marginVertical: 10, // 위아래 여백 설정
  },
  textInput: {
    // 다른 스타일 속성을 추가하여 Text Input 스타일을 사용자 지정할 수 있습니다.
    padding: 8,
    marginBottom: 8,
    borderBottomWidth: 1, // 보라색 밑줄 두께
    borderBottomColor: Colors.primary.normal, // 보라색 밑줄 색상
    // 예: fontSize, padding, fontFamily 등
  },
});
