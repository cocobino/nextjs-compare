import { MENU_ITEM_LIST } from "@/component/menu/Menu.consts";

const Menu = () => {
  return (
    <div className="w-full h-[6.9%] mx-auto pr-[4px] bg-[url('/images/second_frame_bg.gif')] bg-no-repeat">
      {MENU_ITEM_LIST.map((item) => {
        if (item.type === "block") {
          return (
            <div
              key={item.id}
              className="inline-block float-left w-[0.47%] h-full mx-auto"
            />
          );
        }
        if (item.type === "text") {
          return (
            <div
              key={item.id}
              className="inline-block float-left pt-[10px] h-[70%] mx-auto"
            >
              <img src={item.src} alt="" />
            </div>
          );
        }
        return null;
      })}
      <div className="inline-block float-left pl-[115px]">
        <div className="inline-block float-left pt-[15px] text-[#15b03f] font-bold font-[돋움,나눔고딕]">
          2
        </div>
        <div className="inline-block float-left pt-[17px] pl-[13px] text-[14px] font-[돋움,나눔고딕] text-black">
          서수연
        </div>
        <div className="inline-block float-left pt-[11px] pl-[65px]">
          <img src="/images/arrow.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
