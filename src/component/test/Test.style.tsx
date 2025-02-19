import { styled } from "@/styled-system/jsx";

export const Button = styled("button", {
  // 기본 스타일
  base: {
    px: "16px", // padding-left, padding-right
    py: "8px", // padding-top, padding-bottom
    borderRadius: "md",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
  // variants를 사용한 상태별 스타일 분기
  variants: {
    variant: {
      primary: {
        bg: "blue.500",
        color: "white",
        _hover: { bg: "blue.600" },
      },
      secondary: {
        bg: "gray.500",
        color: "white",
        _hover: { bg: "gray.600" },
      },
    },
    size: {
      small: { fontSize: "sm" },
      large: { fontSize: "lg", px: "24px", py: "12px" },
    },
  },
  // 기본 variant 값 설정
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});
