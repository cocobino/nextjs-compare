import {
  secondFrame,
  secondFrameBlock,
  secondFrameFinal,
  secondFrameFinalBar,
  secondFrameFinalNum,
  secondFrameFinalText,
  secondFrameText,
} from "@/component/menu/Menu.css";
import { MENU_ITEM_LIST } from "@/component/menu/Menu.consts";

const Menu = () => {
  return (
    <div className={secondFrame}>
      {MENU_ITEM_LIST.map((item) => {
        if (item.type === "block") {
          return <div key={item.id} className={secondFrameBlock} />;
        }
        if (item.type === "text") {
          return (
            <div key={item.id} className={secondFrameText}>
              <img src={item.src} alt="" />
            </div>
          );
        }
        return null;
      })}
      <div className={secondFrameFinal}>
        <div className={secondFrameFinalNum}>2</div>
        <div className={secondFrameFinalText}>서수연</div>
        <div className={secondFrameFinalBar}>
          <img src="/images/arrow.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
