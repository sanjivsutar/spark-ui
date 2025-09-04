'use client';

import Image from 'next/image';
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { handleArrowState } from '@/utils/Swiper';

const CpInfluencersPerformanceCard = () => {

  const cards = [
    {
      id: 1,
      name: "@fitlife_rashi",
      platform: "Instagram",
      platformIcon: "/assets/icons/Instagram.svg",
      engagement: "20%",
      roi: "100k",
      campaign: 3,
      profilePic: "/assets/images/influencer-profile-image-1.png",
      bgImage: "/assets/images/influencer-image-1.jpg",
    },
    {
      id: 2,
      name: "@fitlife_yoga",
      platform: "Instagram",
      platformIcon: "/assets/icons/Instagram.svg",
      engagement: "35%",
      roi: "250k",
      campaign: 5,
      profilePic: "/assets/images/influencer-profile-image-1.png",
      bgImage: "/assets/images/influencer-image-1.jpg",
    },
  ];

  const swiperRefs = useRef({});

  const goNextSlide = (id) => {
    swiperRefs.current[id]?.slideNext();
  };

  const goPrevslide = (id) => {
    swiperRefs.current[id]?.slidePrev();
  };

  return (
    <> 
        <div className='w-[791px] h-[364px]'>
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="mySwiper"
            >
            {cards.map((card) => (
                <SwiperSlide key={card.id}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                    src={'/assets/images/influencer-image-1.jpg'}
                    alt="Background"
                    width={1200}
                    height={600}
                    className="w-full h-[364px] object-cover"
                    />
                    <div className="rounded-xl  p-6 absolute bottom-0 left-0 right-0 bg-[linear-gradient(126.16deg,rgba(82,82,82,0.24)_-3.39%,rgba(0,30,41,0.4)_58.7%)]">
                    <div className='flex gap-4 pb-4'>
                        <Image
                            src={card.profilePic}
                            alt="Profile"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <h3 className="text-xl font-bold text-sprk-light after:content-[''] after:block after:w-[42px] after:h-[3px] after:rounded-[9px] after:bg-[linear-gradient(89.69deg,#EC3128_-14.76%,#F56233_49.73%,#FF9B3F_100%)] after:mt-2">{card.name}</h3>
                    </div>

                        <ul className="flex gap-30">
                        <li>
                            <p className="text-xs font-medium text-sprk-light pb-[2px]">Platform</p>
                            <div className="flex items-center gap-1 text-sm font-extrabold text-sprk-light">
                            <Image
                                src={card.platformIcon}
                                alt="Platform"
                                width={16}
                                height={16}
                            />
                            {card.platform}
                            </div>
                        </li>
                        <li>
                            <p className="text-xs font-medium text-sprk-light pb-[2px]">Engagement %</p>
                            <p className="text-sm font-extrabold text-sprk-light">{card.engagement}</p>
                        </li>
                        <li>
                            <p className="text-xs font-medium text-sprk-light pb-[2px]">Actual ROI</p>
                            <p className="text-sm font-extrabold text-sprk-light">{card.roi}</p>
                        </li>
                        <li>
                            <p className="text-xs font-medium text-sprk-light pb-[2px]">Campaign</p>
                            <p className="text-sm font-extrabold text-sprk-light">{card.campaign}</p>
                        </li>
                        </ul>
                    </div>

                    <span className="absolute bottom-15 right-6 text-[151.85px] font-extrabold leading-none 
                    bg-clip-text text-transparent
                    bg-[linear-gradient(268.87deg,#EC3228_4.49%,#F66B34_86.06%,#FF9B3F_126.9%)]">
                    {card.id}
                    </span>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>

        {/* Influencers for you component */}
        <div className='pt-[56px] pb-[2px] influencer-for-you-section'>
             <div className="flex justify-between items-center">
            <div className="w-[60%]">
              <h2 className="sec-title text-sprk-dark-2">Influencers for you</h2>
              <p className="sec-desc text-sprk-grey">
                We’ve analyzed your previous performance data and curated a list of the best-performing influencer for your review.
              </p>
            </div>
            <div className="relative flex gap-[16px]">
              <button
                className="custom-prev"
                onClick={() => goPrevslide("influencer-for-you")}
              >
                <Image
                  src="/assets/icons/left-arrow.svg"
                  alt="Prev"
                  width={14}
                  height={14}
                />
              </button>
              <button
                className="custom-next"
                onClick={() => goNextSlide("influencer-for-you")}
              >
                <Image
                  src="/assets/icons/right-arrow.svg"
                  alt="Next"
                  width={14}
                  height={14}
                />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 pt-7">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              modules={[Navigation]}
               onSwiper={(swiper) =>
                (swiperRefs.current["influencer-for-you"] = swiper)
              }
              onSlideChange={(swiper) =>
                handleArrowState(
                  "influencer-for-you",
                  swiper,
                  ".influencer-for-you-section .custom-prev",
                  ".influencer-for-you-section .custom-next"
                )
              }
              onAfterInit={(swiper) => {
                handleArrowState(
                  "influencer-for-you",
                  swiper,
                  ".influencer-for-you-section .custom-prev",
                  ".influencer-for-you-section .custom-next"
                );
              }}
            >
              <SwiperSlide>
             <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                    src={'/assets/images/influencer-prajakta.jpg'}
                    alt="Background"
                    width={1200}
                    height={600}
                    className="w-full h-[364px] object-cover"
                    />
                    <div className='absolute top-0 left-0 right-0 w-full'>
                        <div className='flex justify-between items-center pt-6 px-6 '>
                            <p className='py-[1px] px-2 bg-white rounded-full'>Technology</p>
                            <Image src="/assets/icons/heart-shape.svg" alt='Heart shape icon' width={20} height={20} />
                        </div>
                    </div>
                    <div className="rounded-xl  p-6 absolute bottom-0 left-0 right-0 bg-[linear-gradient(126.16deg,rgba(82,82,82,0.24)_-3.39%,rgba(0,30,41,0.4)_58.7%)]">
                        <div className='flex justify-between items-center'>
                            <h3 className="text-xl font-bold text-sprk-light after:content-[''] after:block after:w-[42px] after:h-[3px] after:rounded-[9px] after:bg-[linear-gradient(89.69deg,#EC3128_-14.76%,#F56233_49.73%,#FF9B3F_100%)] after:mt-2">Prajakta Kohli</h3>
                            <div className='flex gap-2'>
                                <button>
                                    <Image src="/assets/icons/Instagram.svg" alt='Instagram icon' width={18} height={18} />
                                </button>
                                <button>
                                    <Image src="/assets/icons/youtube.svg" alt='Instagram icon' width={22.86} height={16} />
                                </button>
                            </div>
                        </div>
                        <ul className="flex justify-between pt-4">
                        <li>
                            <p className="text-xs font-medium text-sprk-light pb-[2px]">Engagement %</p>
                            <p className="text-sm font-extrabold text-sprk-light">5 %</p>
                        </li>
                         <li>
                            <p className="text-xs font-medium text-sprk-light pb-[2px]">Campaign</p>
                            <p className="text-sm font-extrabold text-sprk-light">20</p>
                        </li>
                        <li>
                            <p className="text-xs font-medium text-sprk-light pb-[2px]">ROI</p>
                            <p className="text-sm font-extrabold text-sprk-light">2.4 x</p>
                        </li>
                        <li>
                            <p className="text-xs font-medium text-sprk-light pb-[2px]"> Sales Generated</p>
                            <p className="text-sm font-extrabold text-sprk-light">₹ 2 Cr</p>
                        </li>
                        </ul>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
               <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                    src={'/assets/images/influencer-aliaa.png'}
                    alt="Background"
                    width={1200}
                    height={600}
                    className="w-full h-[364px] object-cover"
                    />
                    <div className='absolute top-0 left-0 right-0 w-full'>
                        <div className='flex justify-between items-center pt-6 px-6 '>
                            <p className='py-[1px] px-2 bg-white rounded-full'>Technology</p>
                            <Image src="/assets/icons/heart-shape.svg" alt='Heart shape icon' width={20} height={20} />
                        </div>
                    </div>
                    <div className="rounded-xl  p-6 absolute bottom-0 left-0 right-0 bg-[linear-gradient(126.16deg,rgba(82,82,82,0.24)_-3.39%,rgba(0,30,41,0.4)_58.7%)]">
                        <div className='flex justify-between items-center'>
                            <h3 className="text-xl font-bold text-sprk-light after:content-[''] after:block after:w-[42px] after:h-[3px] after:rounded-[9px] after:bg-[linear-gradient(89.69deg,#EC3128_-14.76%,#F56233_49.73%,#FF9B3F_100%)] after:mt-2">Aliaa Kapoor</h3>
                            <div className='flex gap-2'>
                                <button>
                                    <Image src="/assets/icons/Instagram.svg" alt='Instagram icon' width={18} height={18} />
                                </button>
                                <button>
                                    <Image src="/assets/icons/youtube.svg" alt='Instagram icon' width={22.86} height={16} />
                                </button>
                            </div>
                        </div>
                        <ul className="flex justify-between pt-4">
                            <li>
                                <p className="text-xs font-medium text-sprk-light pb-[2px]">Engagement %</p>
                                <p className="text-sm font-extrabold text-sprk-light">4.5 %</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-sprk-light pb-[2px]">Campaign</p>
                                <p className="text-sm font-extrabold text-sprk-light">5</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-sprk-light pb-[2px]">ROI</p>
                                <p className="text-sm font-extrabold text-sprk-light">3.6 x</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-sprk-light pb-[2px]"> Sales Generated</p>
                                <p className="text-sm font-extrabold text-sprk-light">₹ 10 Cr</p>
                            </li>
                        </ul>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
               <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                    src={'/assets/images/influencer-jenny.jpg'}
                    alt="Background"
                    width={1200}
                    height={600}
                    className="w-full h-[364px] object-cover"
                    />
                    <div className='absolute top-0 left-0 right-0 w-full'>
                        <div className='flex justify-between items-center pt-6 px-6 '>
                            <p className='py-[1px] px-2 bg-white rounded-full'>Technology</p>
                            <Image src="/assets/icons/heart-shape.svg" alt='Heart shape icon' width={20} height={20} />
                        </div>
                    </div>
                    <div className="rounded-xl  p-6 absolute bottom-0 left-0 right-0 bg-[linear-gradient(126.16deg,rgba(82,82,82,0.24)_-3.39%,rgba(0,30,41,0.4)_58.7%)]">
                         <div className='flex justify-between items-center'>
                            <h3 className="text-xl font-bold text-sprk-light after:content-[''] after:block after:w-[42px] after:h-[3px] after:rounded-[9px] after:bg-[linear-gradient(89.69deg,#EC3128_-14.76%,#F56233_49.73%,#FF9B3F_100%)] after:mt-2">Jenny Carr</h3>
                            <div className='flex gap-2'>
                                <button>
                                    <Image src="/assets/icons/Instagram.svg" alt='Instagram icon' width={18} height={18} />
                                </button>
                                <button>
                                    <Image src="/assets/icons/youtube.svg" alt='Instagram icon' width={22.86} height={16} />
                                </button>
                            </div>
                        </div>
                        <ul className="flex justify-between pt-4">
                            <li>
                                <p className="text-xs font-medium text-sprk-light pb-[2px]">Engagement %</p>
                                <p className="text-sm font-extrabold text-sprk-light">3 %</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-sprk-light pb-[2px]">Campaign</p>
                                <p className="text-sm font-extrabold text-sprk-light">8</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-sprk-light pb-[2px]">ROI</p>
                                <p className="text-sm font-extrabold text-sprk-light">7.6 x</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-sprk-light pb-[2px]"> Sales Generated</p>
                                <p className="text-sm font-extrabold text-sprk-light">₹ 5 Cr</p>
                            </li>
                        </ul>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
               <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                    src={'/assets/images/influencer-prajakta.jpg'}
                    alt="Background"
                    width={1200}
                    height={600}
                    className="w-full h-[364px] object-cover"
                    />
                    <div className='absolute top-0 left-0 right-0 w-full'>
                        <div className='flex justify-between items-center pt-6 px-6 '>
                            <p className='py-[1px] px-2 bg-white rounded-full'>Technology</p>
                            <Image src="/assets/icons/heart-shape.svg" alt='Heart shape icon' width={20} height={20} />
                        </div>
                    </div>
                    <div className="rounded-xl  p-6 absolute bottom-0 left-0 right-0 bg-[linear-gradient(126.16deg,rgba(82,82,82,0.24)_-3.39%,rgba(0,30,41,0.4)_58.7%)]">
                        <div className='flex justify-between items-center'>
                            <h3 className="text-xl font-bold text-sprk-light after:content-[''] after:block after:w-[42px] after:h-[3px] after:rounded-[9px] after:bg-[linear-gradient(89.69deg,#EC3128_-14.76%,#F56233_49.73%,#FF9B3F_100%)] after:mt-2">Prajakta Kohli</h3>
                            <div className='flex gap-2'>
                                <button>
                                    <Image src="/assets/icons/Instagram.svg" alt='Instagram icon' width={18} height={18} />
                                </button>
                                <button>
                                    <Image src="/assets/icons/youtube.svg" alt='Instagram icon' width={22.86} height={16} />
                                </button>
                            </div>
                        </div>
                        <ul className="flex justify-between pt-4">
                            <li>
                                <p className="text-xs font-medium text-sprk-light pb-[2px]">Engagement %</p>
                                <p className="text-sm font-extrabold text-sprk-light">5 %</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-sprk-light pb-[2px]">Campaign</p>
                                <p className="text-sm font-extrabold text-sprk-light">20</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-sprk-light pb-[2px]">ROI</p>
                                <p className="text-sm font-extrabold text-sprk-light">2.4 x</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-sprk-light pb-[2px]"> Sales Generated</p>
                                <p className="text-sm font-extrabold text-sprk-light">₹ 2 Cr</p>
                            </li>
                        </ul>
                    </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
    </>
  );
}

export default CpInfluencersPerformanceCard