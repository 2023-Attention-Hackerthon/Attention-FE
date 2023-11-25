import React, { ReactNode } from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import Typography, { TextType } from "./Typography";

export default function FormNumber({ children }: { children: ReactNode }) {
  return (
    <View>
      <SvgXml xml={svg} />
      <Typography
        type={TextType.Label3}
        style={{
          position: "absolute",
          top: "18%",
          left: 9,
          fontWeight: "bold",
          color: "white",
          zIndex: 99,
        }}
      >
        {children}
      </Typography>
    </View>
  );
}

const svg = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0H22V3H25V6H28V22H25V25H22V28H6V25H3V22H0V6H3V3H6V0Z" fill="#DA8FFF"/>
</svg>
`;
