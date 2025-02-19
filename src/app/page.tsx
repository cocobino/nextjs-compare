"use client";

import Header from "@/component/header/Header";
import Menu from "@/component/menu/Menu";
import { body, main } from "@/app/page.css";
import Body from "@/component/body/Body";
import { darkTheme, lightTheme } from "@/theme/theme.css";
import { useState } from "react";
import Test from "@/component/test/Test";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const THEME = {
    dark: darkTheme,
    light: lightTheme,
  };
  return (
    <body
      className={`${body} ${THEME[theme]}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <main className={`${main}`}>
        <Header />
        <Menu />
        <Body />
      </main>
      <Test />
    </body>
  );
}
