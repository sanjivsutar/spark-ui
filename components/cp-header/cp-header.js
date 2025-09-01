import Image from "next/image";
const Header = () => {
  return (
    <>
      <header className="flex bg-sprk-dark text-sprk-light px-[20px] justify-between items-center text-[12px]">
        <div className="cp-brand-info flex gap-[12px]">
          {/* <div className="cp-prd-logo"> */}
          <Image
            src="/assets/images/prd-logo.png"
            alt=""
            width={85}
            height={32}
          />
          {/* </div> */}
          {/* <Image
            src="/assets/images/logo.png"
            width={12}
            height={18}
            alt=""
          /> */}
          <div className="cp-brand-logo flex items-center gap-[6px]">
            <div className="cp-brand-avtr">
              <Image
                src="/assets/images/logo.png"
                alt="Avatar"
                width={24}
                height={24}
              />
            </div>
            <div className="cp-brand-name">Client Name</div>
          </div>
        </div>
        <nav className="cp-main-nav">
          <a href="#" className="nav-item active">
            Marketing Strategy
          </a>
          <a href="#" className="nav-item">
            Creatives
          </a>
          <a href="#" className="nav-item">
            Influencers
          </a>
          <a href="#" className="nav-item">
            User Management
          </a>
        </nav>
        <button className="btn typ-gradient btn-gradient">
          <Image
            src="/assets/icons/Shape.svg"
            alt="Home Icon"
            width={14}
            height={14}
            className="invert w-[14px] h-[14px]"
          />
          Spark AI Insights
        </button>
      </header>
    </>
  );
};
export default Header;
