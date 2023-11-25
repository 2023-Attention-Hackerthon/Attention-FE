import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Typography from "./Typography";
import styled from "styled-components/native";
import Svg, { Path } from "react-native-svg";

//import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../EditScreenInfo";

export default function CardFormat({ color }) {
  return (
    <View>
      <Svg
        style={{ position: "relative" }}
        width="295"
        height="420"
        viewBox="0 0 295 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M20.5 20V0.5H274.5V20V20.5H275H294.5V399.5H275H274.5V400V419.5H20.5V400V399.5H20H0.5V20.5H20H20.5V20Z"
          fill={color}
          stroke="black"
        />
        <View
          style={{
            position: "absolute",
            flex: 1,

            width: "100%",
          }}
        >
          <Typography
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            김민지
          </Typography>
          <Typography>여자</Typography>
          <Typography>20세</Typography>
          <Typography>ESTJ</Typography>
          <Typography>안녕</Typography>
        </View>
      </Svg>
    </View>
  );
}
