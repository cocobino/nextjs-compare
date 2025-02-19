import { style } from "@vanilla-extract/css";
import { primaryColor } from "@/token/token.css";

export const body = style({
  background: primaryColor,
});

export const main = style({
  width: "1100px",
  height: "700px",
  backgroundRepeat: "no-repeat",
  margin: "0px auto",
});
