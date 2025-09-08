'use client';

import Image from 'next/image';
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { handleArrowState } from '@/utils/Swiper';

const CpInfluencerDetailSwiper = () => {

  const swiperRefs = useRef({});

  const goNextSlide = (id) => {
    swiperRefs.current[id]?.slideNext();
  };

  const goPrevslide = (id) => {
    swiperRefs.current[id]?.slidePrev();
  };

const swiperCards = [
    {
        cardImage: '/assets/images/influencer-rohit.jpg',
        platformImage: '/assets/icons/instagram.svg',
        platformUsername: '@rohit.K',
        platFormDetail: [
            {
                title: 'Like',
                value: '100K'
            },
             {
                title: 'Share',
                value: '100'
            },
             {
                title: 'Comments',
                value: '200'
            }
        ]
    },
    {
        cardImage: '/assets/images/influencer-prachi.jpg',
        platformImage: '/assets/icons/instagram.svg',
        platformUsername: '@pra.chi',
        platFormDetail: [
            {
                title: 'Like',
                value: '100K'
            },
             {
                title: 'Share',
                value: '100'
            },
             {
                title: 'Comments',
                value: '200'
            }
        ]
    },
    {
        cardImage: '/assets/images/influencer-rohit.jpg',
        platformImage: '/assets/icons/instagram.svg',
        platformUsername: '@rohit.K',
        platFormDetail: [
            {
                title: 'Like',
                value: '100K'
            },
             {
                title: 'Share',
                value: '100'
            },
             {
                title: 'Comments',
                value: '200'
            }
        ]
    },
    {
        cardImage: '/assets/images/influencer-prachi.jpg',
        platformImage: '/assets/icons/instagram.svg',
        platformUsername: '@pra.chi',
        platFormDetail: [
            {
                title: 'Like',
                value: '100K'
            },
             {
                title: 'Share',
                value: '100'
            },
             {
                title: 'Comments',
                value: '200'
            }
        ]
    },
     {
        cardImage: '/assets/images/influencer-rohit.jpg',
        platformImage: '/assets/icons/instagram.svg',
        platformUsername: '@rohit.K',
        platFormDetail: [
            {
                title: 'Like',
                value: '100K'
            },
             {
                title: 'Share',
                value: '100'
            },
             {
                title: 'Comments',
                value: '200'
            }
        ]
    },
]
  return (
    <div className='influencers-profile-section'>
        <div className="flex flex-wrap gap-4 pt-7">
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                modules={[Navigation]}
                onSwiper={(swiper) =>
                    (swiperRefs.current["influencers-profile"] = swiper)
                }
                onSlideChange={(swiper) =>
                    handleArrowState(
                        "influencer-for-you",
                        swiper,
                        ".influencers-profile-section .custom-prev",
                        ".influencers-profile-section .custom-next"
                    )
                }
                onAfterInit={(swiper) => {
                    handleArrowState(
                        "influencers-profile",
                        swiper,
                        ".influencers-profile-section .custom-prev",
                        ".influencers-profile-section .custom-next"
                    );
                }}
            >
                {
                    swiperCards.map((card, index) => {
                        return(
                            <SwiperSlide key={`swiperSlide_${index}`}>
                                <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
                                    <div className="relative">
                                        <Image
                                        src={card.cardImage}
                                        alt="Profile"
                                        width={350}
                                        height={250}
                                        className="w-full h-[250px] object-cover"
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)]" />

                                        <div className="absolute bottom-4 right-4 flex items-center gap-2">
                                            <Image
                                                src={card.platformImage}
                                                alt="Instagram"
                                                width={20}
                                                height={20}
                                            />
                                            <p className="text-sprk-light-1 font-semibold text-[10px]">{card.platformUsername}</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-around py-4">
                                        {
                                            card.platFormDetail.map((data, index) => {
                                                return(
                                                    <div key={`plafformDetail_${index}`}>
                                                        <p className="text-xs text-sprk-grey font-medium">{data.title}</p>
                                                        <p className="font-extrabold text-sm text-sprk-dark-2">{data.value}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>
        </div>
         <div className="absolute right-8 my-5 flex gap-[16px]">
            <button
                className="custom-prev"
                onClick={() => goPrevslide("influencers-profile")}
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
                onClick={() => goNextSlide("influencers-profile")}
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

  );
}

export default CpInfluencerDetailSwiper