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
    <div className="w-full h-[24%] mx-auto">
      {/* Left 영역 */}
      <div className="w-[19%] h-full inline-block float-left mx-auto">
        <img src="/images/top_images.gif" alt="Top Images" />
      </div>

      {/* Center 영역 */}
      <div className="w-[55%] h-[60%] inline-block float-left mx-auto pl-[13px] pt-[65px]">
        <form>
          <input
            type="text"
            name="search"
            className="w-[520px] h-[50px] box-border border-[3px] border-solid border-[#e7b3ab] text-[14px] bg-[url('/images/icon.png')]"
          />
        </form>
      </div>

      {/* Right 영역 */}
      <div className="w-[24%] h-full inline-block float-left">
        <div className="w-full mt-[16px] ml-[7px]">
          <div className="w-[40%] h-full float-left mx-auto font-[돋움,나눔고딕] text-[#878787] text-[10px] pl-[16px]">
            네이버를 시작페이지로
          </div>
          {IMAGE_LIST.map(({ id, src }) => (
            <div key={id} className="h-full float-left mx-auto">
              <img src={src} alt={`icon-${id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
