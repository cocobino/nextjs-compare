import { css } from "@/styled-system/css";

export const container = css({
  w: "100%", // width: 100%
  h: "24%", // height: 24%
  m: "0 auto", // margin: 0 auto
});

export const left = css({
  w: "19%",
  h: "100%",
  d: "inline-block", // display: inline-block
  float: "left",
  m: "0 auto", // margin: 0 auto
});

export const center = css({
  w: "55%",
  h: "60%",
  d: "inline-block",
  float: "left",
  m: "0 auto",
  pl: "13px", // padding-left: 13px
  pt: "65px", // padding-top: 65px
});

export const input = css({
  w: "520px",
  h: "50px",
  boxSizing: "border-box",
  border: "solid 3px #e7b3ab",
  fontSize: "14px",
  backgroundImage: 'url("/images/icon.png")',
});

export const right = css({
  w: "24%",
  h: "100%",
  d: "inline-block",
  float: "left",
});

export const rightTop = css({
  w: "100%",
  mt: "16px", // margin-top: 16px
  ml: "7px", // margin-left: 7px
});

export const firstTopStart = css({
  w: "40%",
  h: "100%",
  fontFamily: "돋움, 나눔고딕",
  color: "#878787",
  fontSize: "10px",
  pl: "16px",
  float: "left",
  m: "0 auto",
});

export const firstTopStartBtn = css({
  h: "100%",
  float: "left",
  m: "0 auto",
});

export const firstTopJunior = css({
  h: "15%",
  float: "left",
  m: "0 auto",
  pl: "4px", // padding-left: 4px
  pr: "4px", // padding-right: 4px
});
