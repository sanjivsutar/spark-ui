import Image from "next/image";
import Header from "../cp-header/cp-header";
const MainPanel = ({ children }) => {
  return (
    <>
      <div className="cp-main-wrapper h-screen flex flex-col">
        <Header />
        <div className="main-panel">
          <div className="l-panel">
            <nav className="l-nav">
              <a href="" className="nav-item active">
                <span className="item-wrap">
                  <Image
                    src="/assets/icons/Shape.svg"
                    alt="Home Icon"
                    width={14}
                    height={14}
                    className=""
                  />{" "}
                  <span>Dashboard</span>
                </span>
              </a>
              <a href="" className="nav-item">
                <span className="item-wrap">
                  <Image
                    src="/assets/icons/Shape.svg"
                    alt="Home Icon"
                    width={14}
                    height={14}
                    className=""
                  />{" "}
                  <span>Campaign</span>
                </span>
              </a>
            </nav>
            <a
              href=""
              className="btn-exit flex absolute left-[8px] right-[0px] bottom-[12px] overflow-hidden"
            >
              <span className="flex w-full items-center relative text-sprk-grey  gap-[16px] ml-[8px] px-[8px]">
                <Image
                  src="/assets/icons/Shape.svg"
                  alt="Home Icon"
                  width={14}
                  height={14}
                  className="invert"
                />{" "}
                <span className="whitespace-nowrap">Sign Out</span>
              </span>
            </a>
          </div>
          <div className="r-panel">
            <div className="absolute left-0 right-0 top-0 bottom-0 overflow-y-auto p-[30px]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPanel;
