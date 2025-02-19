## 이런부분들을 보면 좋아요
`Vanilla extract` 는 컴파일타임에 스타일을 추출하므로 런타임에 동적으로 스타일을 생성하거나 변경하기 어렵습니다.

복잡한 상태 기반 스타일 변경이나 조건부 스타일링이 많다면, 이를 미리 variants나 recipe를 통해 설계해야 합니다.

### 디자인 토큰
`token.css.ts`
디자인토큰은 바닐라익스트렉트에서 어떻게 적용될거같은지 생각해보기

토큰 파일`(token.css.ts)`을 사용해 색상, 폰트, 스페이싱 등 디자인 기본값을 정의하고, 이를 CSS 커스텀 프로퍼티와 함께 사용하면 타입 안전성과 재사용성이 높아짐


### 디자인 테마
`theme.css.ts`
디자인가이드에 존재하는 다크모드는 `theme`으로 어떻게 풀수있는지 생각해보기

### 서버데이터 타입처리

### CSS 난독화
`next.config.js` 에서 `identifiers` 설정으로 PR모드 난독화를 지원 
```javascript
const withVanillaExtract = createVanillaExtractPlugin({
identifiers: "debug", // 
});

```

```javascript
const withVanillaExtract = createVanillaExtractPlugin({
identifiers: ({ hash }) => `prefix_${hash}`,
});
```

### 상태에따른 스타일 분기 어떻게할지 고민해보기
`src/component/test` 하위에 스타일에 변경에따른 분기처리 고민

### 필요한 스타일들 미리 생성하기
컴파일 타임에 CSS가 추출되므로, 버튼의 variant나 상태에 따른
모든 스타일 분기는 미리 recipe로 정의해야 합니다. 
런타임에 동적으로 스타일을 생성하는 대신 미리 정의된 분기 조건을 적용하는 방식

`component/recipe` 예제를 봐주세요
```typescript
type Props = {
    variant?: "primary" | "secondary";
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
};


recipe({
    ...
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
    ...
})
```

### 최강의 퍼포먼스

Vanillaextract는 정적 CSS 추출 방식 덕분에 런타임 오버헤드가 적고, 최종 번들 크기가 작을 가능성이 있습니다.

그러나, 빌드 과정이 복잡해지거나 스타일 분기가 많아지면 빌드 시간이 늘어날 수 있으므로, 빌드 최적화와 코드 스플리팅 등도 함께 고려해야 합니다.
