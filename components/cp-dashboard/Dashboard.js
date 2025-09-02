"use client";
import React, { useRef } from 'react';
// import CpHeader from '../../components/cp-user-header/CpHeader';
// import CpTitle from '@/components/cp-title/CpTitle';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CmpDashboard = () => {

  //  const swiperRef = useRef(null);
  //  const swiperRef1 = useRef(null);
  const swiperRefs = useRef({});

  const goNextSlide = (id) => {
    // if (swiperRef.current) swiperRef.current.slideNext();
    // if (swiperRef1.current) swiperRef1.current.slideNext();
    swiperRefs.current[id]?.slideNext();
  };

  const goPrevslide = (id) => {
    // if (swiperRef.current) swiperRef.current.slidePrev();
    // if (swiperRef1.current) swiperRef1.current.slidePrev();
    swiperRefs.current[id]?.slidePrev();
  };


  return (
    <div className=''>
      {/* Navbar */}
      {/* <header className="bg-black text-white p-4 flex justify-between items-center">
        <Image
        src="/assets/images/logo.png" 
        alt="logo" 
        width={85} 
        height={32} 
        className="rounded-xl"
      />
        <nav className="flex gap-6">
          <a href="#" className="header-nav-border">Marketing Strategy</a>
          <a href="#">Creatives</a>
          <a href="#">Influencers</a>
          <a href="#">User Management</a>
        </nav>
        <button className="btn-gradient text-white">
          <Image 
            src="/assets/icons/Shape.svg" 
            alt="Home Icon" 
            width={14} 
            height={14} 
            className=""
          />
          Spark AI Insights
        </button>
      </header> */}

      {/* Main Content */}
      <main className=''>
        <h1 className="sec-title text-sprk-dark-2 py-[31px]">Welcome Meha,</h1>

        <div className='flex gap-5 rounded-2xl  w-full mb-6  shadow-lg border border-gray-200 relative'>
          <div className='rounded-xl overflow-hidden'>
            <Image src="/assets/images/thumb-with-bg.png" alt="Home Icon" width={160} height={160}  />
          </div>
          <div className='flex justify-between w-full py-6 px-4'>
            <div className='w-[48%]'>
            <h2 className='sec-title text-sprk-dark-2'>Your tailored setup guide!</h2>
            <p className='sec-desc text-sprk-grey'>Let’s assist you in kickstarting your journey step-by-step by organising things for you.</p>
          </div>
          <div className="relative w-[40%]">
            <div className="absolute top-4 left-[10.5%] right-[8%] h-[2px] bg-gray-300"></div>
            <ul className="flex items-center justify-between w-full relative z-10">
              <li className="flex flex-col items-center">
                <p className="rounded-full bg-[#E6F0FB] w-[32px] h-[32px] flex items-center justify-center">
                  1
                </p>
                <p className="mt-2 text-xs text-center">Add a new campaign</p>
              </li>
              <li className="flex flex-col items-center">
                <p className="rounded-full bg-[#E6F0FB] w-[32px] h-[32px] flex items-center justify-center">
                  2
                </p>
                <p className="mt-2 text-sm text-center">Create scenario</p>
              </li>
              <li className="flex flex-col items-center">
                <p className="rounded-full bg-[#E6F0FB] w-[32px] h-[32px] flex items-center justify-center">
                  3
                </p>
                <p className="mt-2 text-sm text-center">Simulate report</p>
              </li>
            </ul>
          </div>
          <button className="absolute top-3 right-4  text-gray-400 hover:text-gray-600">
              <Image src="/assets/images/close.png" alt="Icon" width={14} height={14} />
          </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="flex gap-4">
        <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
          <div className="relative z-10 flex justify-between pb-4">
            <div>
              <p>
                <span className="font-medium text-2xl">₹ </span>
                <span className="font-bold text-[38px]">172 </span>
                <span className="font-medium text-2xl">Cr</span>
              </p>
              <h4 className="text-xs">Total Marketing Spend</h4>
            </div>
            <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
              <Image src="/assets/icons/market-graph.svg" alt="Icon" width={14} height={14} />
            </div>
          </div>
          <span className="inline-flex gap-2 text-sm text-red-500 rounded-xl bg-[#F9E0DE] py-[2px] px-[8px]">
            - 6.9 %
              <Image src="/assets/icons/arrow-left.svg" className="text-red" alt="Icon" width={16} height={16} />
          </span>
        </div>

        <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
          <div className="relative z-10 flex justify-between pb-4">
            <div>
              <p>
                <span className="font-medium text-2xl">₹ </span>
                <span className="font-bold text-[38px]">11 </span>
                <span className="font-medium text-2xl">Lakh</span>
              </p>
              <h4 className="text-xs">Total Revenue Generated</h4>
            </div>
            <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
              <Image src="/assets/icons/dollar.svg" alt="Icon" width={14} height={14} />
            </div>
          </div>
          <span className="inline-flex gap-2 text-sm text-red-500 rounded-xl bg-[#F9E0DE] py-[2px] px-[8px]">
            - 13.9%
           <Image src="/assets/icons/arrow-left.svg" className="text-red" alt="Icon" width={16} height={16} />
          </span>
        </div>

        <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
          <div className="relative z-10 flex justify-between pb-4">
            <div>
              <p>
                <span className="font-bold text-[38px]">55 </span>
                <span className="font-medium text-2xl">%</span>
              </p>
              <h4 className="text-xs">Baseline</h4>
            </div>
             <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
              <Image src="/assets/icons/market-chart.svg" alt="Icon" width={14} height={14} />
            </div>
          </div>
          <span className="inline-flex gap-2 text-sm text-red-500 rounded-xl bg-[#F9E0DE] py-[2px] px-[8px]">
            - 12.0%
             <Image src="/assets/icons/arrow-left.svg" className="text-red" alt="Icon" width={16} height={16} />
          </span>
        </div>
      </div>




        {/* AI Recommendations */}
        <section className="bg-[url('/assets/images/AI-driven-bg.png')] bg-cover bg-center py-8 mt-6 rounded-xl">
        <div className='flex justify-between'>
          <div>
            <h2 className="sec-title text-sprk-light-1 px-6">AI-driven Recommendations</h2>
            <p className='sec-desc text-sprk-light-grey px-6 pb-6'>Let’s find out where you’re falling behind with our AI insights</p>
          </div>
           <div className="relative top-6 right-[40px] flex gap-[16px]">
              <button className="custom-prev" onClick={() => goPrevslide("Ai-recommendation-swiper")}>
                <Image src="/assets/icons/left-arrow.svg" alt="Prev" width={14} height={14} />
              </button>
              <button className="custom-next" onClick={() => goNextSlide("Ai-recommendation-swiper")}>
                <Image src="/assets/icons/right-arrow.svg" alt="Next" width={14} height={14} />
              </button>
            </div>
          </div>
            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={30}
              // navigation={{
              //   nextEl: ".custom-next",
              //   prevEl: ".custom-prev",
              // }}
              // onSwiper={(swiper) => {
              //   swiperRef.current = swiper; 
              // }}
              onSwiper={(swiper) => (swiperRefs.current['Ai-recommendation-swiper'] = swiper)}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                    <h3 className="text-xl text-sprk-light-1 font-bold">Time to refuel the engine</h3>
                    <p className="sec-desc text-sprk-light-grey italic pb-6">Value is growing but volume is dropping – it’s time to fine-tune the mix</p>
                    <ul className='card-bullet-list'>
                      <li>
                        <span>
                          <Image src="/assets/icons/Clean.svg" alt="Icon" width={16} height={16} />
                        </span>
                        Test alternate budget splits in “Compare Scenario”
                      </li>
                      <li>
                        <span>
                          <Image src="/assets/icons/Clean.svg" alt="Icon" width={16} height={16} />
                        </span>
                        Shift budget toward high-RO  channels (Social = 45%)
                      </li>
                      <li>
                        <span>
                          <Image src="/assets/icons/Clean.svg" alt="Icon" width={16} height={16} />
                        </span>
                        Add volume-push campaigns (promos, bundling, regional bursts)
                      </li>
                    </ul>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                    <h3 className="text-xl text-sprk-light-1 font-bold">Maximize marginal returns</h3>
                    <p className="sec-desc text-sprk-light-grey italic pb-6">Some channels have reached saturation; incremental spend yields diminishing returns</p>
                    <ul className='card-bullet-list'>
                      <li>
                        <span>
                          <Image src="/assets/icons/Clean.svg" alt="Icon" width={16} height={16} />
                        </span>
                        Reduce investment in saturated channels.
                      </li>
                      <li>
                        <span>
                          <Image src="/assets/icons/Clean.svg" alt="Icon" width={16} height={16} />
                        </span>
                        Redirect savings to underfunded, high-growth channels.
                      </li>
                    </ul>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                    <h3 className="text-xl text-sprk-light-1 font-bold">Time to refuel the engine</h3>
                    <p className="sec-desc text-sprk-light-grey italic pb-6">Value is growing but volume is dropping – it’s time to fine-tune the mix</p>
                    <ul className='card-bullet-list'>
                      <li>
                        <span>
                          <Image src="/assets/icons/Clean.svg" alt="Icon" width={16} height={16} />
                        </span>
                        Test alternate budget splits in “Compare Scenario”
                      </li>
                      <li>
                        <span>
                          <Image src="/assets/icons/Clean.svg" alt="Icon" width={16} height={16} />
                        </span>
                        Shift budget toward high-RO  channels (Social = 45%)
                      </li>
                      <li>
                        <span>
                          <Image src="/assets/icons/Clean.svg" alt="Icon" width={16} height={16} />
                        </span>
                        Add volume-push campaigns (promos, bundling, regional bursts)
                      </li>
                    </ul>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                    <h3 className="text-xl text-sprk-light-1 font-bold">Time to refuel the engine</h3>
                    <p className="sec-desc text-sprk-light-grey italic pb-6">Value is growing but volume is dropping – it’s time to fine-tune the mix</p>
                    <ul className='card-bullet-list'>
                      <li>
                        <span>
                          <Image src="/assets/icons/Clean.svg" alt="Icon" width={16} height={16} />
                        </span>
                        Test alternate budget splits in “Compare Scenario”
                      </li>
                      <li>
                        <span>
                          <Image src="/assets/icons/Clean.svg" alt="Icon" width={16} height={16} />
                        </span>
                        Shift budget toward high-RO  channels (Social = 45%)
                      </li>
                      <li>
                        <span>
                          <Image src="/assets/icons/Clean.svg" alt="Icon" width={16} height={16} />
                        </span>
                        Add volume-push campaigns (promos, bundling, regional bursts)
                      </li>
                    </ul>
                  </div>
              </SwiperSlide>
            </Swiper>
        </section>

        {/* Charts */}
        {/* <section className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Value Growth</h3>
            <div className="h-48 bg-gradient-to-r from-purple-300 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
              Chart Placeholder
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Volume Growth</h3>
            <div className="h-48 bg-gradient-to-r from-green-300 to-green-500 rounded-lg flex items-center justify-center text-white font-bold">
              Chart Placeholder
            </div>
          </div>
        </section> */}

        {/* Campaign Section */}
        <section className="mt-14">
          <div className='flex justify-between'>
            <div className='w-[60%]'>
              <h2 className="sec-title text-sprk-dark-2">Get Inspired</h2>
              <p className="sec-desc text-sprk-grey">
                We’ve analysed your previous performance data and curated a list of the best-performing campaigns for your review.
              </p>
            </div>
            <div className="relative top-6 flex gap-[16px]">
                <button className="custom-prev" onClick={() => goPrevslide("get-inspired-swiper")}>
                  <Image src="/assets/icons/left-arrow.svg" alt="Prev" width={14} height={14} />
                </button>
                <button className="custom-next" onClick={() => goNextSlide("get-inspired-swiper")}>
                  <Image src="/assets/icons/right-arrow.svg" alt="Next" width={14} height={14} />
                </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 pt-7">
            <Swiper 
              // navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev"}}modules={[Navigation]} className="mySwiper"
              slidesPerView={3}
            spaceBetween={30}
            // navigation={{
            //   nextEl: ".custom-next",
            //   prevEl: ".custom-prev",
            // }}
            modules={[Navigation]}
            // onSwiper={(swiper) => {
            //   swiperRef1.current = swiper;
            // }}
            onSwiper={(swiper) => (swiperRefs.current['get-inspired-swiper'] = swiper)}
            >
              <SwiperSlide>
                      {/* Card 1 with Swiper */}
            <div className="flex-1 min-w-[250px] rounded-xl border border-[#F1F1F1] shadow overflow-hidden">
              <Swiper navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev"}}modules={[Navigation]} className="mySwiper">
                  <SwiperSlide>
                    <Image
                            src="/assets/images/get-inspired.png"
                            alt="Home Icon"
                            width={0}  
                            height={0} 
                            sizes="100vw"
                            className="w-full h-auto object-cover rounded-t-xl"
                          />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                            src="/assets/images/get-inspired.png"
                            alt="Home Icon"
                            width={0}  
                            height={0} 
                            sizes="100vw"
                            className="w-full h-auto object-cover rounded-t-xl"
                          />
                  </SwiperSlide>
                  <div className="absolute bottom-4 right-4 flex gap-4 z-10">
                    <button className="custom-prev grey-bg">
                      <Image src="/assets/icons/left-arrow.svg" alt="Prev" width={14} height={14} className="invert brightness-0"/>
                    </button>

                    <button className="custom-next grey-bg">
                      <Image src="/assets/icons/right-arrow.svg" alt="Next" width={14} height={14} className="invert brightness-0"/>
                    </button>
                  </div>
              </Swiper>
              <h3 className="card-title px-6 pt-5">Premium Compete</h3>
              <div className="stats-container px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="stat-item">
                  <p className="stat-label">Like</p>
                  <p className="stat-value">100k</p>
                </div>
                <div className="stat-item">
                  <p className="stat-label">Share</p>
                  <p className="stat-value">100</p>
                </div>
                <div className="stat-item">
                  <p className="stat-label">Comments</p>
                  <p className="stat-value">200</p>
                </div>
                <div className="stat-item">
                  <p className="stat-label">Engagement %</p>
                  <p className="stat-value">20%</p>
                </div>
              </div>
            </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div
                className="flex-1 min-w-[250px] rounded-xl border border-[#F1F1F1] shadow overflow-hidden"
              >
                <Image
                  src="/assets/images/get-inspired.png"
                  alt="Home Icon"
                  width={0}  
                  height={0} 
                  sizes="100vw"
                  className="w-full h-auto object-cover rounded-t-xl"
                />
                <h3 className="card-title px-6 pt-5">Premium Compete</h3>
                <div className="stats-container px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="stat-item">
                    <p className="stat-label">Like</p>
                    <p className="stat-value">100k</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label">Share</p>
                    <p className="stat-value">100</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label">Comments</p>
                    <p className="stat-value">200</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label">Engagement %</p>
                    <p className="stat-value">20%</p>
                  </div>
                </div>
              </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div
                className="flex-1 min-w-[250px] rounded-xl border border-[#F1F1F1] shadow overflow-hidden"
              >
                <Image
                  src="/assets/images/get-inspired.png"
                  alt="Home Icon"
                  width={0}  
                  height={0} 
                  sizes="100vw"
                  className="w-full h-auto object-cover rounded-t-xl"
                />
                <h3 className="card-title px-6 pt-5">Premium Compete</h3>
                <div className="stats-container px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="stat-item">
                    <p className="stat-label">Like</p>
                    <p className="stat-value">100k</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label">Share</p>
                    <p className="stat-value">100</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label">Comments</p>
                    <p className="stat-value">200</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label">Engagement %</p>
                    <p className="stat-value">20%</p>
                  </div>
                </div>
              </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div
                className="flex-1 min-w-[250px] rounded-xl border border-[#F1F1F1] shadow overflow-hidden"
              >
                <Image
                  src="/assets/images/get-inspired.png"
                  alt="Home Icon"
                  width={0}  
                  height={0} 
                  sizes="100vw"
                  className="w-full h-auto object-cover rounded-t-xl"
                />
                <h3 className="card-title px-6 pt-5">Premium Compete</h3>
                <div className="stats-container px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="stat-item">
                    <p className="stat-label">Like</p>
                    <p className="stat-value">100k</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label">Share</p>
                    <p className="stat-value">100</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label">Comments</p>
                    <p className="stat-value">200</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label">Engagement %</p>
                    <p className="stat-value">20%</p>
                  </div>
                </div>
              </div>
                  </SwiperSlide>
            </Swiper>
          </div>
        </section>


        <section className="bg-red-orange-gradient text-white py-6 mt-8 mb-8 rounded-2xl flex justify-between px-6">
          <div>
            <h2 className='text-sprk-dark-2 text-white'>Curious about your past performance?</h2>
            <p className="text-sm text-white">Let our AI dig into your history to answer your questions and reveal useful insights.</p>
          </div>
          <button className="btn-default">
            <Image 
              src="/assets/icons/Shape.svg" 
              alt="Home Icon" 
              width={14} 
              height={14} 
              className=""
            />
            Spark AI Insights
          </button>
        </section>

        <section className='bg-black py-[30px] rounded-2xl '>
          <div className='flex gap-[39.5px]'>
            <div className='w-[55%] pl-6 py-[23px]'>
              <h3 className='text-2xl font-extrabold text-sprk-light-1 pb-6 w-[56%]'>Start your end-to-end marketing analysis today with our tailored solutions.</h3>
              <button className="btn-default ">Get in Touch</button>
            </div>
            <div>
              <ul className='flex item-center gap-6'>
                <li className='flex justify-between bg-[linear-gradient(126.16deg,rgba(82,82,82,0.24)-3.39%,rgba(0,30,41,0.4)58.7%)] rounded-xl border border-[#525252] shadow overflow-hidden py-[30px] px-6'>
                  <div>
                    <h2 className='text-xl font-bold text-sprk-light-1 pb-6'>Influencers</h2>
                    <ul className="card-list">
                      <li className='pb-4 text-[11px]'>Browse & analyse influencers</li>
                      <li className='pb-4 text-[11px]'>Create a plan with your chosen influencers</li>
                      <li className='text-[11px]'>Explore leading influencer by categories</li>
                    </ul>
                  </div>
                   <Image 
                      src="/assets/icons/user.svg" 
                      alt="user Icon" 
                      width={40} 
                      height={40} 
                      className="bg-white h-[40px]"
                    />
                </li>
                 <li className='flex justify-between bg-[linear-gradient(126.16deg,rgba(82,82,82,0.24)-3.39%,rgba(0,30,41,0.4)58.7%)] rounded-xl border border-[#525252] shadow overflow-hidden py-[30px] px-6'>
                  <div>
                    <h2 className='sec-title text-sprk-light-1 pb-6'>Creatives</h2>
                    <ul className="card-list">
                      <li className='pb-4 text-[11px]'>Upload creatives & performance data </li>
                      <li className='pb-4 text-[11px]'>Analyse creatives</li>
                      <li className='text-[11px]'>View report</li>
                    </ul>
                  </div>
                  <Image 
                      src="/assets/icons/comparison.svg" 
                      alt="comparison Icon" 
                      width={40} 
                      height={40} 
                      className="bg-white h-[40px]"
                    />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}


export default CmpDashboard;