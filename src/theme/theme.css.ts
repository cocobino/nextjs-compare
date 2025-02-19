import { style } from "@vanilla-extract/css";
import { primaryColor, secondaryColor } from "@/token/token.css";

export const darkTheme = style({
  vars: {
    [primaryColor]: "black", // primaryColor 변수에 dark 테마 색상 할당
    [secondaryColor]: "rgba(125,125,125,0.38)", // secondaryColor 변수에 dark 테마 색상 할당
  },
});

export const lightTheme = style({
  vars: {
    [primaryColor]: "white", // primaryColor 변수에 light 테마 색상 할당
    [secondaryColor]: "#ff99aa", // secondaryColor 변수에 light 테마 색상 할당
  },
});
