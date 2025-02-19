import {
  center,
  container,
  firstTopStart,
  firstTopStartBtn,
  input,
  left,
  right,
  rightTop,
} from "@/component/header/Header.css";

const IMAGE_LIST = [
  {
    id: 1,
    src: "/images/right_top_bar.gif",
  },
  {
    id: 2,
    src: "/images/top_bar12.gif",
  },
  {
    id: 3,
    src: "/images/junior_naver.gif",
  },
  {
    id: 4,
    src: "/images/happybean.gif",
  },
];

const Header = () => {
  return (
    <div className={container}>
      <div className={left}>
        <img src="/images/top_images.gif" />
      </div>

      <div className={center}>
        <form>
          <input className={input} type="text" name="search" />
        </form>
      </div>

      <div className={right}>
        <div className={rightTop}>
          <div className={firstTopStart}>네이버를 시작페이지로</div>

          {IMAGE_LIST.map(({ id, src }) => (
            <div key={id} className={firstTopStartBtn}>
              <img src={src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
