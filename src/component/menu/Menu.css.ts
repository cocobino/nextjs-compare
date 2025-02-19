// styles.ts

import { css } from "@/styled-system/css";

export const secondFrame = css({
  backgroundRepeat: "no-repeat",
  w: "100%", // width: 100%
  h: "6.9%", // height: 6.9%
  pr: "4px", // padding-right: 4px
  backgroundImage: 'url("/images/second_frame_bg.gif")',
});

export const secondFrameText = css({
  d: "inline-block", // display: inline-block
  pt: "10px", // padding-top: 10px
  float: "left",
  h: "70%", // height: 70%
  m: "0 auto", // margin: 0 auto
});

export const secondFrameFinal = css({
  d: "inline-block",
  float: "left",
  pl: "115px", // padding-left: 115px
});

export const secondFrameFinalNum = css({
  d: "inline-block",
  pt: "15px",
  float: "left",
  color: "#15b03f",
  fontWeight: "bold",
  fontFamily: "돋움, 나눔고딕",
});

export const secondFrameFinalText = css({
  d: "inline-block",
  pt: "17px",
  float: "left",
  pl: "13px",
  fontSize: "14px",
  fontFamily: "돋움, 나눔고딕",
  color: "#000000",
});

export const secondFrameFinalBar = css({
  d: "inline-block",
  pt: "11px",
  pl: "65px",
});

export const secondFrameBlock = css({
  d: "inline-block",
  float: "left",
  w: "0.47%",
  h: "100%",
  m: "0 auto",
});
