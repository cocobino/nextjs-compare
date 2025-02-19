import { style } from "@vanilla-extract/css";

export const secondFrame = style({
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "6.9%",
  paddingRight: "4px",
  backgroundImage: 'url("/images/second_frame_bg.gif")',
});

export const secondFrameText = style({
  display: "inline-block",
  paddingTop: "10px",
  float: "left",
  height: "70%",
  margin: "0 auto",
});

export const secondFrameFinal = style({
  display: "inline-block",
  float: "left",
  paddingLeft: "115px",
});

export const secondFrameFinalNum = style({
  display: "inline-block",
  paddingTop: "15px",
  float: "left",
  color: "#15b03f", // color 값 앞에 '#' 추가
  fontWeight: "bold",
  fontFamily: "돋움, 나눔고딕",
});

export const secondFrameFinalText = style({
  display: "inline-block",
  paddingTop: "17px",
  float: "left",
  paddingLeft: "13px",
  fontSize: "14px",
  fontFamily: "돋움, 나눔고딕",
  color: "#000000",
});

export const secondFrameFinalBar = style({
  display: "inline-block",
  paddingTop: "11px",
  paddingLeft: "65px",
});

export const secondFrameBlock = style({
  display: "inline-block",
  float: "left",
  width: "0.47%",
  height: "100%",
  margin: "0 auto",
});
