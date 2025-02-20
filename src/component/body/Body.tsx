import {
  TEXT_LINE,
  ARROW_BUTTON_LIST,
  ICON_LIST,
  NEW_LIST_ICON,
  NEW_TAB,
} from "@/component/body/Body.consts";

const Body = () => {
  return (
    <div className="w-full mx-auto h-[68%] bg-[#f2f3f7]">
      {/* Left 영역 */}
      <div className="w-[68%] mx-auto inline-block float-left h-full">
        {/* 상단 배너 */}
        <div className="pl-[3px] h-[26%] pt-[10px]">
          <img src="/images/top_banner.gif" alt="" />
        </div>
        {/* 중앙 영역 */}
        <div className="w-[98.8%] h-[9.5%] bg-no-repeat mt-[4.5px] ml-[2px] bg-white bg-[origin:border-box] border border-[#dde2ea]">
          <div className="pt-[2px] pl-[14px] h-[38%] w-[60%] inline-block float-left">
            <div className="inline-block float-left text-[12px] font-bold pt-[14px] pl-[4px] text-black">
              연합뉴스
            </div>
            <div className="inline-block float-left pt-[14px] pl-[4px]">
              <img src="/images/center_arrow.gif" alt="" />
            </div>
            <div className="inline-block float-left pt-[14px] pl-[10px] text-[12px] text-black">
              김정호 대국민 사과 불미스런 언행으로 실망드려 죄송
            </div>
          </div>
          <div className="pt-[10px] h-[45%] w-[28%] inline-block float-right">
            <div className="inline-block float-left text-[11.5px] font-bold pt-[6px] pl-[4px] pr-[9px] text-[#0aac36]">
              네이버뉴스
            </div>
            {NEW_TAB.map((item, index) => (
              <div
                key={index}
                className="inline-block float-left text-[11.5px] font-bold pt-[6px] pl-[6px] pr-[6px] text-[#666666]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* 하단 영역 */}
        <div className="h-[53%] bg-[url('/images/right_bottom_bg.gif')] bg-no-repeat mt-[7.3px] ml-[3px]">
          <div className="h-[18%] ml-[15px]">
            <div className="pt-[16px] pl-[4px] pr-[3px] inline-block float-left text-[13px] font-bold text-black">
              뉴스스탠드
            </div>
            <div className="pt-[15px] pl-[6px] pr-[5px] inline-block float-left">
              <img src="/images/center_arrow_149.gif" alt="" />
            </div>
            <div className="pt-[16px] pl-[4px] pr-[3px] inline-block float-left text-[13px] font-bold text-black">
              전체언론사
            </div>
            <div className="pt-[13px] pl-[7px] pr-[5px] inline-block float-left">
              <img
                src="/images/bar_bottom.gif"
                alt=""
                className="block mx-auto"
              />
            </div>
            <div className="pt-[16px] pl-[4px] pr-[3px] inline-block float-left text-[13px] font-bold text-black">
              MY 뉴스
            </div>
            <div className="w-[30%] inline-block float-right h-[73%] pt-[12px]">
              {ICON_LIST.map((icon, index) => (
                <div
                  key={index}
                  className="w-[10%] inline-block float-left pl-[8px] pr-[8px]"
                >
                  <img
                    src={`images/${icon}`}
                    alt=""
                    className="block mx-auto"
                  />
                </div>
              ))}
              {ARROW_BUTTON_LIST.map((icon, index) => (
                <div
                  key={index}
                  className="w-[10%] inline-block float-left pl-[20px] pr-[8px]"
                >
                  <img
                    src={`images/${icon}`}
                    alt=""
                    className="block mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          {NEW_LIST_ICON.map((icon, index) => (
            <div
              key={index}
              className="pl-[4px] w-[16%] inline-block float-left h-[18%] pt-[21px]"
            >
              <img src={`images/${icon}`} alt="" className="block mx-auto" />
            </div>
          ))}
        </div>
      </div>
      {/* Right 영역 */}
      <div className="mx-auto inline-block float-left h-full w-[30%] mt-[10.5px] ml-[5.4px]">
        <div className="bg-white border border-[#dde2ea] w-[99.2%] h-[24.7%] bg-no-repeat">
          <div className="pt-[16px] pb-[1px] w-[90%] text-[12px] pl-[27px] text-[#878787]">
            네이버를 더 안전하고 편리하게 사용하세요.
          </div>
          <div className="w-[90%] h-[30%] pl-[14px] pt-[10px]">
            <img
              src="/images/btn_naver_login.gif"
              alt=""
              className="block mx-auto"
            />
          </div>
          <div className="pt-[16px] pb-[1px] w-[90%] text-[12px] pl-[27px] text-[#878787]">
            아이디 비밀번호 찾기
            <span className="whitespace-pre">{"         "}</span>
            회원가입
          </div>
        </div>
        <div className="h-[29%] bg-no-repeat bg-[url('/images/news_bg.gif')] mt-[9px]">
          <div className="w-[20%] inline-block float-left text-[12px] font-bold pl-[17px] pt-[14px] text-black">
            12.24 (화)
          </div>
          <div className="float-left pt-[14px] pl-[2px] pr-[2px] inline-block">
            <img src="/images/bar_right_news.gif" alt="" />
          </div>
          <div className="float-left pt-[13px] text-[13px] text-[#878787] pl-[2px] pr-[7px] pb-[1px] inline-block">
            뉴스
          </div>
          <div className="w-[40%] float-left inline-block h-[28%]">
            <div className="text-[13px] pt-[14px] w-[20%] float-right inline-block h-[28%]">
              <b>2</b>/6
            </div>
          </div>
          {ARROW_BUTTON_LIST.map((_, index) => (
            <div
              key={index}
              className="pt-[13px] ml-[6px] w-[9%] float-left inline-block"
            >
              <img
                src={`images/s_${index === 0 ? "left" : "right"}.gif`}
                alt=""
                className="block mx-auto"
              />
            </div>
          ))}
          <div className="w-[90%] h-[65%] inline-block float-left pt-[10px]">
            {TEXT_LINE.map((line, index) => (
              <div key={index} className="w-[95%] h-[29%] pl-[16px]">
                <div className="pt-[6px] inline-block float-left text-[12px] font-bold text-[#365cce]">
                  {line.areaTextColor}
                </div>
                {line.live && (
                  <div className="pt-[6px] pl-[8px] inline-block float-left">
                    <img src={line.live} alt="" />
                  </div>
                )}
                <div className="pl-[5px] pt-[6px] inline-block float-left text-[12px] text-black">
                  {line.areaNormal1}
                </div>
                {line.liveBar && (
                  <div className="pt-[6px] pr-[3px] pl-[6px] inline-block float-left">
                    <img src={line.liveBar} alt="" />
                  </div>
                )}
                {line.areaNormal2 && (
                  <div className="pl-[5px] pt-[6px] inline-block float-left text-[12px] text-black">
                    {line.areaNormal2}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="h-[37%] mx-auto pl-[2px] pt-[11px]">
          <video width="330" height="150" controls>
            <source src="/images/movie.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Body;
