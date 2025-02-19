## PandaCss

### 설정
`panda.config.ts` 에서 outdir 로 설정된 곳에 빌드 결과물이 탄생합니다.
런타임에서 설정되는게아닌 미리 빌드를 해두고 결과물을 컴포넌트에서 가져다 사용하는 개념입니다.

### 스타일 빌드 결과물
`npx panda init -p` 명령어를 통해 결과물 생성가능

### 퍼블리싱
`stack`, `recipe` 등의 개념이있지만 퍼블리싱은 기본적인 `css` 로 스타일링하는 방법을 생각하기

### cva, styled 를 활용한 recipe 컴포넌트 작성
`src/component/test` 하위 버튼 파악해보기
```json

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

```
형태로 변수를 미리 설정 가능함 사용부에서는 Styled 컴포넌트 사용가능

### 유틸리티 API
css 단축 속성: w, h, m, p, d 등 단축 문법을 사용해 스타일을 간결하게 작성

### 디자인 토큰처리

`panda.config.ts` 에서 미리 토큰을 정의하고 사용부에서 사용가능합니다.
```json
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            50: { value: "#00FFFF" },
            100: { value: "#F0FFFF" },
            200: { value: "#89CFF0" },
            300: { value: "#0000FF" },
            400: { value: "#7393B3" },
            500: { value: "#088F8F" },
            600: { value: "#0096FF" },
            700: { value: "#5F9EA0" },
            800: { value: "#0047AB" },
            900: { value: "#6495ED" },
          },
        },
      },
    },
  },
```

```json
css({
  ...
  bg: "primary.400",
  ...
})
```
