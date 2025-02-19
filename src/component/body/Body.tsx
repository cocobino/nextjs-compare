import {
  areaNormalColor,
  areaTextColor,
  areaTextLine,
  barThirdRight,
  center,
  centerLineArrow,
  centerLineContent,
  centerLineEyunhap,
  live,
  liveBar,
  loginButton,
  loginTop,
  movie,
  textNews,
  thirdBarRight,
  thirdBarRightBtn,
  thirdBarRightNum,
  thirdBottom,
  thirdBottomArrow,
  thirdBottomBar,
  thirdBottomButton,
  thirdBottomList,
  thirdBottomNews,
  thirdBottomRight,
  thirdBottomText,
  thirdBottomTop,
  thirdCenterEnter,
  thirdCenterLine,
  thirdCenterNavernews,
  thirdCenterRight,
  thirdFrame,
  thirdFrameLeft,
  thirdFrameLeftCenter,
  thirdFrameLeftTop,
  thirdFrameRight,
  thirdRightCenter,
  thirdRightTop,
  thirdTextArea,
  date,
} from "@/component/body/Body.css";
import {
  TEXT_LINE,
  ARROW_BUTTON_LIST,
  ICON_LIST,
  NEW_LIST_ICON,
  NEW_TAB,
} from "@/component/body/Body.consts";

const Body = () => {
  return (
    <div className={thirdFrame}>
      <div className={thirdFrameLeft}>
        <div className={thirdFrameLeftTop}>
          <img src="/images/top_banner.gif" alt="" />
        </div>
        <div className={thirdFrameLeftCenter}>
          <div className={thirdCenterLine}>
            <div className={centerLineEyunhap}>연합뉴스</div>
            <div className={centerLineArrow}>
              <img src="/images/center_arrow.gif" alt="" />
            </div>
            <div className={centerLineContent}>
              김정호 대국민 사과 불미스런 언행으로 실망드려 죄송
            </div>
          </div>
          <div className={thirdCenterRight}>
            <div className={thirdCenterNavernews}>네이버뉴스</div>
            {NEW_TAB.map((item, index) => (
              <div key={index} className={thirdCenterEnter}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={thirdBottom}>
          <div className={thirdBottomTop}>
            <div className={thirdBottomText}>뉴스스탠드</div>
            <div className={thirdBottomArrow}>
              <img src="/images/center_arrow_149.gif" alt="" />
            </div>
            <div className={thirdBottomText}>전체언론사</div>
            <div className={thirdBottomBar}>
              <img src="/images/bar_bottom.gif" alt="" className={center} />
            </div>
            <div className={thirdBottomText}>MY 뉴스</div>
            <div className={thirdBottomRight}>
              {ICON_LIST.map((icon, index) => (
                <div key={index} className={thirdBottomList}>
                  <img src={`images/${icon}`} alt="" className={center} />
                </div>
              ))}
              {ARROW_BUTTON_LIST.map((icon, index) => (
                <div key={index} className={thirdBottomButton}>
                  <img src={`images/${icon}`} alt="" className={center} />
                </div>
              ))}
            </div>
          </div>
          {NEW_LIST_ICON.map((icon, index) => (
            <div key={index} className={thirdBottomNews}>
              <img src={`images/${icon}`} alt="" className={center} />
            </div>
          ))}
        </div>
      </div>
      <div className={thirdFrameRight}>
        <div className={thirdRightTop}>
          <div className={loginTop}>
            네이버를 더 안전하고 편리하게 사용하세요.
          </div>
          <div className={loginButton}>
            <img src="/images/btn_naver_login.gif" alt="" className={center} />
          </div>
          <div className={loginTop}>
            아이디 비밀번호
            찾기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;회원가입
          </div>
        </div>
        <div className={thirdRightCenter}>
          <div className={date}>12.24 (화)</div>
          <div className={barThirdRight}>
            <img src="/images/bar_right_news.gif" alt="" />
          </div>
          <div className={textNews}>뉴스</div>
          <div className={thirdBarRight}>
            <div className={thirdBarRightNum}>
              <b>2</b>/6
            </div>
          </div>
          {ARROW_BUTTON_LIST.map((_, index) => (
            <div key={index} className={thirdBarRightBtn}>
              <img
                src={`images/s_${index === 0 ? "left" : "right"}.gif`}
                alt=""
                className={center}
              />
            </div>
          ))}
          <div className={thirdTextArea}>
            {TEXT_LINE.map((line, index) => (
              <div key={index} className={areaTextLine}>
                <div className={areaTextColor}>{line.areaTextColor}</div>
                {line.live && (
                  <div className={live}>
                    <img src={line.live} alt="" />
                  </div>
                )}
                <div className={areaNormalColor}>{line.areaNormal1}</div>
                {line.liveBar && (
                  <div className={liveBar}>
                    <img src={line.liveBar} alt="" />
                  </div>
                )}
                {line.areaNormal2 && (
                  <div className={areaNormalColor}>{line.areaNormal2}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={movie}>
          <video width="330" height="150" controls>
            <source src="/images/movie.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Body;
