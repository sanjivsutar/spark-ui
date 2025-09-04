"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Chip } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const campaigns = [
  {
    status: 
      {
        icon: <ScheduleIcon sx={{ fontSize: 16 }} />,
        label: "Ongoing",
        color: "warning",
        sx: {
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: 500,
          color: "#995D25",
          backgroundColor: "#FFF0E2",
          border: "0",
          padding: "4px 8px",
          maxHeight: "24px",
        },
      },
    title: "Nike Air Max",
    date: "20th July 2025 - 20th Aug 2025",
    stats: [
      {
        label: "Allocated Budget",
        value: (
          <>
            <span className="font-medium text-[16px]">₹ </span>
            <span className="font-bold text-[20px]">12.1 </span>
            <span className="font-medium text-[16px]">Lakh</span>
          </>
        ),
      },
      {
        label: "Influencer",
        value: <span className="font-bold text-[20px]">1</span>,
      },
      {
        label: "Sales",
        value: (
          <>
            <span className="font-medium text-[16px]">₹ </span>
            <span className="font-bold text-[20px]">36.4 </span>
            <span className="font-medium text-[16px]">Lakh</span>
          </>
        ),
      },
      {
        label: "ROI",
        value: (
          <>
            <span className="font-bold text-[20px]">3.4 </span>
            <span className="font-medium text-[16px]">X</span>
          </>
        ),
      },
    ],
  },
  // Duplicate or add more campaign objects as needed
  {
    status: 
      {
        icon: <CheckIcon sx={{ fontSize: 16 }} />,
        label: "Completed",
        color: "success",
        sx: {
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: 500,
          color: "#257F4E",
          backgroundColor: "#E2F8EC",
          border: "0",
          padding: "4px 8px",
          maxHeight: "24px",
        },
      },
    title: "Adidas UltraBoost",
    date: "10th June 2025 - 10th July 2025",
    stats: [
      {
        label: "Allocated Budget",
        value: (
          <>
            <span className="font-medium text-[16px]">₹ </span>
            <span className="font-bold text-[20px]">8.5 </span>
            <span className="font-medium text-[16px]">Lakh</span>
          </>
        ),
      },
      {
        label: "Influencer",
        value: <span className="font-bold text-[20px]">2</span>,
      },
      {
        label: "Sales",
        value: (
          <>
            <span className="font-medium text-[16px]">₹ </span>
            <span className="font-bold text-[20px]">20.2 </span>
            <span className="font-medium text-[16px]">Lakh</span>
          </>
        ),
      },
      {
        label: "ROI",
        value: (
          <>
            <span className="font-bold text-[20px]">2.4 </span>
            <span className="font-medium text-[16px]">X</span>
          </>
        ),
      },
    ],
  },
  {
    status: 
      {
        icon: <ScheduleIcon sx={{ fontSize: 16 }} />,
        label: "Ongoing",
        color: "warning",
        sx: {
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: 500,
          color: "#995D25",
          backgroundColor: "#FFF0E2",
          border: "0",
          padding: "4px 8px",
          maxHeight: "24px",
        },
      },
    title: "Puma Ignite",
    date: "1st May 2025 - 31st May 2025",
    stats: [
      {
        label: "Allocated Budget",
        value: (
          <>
            <span className="font-medium text-[16px]">₹ </span>
            <span className="font-bold text-[20px]">5.0 </span>
            <span className="font-medium text-[16px]">Lakh</span>
          </>
        ),
      },
      {
        label: "Influencer",
        value: <span className="font-bold text-[20px]">3</span>,
      },
      {
        label: "Sales",
        value: (
          <>
            <span className="font-medium text-[16px]">₹ </span>
            <span className="font-bold text-[20px]">15.0 </span>
            <span className="font-medium text-[16px]">Lakh</span>
          </>
        ),
      },
      {
        label: "ROI",
        value: (
          <>
            <span className="font-bold text-[20px]">3.0 </span>
            <span className="font-medium text-[16px]">X</span>
          </>
        ),
      },
    ],
  },
  {
    status: 
      {
        icon: <CheckIcon sx={{ fontSize: 16 }} />,
        label: "Completed",
        color: "success",
        sx: {
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: 500,
          color: "#257F4E",
          backgroundColor: "#E2F8EC",
          border: "0",
          padding: "4px 8px",
          maxHeight: "24px",
        },
      },
    title: "Reebok Classic",
    date: "15th April 2025 - 15th May 2025",
    stats: [
      {
        label: "Allocated Budget",
        value: (
          <>
            <span className="font-medium text-[16px]">₹ </span>
            <span className="font-bold text-[20px]">7.2 </span>
            <span className="font-medium text-[16px]">Lakh</span>
          </>
        ),
      },
      {
        label: "Influencer",
        value: <span className="font-bold text-[20px]">2</span>,
      },
      {
        label: "Sales",
        value: (
          <>
            <span className="font-medium text-[16px]">₹ </span>
            <span className="font-bold text-[20px]">18.0 </span>
            <span className="font-medium text-[16px]">Lakh</span>
          </>
        ),
      },
      {
        label: "ROI",
        value: (
          <>
            <span className="font-bold text-[20px]">2.5 </span>
            <span className="font-medium text-[16px]">X</span>
          </>
        ),
      },
    ],
  },
];

export default function CpTopPerformingCampaigns() {
  const swiperRef = useRef(null);

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section>
      <div className="flex flex-col mb-4">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Top Performing Campaigns</h2>
        <div className="flex gap-2">
          <button
            className="custom-prev bg-gray-200 rounded-full p-2"
            onClick={goPrev}
          >
            <Image
              src="/assets/icons/left-arrow.svg"
              alt="Prev"
              width={16}
              height={16}
            />
          </button>
          <button
            className="custom-next bg-gray-200 rounded-full p-2"
            onClick={goNext}
          >
            <Image
              src="/assets/icons/right-arrow.svg"
              alt="Next"
              width={16}
              height={16}
            />
          </button>
        </div>
        </div>
        <p className="sec-desc">We’ve analyzed your previous performance data and curated a list of the best-performing campaign for your review.</p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="!pb-8"
        style={{ paddingBottom: "8px" }}
      >
        {campaigns.map((c, idx) => (
          <SwiperSlide key={idx}>
            <div className=" rounded-2xl shadow-lg p-6 border border-gray-200 bg-white h-full flex flex-col">
              <div className="flex-row items-center mb-4">
                  <Chip
                    icon={c.status.icon}
                    label={c.status.label}
                    color={c.status.color}
                    variant="outlined"
                    sx={c.status.sx}
                  />
              </div>
              <div className="flex flex-row items-center justify-between mb-6">
                <div className="card-title">{c.title}</div>
              </div>
              <div className="text-sm text-[#373748] font-bold mb-7">
                {c.date}
              </div>
              <div className="flex flex-row gap-6 mb-2">
                {c.stats.map((stat, i) => (
                  <div 
                  key={i}
                  className={`${i === 1 ? "border-r border-red-500 pr-6" : ""}`}>
                    <div>{stat.value}</div>
                    <p className="text-[10px]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}