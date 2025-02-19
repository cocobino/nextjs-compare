import { css } from "@/styled-system/css";
import Header from "@/component/header/Header";
import Menu from "@/component/menu/Menu";
import Body from "@/component/body/Body";
import Test from "@/component/test/Test";

export default function Home() {
  return (
    <div
      className={css({
        // bg: "primary.400",
        width: "1100px",
        height: "700px",
        backgroundRepeat: "no-repeat",
        margin: "0px auto",
      })}
    >
      <Header />
      <Menu />
      <Body />

      <Test />
    </div>
  );
}
