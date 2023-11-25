import React from "react";
import { Text, TextProps } from "react-native";

type TypographyProps = {
  type?: TextType;
} & TextProps;

export default function Typography({ type, style, ...props }: TypographyProps) {
  return <Text style={Object.assign({}, getTextProps(type), style)} {...props} />;
}

export const enum TextType {
  /** size: 24, weight: 600 */
  Title1 = 0,
  /** size: 22, weight: 600 */
  Title2 = 1,
  /** size: 20, weight: 600 */
  Title3 = 2,
  /** size: 18, weight: 600 */
  Title4 = 3,

  /** size: 20, weight: 500 */
  Label1 = 4,
  /** size: 18, weight: 500 */
  Label2 = 5,
  /** size: 16, weight: 500 */
  Label3 = 6,
  /** size: 14, weight: 500 */
  Label4 = 7,
  /** size: 12, weight: 500 */
  Label5 = 8,
  /** size: 10, weight: 500 */
  Label6 = 9,

  /** basic: size: 16, weight: 400 */
  Body1 = 10,
  /** size: 14, weight: 400 */
  Body2 = 11,

  /** size: 12, weight: 400 */
  Chips = 12,

  /** size: 10, weight: 400 */
  Caption = 13,
}

function getTextProps(type?: TextType | undefined): {
  fontSize: number;
  fontWeight: "400" | "600" | "500";
} {
  let fontSize: number = 16;
  let fontWeight: "400" | "600" | "500" = "400";
  switch (type) {
    // title
    case 0:
      fontSize = 24;
      break;
    case 1:
      fontSize = 22;
      break;
    case 2:
      fontSize = 20;
      break;
    case 3:
      fontSize = 18;
      break;
    // label
    case 4:
      fontSize = 20;
      fontWeight = "500";
      break;
    case 5:
      fontSize = 18;
      break;
    case 6:
      fontSize = 16;
      break;
    case 7:
      fontSize = 14;
      break;
    case 8:
      fontSize = 12;
      break;
    case 9:
      fontSize = 10;
      break;
    //body
    case 10:
      fontSize = 16;
      fontWeight = "400";
      break;
    case 11:
      fontSize = 14;
      break;
    //chips
    case 12:
      fontSize = 12;
      break;
    //caption
    case 13:
      fontSize = 10;
      break;
  }
  return { fontSize, fontWeight };
}
