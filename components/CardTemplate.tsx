import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

type CardTemplateProps = { backgroudColor?: string; children: ReactNode };

export default function CardTemplate({ backgroudColor = "#747075", children }: CardTemplateProps) {
  const template = `<svg
      width="295"
      height="420"
      viewBox="0 0 295 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 20V0.5H274.5V20V20.5H275H294.5V399.5H275H274.5V400V419.5H20.5V400V399.5H20H0.5V20.5H20H20.5V20Z"
        fill="${backgroudColor}"
        stroke="#747075"
      />
    </svg>`;

  return (
    <View>
      <Text>
        <SvgXml xml={template} />
      </Text>
      <View
        style={{
          position: "absolute",
          top: 10,
          gap: 30,
          alignItems: "stretch",
          padding: 28,
        }}
      >
        {children}
      </View>
    </View>
  );
}
