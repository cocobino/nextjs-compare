import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "50px",
  background: "white",
  border: "1px solid red",
});

export const A = style({
  background: "blue",
});

export const B = style({
  background: "green",
});

export const C = style({
  background: "yellow",
});

export const BackGroundStyle = {
  A,
  B,
  C,
};
