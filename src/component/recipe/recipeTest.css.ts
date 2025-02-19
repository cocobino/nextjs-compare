import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  variants: {
    variant: {
      primary: { backgroundColor: "blue", color: "white" },
      secondary: { backgroundColor: "gray", color: "black" },
    },
    disabled: {
      true: { opacity: 0.5, cursor: "not-allowed" },
      false: {},
    },
  },
  defaultVariants: {
    variant: "primary",
    disabled: false,
  },
});
