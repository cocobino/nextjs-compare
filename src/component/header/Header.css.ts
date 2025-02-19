import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "24%",
  margin: "0px auto",
});

export const left = style({
  width: "19%",
  height: "100%",
  display: "inline-block",
  float: "left",
  margin: "0px auto",
});

export const center = style({
  width: "55%",
  height: "60%",
  display: "inline-block",
  float: "left",
  margin: "0px auto",
  paddingLeft: "13px",
  paddingTop: "65px",
});

export const input = style({
  width: "520px",
  height: "50px",
  boxSizing: "border-box",
  border: "solid 3px #e7b3ab",
  fontSize: "14px",
  backgroundImage: 'url("/images/icon.png")',
});

export const right = style({
  width: "24%",
  height: "100%",
  display: "inline-block",
  float: "left",
});

export const rightTop = style({
  width: "100%",
  marginTop: "16px",
  marginLeft: "7px",
});

export const firstTopStart = style({
  width: "40%",
  height: "100%",
  fontFamily: "돋움, 나눔고딕",
  color: "#878787",
  fontSize: "10px",
  paddingLeft: "16px",
  float: "left",
  margin: "0 auto",
});

export const firstTopStartBtn = style({
  height: "100%",
  float: "left",
  margin: "0 auto",
});

export const firstTopJunior = style({
  height: "15%",
  float: "left",
  margin: "0 auto",
  paddingLeft: "4px",
  paddingRight: "4px",
});
