"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import ExportFile from '@/components/cp-export/CpExport'
import MainPanel from '@/components/cp-main-panel/cp-main-panel'
import BarRaceChart from '@/components/cp-bar-graph/CpBarGraph'
import { Tab, Tabs } from "@mui/material";
import CpMetricCard from '@/components/cp-card/CpMetricCard'
import CpInfluencerDetailSwiper from '@/components/cp-influencer-detail/CpInfluencerDetailSwiper'

const InfluencerDashboard = () => {

     // for progress value
    const radius = 29;
    const circumference = 2 * Math.PI * radius;
    const value = 92;

    // for tabs
    const [tabValue, setTabValue] = useState("two");
    
      const handleChange = (event, newValue) => {
        setTabValue(newValue);
      };
    

    return (
        <MainPanel>
            {/* Influencer Details Section */}
            <section>
                <div className="flex-1 rounded-xl shadow-lg p-6 border border-gray-200 relative overflow-hidden">
                    <div className='flex flex-row items-center justify-between mb-4'>
                        <div className='flex flex-row items-center justify-center gap-4'>
                            <h1 className='sec-title'>Influencer Name</h1>
                            <p className='label'>Technology</p>
                        </div>
                        <div className='flex flex-row gap-[6px]'>
                            <ExportFile />
                            <button>
                                <Image
                                    src="/assets/icons/heart-icon.svg"
                                    alt="Heart icon"
                                    width={20}
                                    height={20}
                                />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-30 mb-6'>
                        <div className='flex flex-row items-center justify-center gap-[6px]'>
                            <Image
                                src="/assets/icons/instagram-icon.svg"
                                alt="Heart icon"
                                width={20}
                                height={20}
                            /><span>abc@instagram</span>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-[6px]'>
                            <Image
                                src="/assets/icons/zoom.svg"
                                alt="Zoom icon"
                                width={20}
                                height={20}
                            /><span>abc@youtube</span>
                        </div>
                    </div>
                    <div className='flex mb-6'>
                        <ul className='flex flex-row align-centre justify-start gap-28'>
                            <li>
                                <div className='sec-desc text-[#60607B]'>Gender</div>
                                <div className='sec-desc font-bold'>Male</div>
                            </li>
                            <li>
                                <div className='sec-desc text-[#60607B]'>Age</div>
                                <div className='sec-desc font-bold'>25 Years</div>
                            </li>
                            <li>
                                <div className='sec-desc text-[#60607B]'>Language</div>
                                <div className='sec-desc font-bold'>Hindi<span>,</span><span>English</span></div>
                            </li>
                            <li>
                                <div className='sec-desc text-[#60607B]'>Gender</div>
                                <div className='sec-desc font-bold'>Male</div>
                            </li>
                            <li>
                                <div className='sec-desc text-[#60607B]'>Location</div>
                                <div className='sec-desc font-bold'>India</div>
                            </li>
                            <li>
                                <div className='sec-desc text-[#60607B]'>Active Channels</div>
                                <div className='flex flex-row items-center justify-start gap-2'>
                                    <Image
                                        src="/assets/icons/instagram-icon.svg"
                                        alt="Heart icon"
                                        width={20}
                                        height={20}
                                    />
                                    <Image
                                        src="/assets/icons/Zoom.svg"
                                        alt="Zoom icon"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className='sec-desc text-[#60607B]'>Brand Partnered</div>
                                <div className='sec-desc font-bold'>12th July, 2018</div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1 min-w-0 rounded-xl shadow-lg py-6 px-5 border border-gray-200 relative overflow-hidden card-bg">
                            <div className="relative z-10 flex justify-between pb-4">
                                <div>
                                    <p>
                                        <span className="font-medium text-2xl">₹ </span>
                                        <span className="font-bold text-[38px]">61.5 </span>
                                        <span className="font-medium text-2xl">Lakh</span>
                                    </p>
                                    <h4 className="text-xs">Influencer Budget</h4>
                                </div>
                                <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                                    <Image
                                        src="/assets/icons/Calculator.svg"
                                        alt="Icon"
                                        width={14}
                                        height={14}
                                        className="invert brightness-0"
                                    />
                                </div>
                            </div>
                            <span className="metric-card-label blue">
                                0.8% Spent
                                <Image
                                    src="/assets/icons/arrow-left.svg"
                                    className="arrow-red"
                                    alt="Icon"
                                    width={16}
                                    height={16}
                                />
                            </span>
                        </div>

                        <div className="flex-1 min-w-0 rounded-xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
                            <div className="relative z-10 flex justify-between pb-4">
                                <div>
                                    <p>
                                        <span className="font-medium text-2xl">₹ </span>
                                        <span className="font-bold text-[38px]">2.32 </span>
                                        <span className="font-medium text-2xl">Cr</span>
                                    </p>
                                    <h4 className="text-xs">Total Revenue Generated</h4>
                                </div>
                                <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                                    <Image
                                        src="/assets/icons/rupee.svg"
                                        alt="Icon"
                                        width={14}
                                        height={14}
                                        className="invert brightness-0"
                                    />
                                </div>
                            </div>
                            <span className="metric-card-label red">
                                + 275% v/s Target
                                <Image
                                    src="/assets/icons/arrow-left.svg"
                                    className="arrow-red"
                                    alt="Icon"
                                    width={16}
                                    height={16}
                                />
                            </span>
                        </div>

                        <div className="flex-1 min-w-0 rounded-xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
                            <div className="relative z-10 flex justify-between pb-4">
                                <div>
                                    <p>
                                        <span className="font-bold text-[38px]">5 </span>
                                        <span className="font-medium text-2xl">%</span>
                                    </p>
                                    <h4 className="text-xs">Engagement %</h4>
                                </div>
                                <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                                    <Image
                                        src="/assets/icons/market-graph.svg"
                                        alt="Icon"
                                        width={14}
                                        height={14}
                                        className="invert brightness-0"
                                    />
                                </div>
                            </div>
                            <span className="metric-card-label blue">
                                275% ROI
                                <Image
                                    src="/assets/icons/arrow-left.svg"
                                    className="arrow-red"
                                    alt="Icon"
                                    width={16}
                                    height={16}
                                />
                            </span>
                        </div>
                        <div className="flex-1 min-w-0 rounded-xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
                            <div className="relative z-10 flex justify-between pb-4">
                                <div>
                                    <p>
                                        <span className="font-bold text-[38px]">20</span>
                                        {/* <span className="font-medium text-2xl">%</span> */}
                                    </p>
                                    <h4 className="text-xs">Campaigns</h4>
                                </div>
                                <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                                    <Image
                                        src="/assets/icons/campaign.svg"
                                        alt="Icon"
                                        width={14}
                                        height={14}
                                        className="invert brightness-0"
                                    />
                                </div>
                            </div>
                            <span className="metric-card-label blue">
                                8.87% Conversion Rate
                                <Image
                                    src="/assets/icons/arrow-left.svg"
                                    className="arrow-red"
                                    alt="Icon"
                                    width={16}
                                    height={16}
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                <div className='mb-5'>
                <h3 className="sec-title">Influencers Performance</h3>
                <p className='sec-desc text-[#60607B]'>Using your past performance data, we’ve generated insights to identify specific areas for improvement, segmented according to the data you provided.</p>
                </div>
                <BarRaceChart
                labels={['Instagram', 'Youtube', 'Tiktok', 'Twitter', 'LinkedIn']}
                maxBars={3}
                intervalMs={3000}
                seriesName="X"
                height={320}
                />
            </div>
            </section>

            {/* Followers section */}
            <div className='pt-8'>
                <h2 className='sec-title text-sprk-dark-2 pb-3'>Followers</h2>
                  <div className="flex gap-4">
                        <div className="flex-1 min-w-0 rounded-xl shadow-lg py-6 px-5 border border-gray-200 relative overflow-hidden">
                            <div className="relative z-10 flex justify-between pb-4">
                                <div>
                                    <p>
                                        <span className="font-bold text-[38px] text-sprk-dark">1.5</span>
                                        <span className="font-medium text-[22px] text-sprk-dark"> M</span>
                                    </p>
                                    <h3 className="text-xs text-sprk-grey font-medium">Youtube</h3>
                                </div>
                                <div className="rounded-full flex justify-center items-center">
                                    <Image
                                        src="/assets/images/card-youtube.png"
                                        alt="Icon"
                                        width={40}
                                        height={40}
                                        className=""
                                    />
                                </div>
                            </div>
                            <span className="metric-card-label green">
                                <Image
                                    src="/assets/icons/plus.svg"
                                    className="plus"
                                    alt="Icon"
                                    width={12}
                                    height={12}
                                />
                                20%
                                <Image
                                    src="/assets/icons/Arrow-top-right.svg"
                                    className="plus"
                                    alt="Icon"
                                    width={16}
                                    height={16}
                                />
                            </span>
                        </div>

                         <div className="flex-1 min-w-0 rounded-xl shadow-lg py-6 px-5 border border-gray-200 relative overflow-hidden">
                            <div className="relative z-10 flex justify-between pb-4">
                                <div>
                                    <p>
                                        <span className="font-bold text-[38px] text-sprk-dark">252</span>
                                        <span className="font-medium text-[22px] text-sprk-dark"> K</span>
                                    </p>
                                    <h3 className="text-xs text-sprk-grey font-medium">Instagram</h3>
                                </div>
                                <div className="rounded-full flex justify-center items-center">
                                    <Image
                                        src="/assets/images/card-instagram.png"
                                        alt="Icon"
                                        width={40}
                                        height={40}
                                        className=""
                                    />
                                </div>
                            </div>
                            <span className="metric-card-label red">
                                <Image
                                    src="/assets/icons/minus.svg"
                                    className="minus"
                                    alt="Icon"
                                    width={12}
                                    height={12}
                                />
                                5%
                                <Image
                                    src="/assets/icons/arrow-left.svg"
                                    className="arrow-red"
                                    alt="Icon"
                                    width={16}
                                    height={16}
                                />
                            </span>
                        </div>

                        <div className="flex-1 min-w-0 rounded-xl shadow-lg py-6 px-5 border border-gray-200 relative overflow-hidden">
                            <div className="relative z-10 flex justify-between pb-4">
                                <div>
                                    <p>
                                        <span className="font-bold text-[38px] text-sprk-dark">800</span>
                                        <span className="font-medium text-[22px] text-sprk-dark"> K</span>
                                    </p>
                                    <h3 className="text-xs text-sprk-grey font-medium">TikTok</h3>
                                </div>
                                <div className="rounded-full flex justify-center items-center">
                                    <Image
                                        src="/assets/images/card-tiktok.png"
                                        alt="Icon"
                                        width={40}
                                        height={40}
                                        className=""
                                    />
                                </div>
                            </div>
                            <span className="metric-card-label green">
                                <Image
                                    src="/assets/icons/plus.svg"
                                    className="plus"
                                    alt="Icon"
                                    width={12}
                                    height={12}
                                />
                                20%
                                <Image
                                    src="/assets/icons/Arrow-top-right.svg"
                                    className="arrow-red"
                                    alt="Icon"
                                    width={16}
                                    height={16}
                                />
                            </span>
                        </div>
                       
                         <div className="flex-1 min-w-0 rounded-xl shadow-lg py-6 px-5 border border-gray-200 relative overflow-hidden">
                            <div className="relative z-10 flex justify-between pb-4">
                                <div>
                                    <p>
                                        <span className="font-bold text-[38px] text-sprk-dark">100</span>
                                        <span className="font-medium text-[22px] text-sprk-dark"> K</span>
                                    </p>
                                    <h3 className="text-xs text-sprk-grey font-medium">Facebook</h3>
                                </div>
                                <div className="rounded-full flex justify-center items-center">
                                    <Image
                                        src="/assets/images/card-facebook.png"
                                        alt="Icon"
                                        width={40}
                                        height={40}
                                        className=""
                                    />
                                </div>
                            </div>
                            <span className="metric-card-label red">
                                <Image
                                    src="/assets/icons/minus.svg"
                                    className="minus"
                                    alt="Icon"
                                    width={12}
                                    height={12}
                                />
                                2%
                                <Image
                                    src="/assets/icons/arrow-left.svg"
                                    className="arrow-red"
                                    alt="Icon"
                                    width={16}
                                    height={16}
                                />
                            </span>
                        </div>
                    </div>
            </div>

            {/* Optimal match section */}
            <div className="relative flex items-center justify-between bg-[url('/assets/images/AI-driven-bg.png')] bg-cover bg-center py-[12.5px] px-8 rounded-2xl shadow-lg mt-8">
                <div className="flex items-center gap-10">
                    {/* Progress Circle */}
                    <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 -rotate-90">
                            <circle
                                cx="32"
                                cy="32"
                                r={radius}
                                stroke="#f7f7f8"
                                strokeWidth="6"
                                fill="transparent"
                            />
                            <circle
                                cx="32"
                                cy="32"
                                r={radius}
                                stroke="url(#borderGradient)"
                                strokeWidth="6"
                                strokeDasharray={circumference}
                                strokeDashoffset={circumference * (1 - value / 100)}
                                fill="transparent"
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient id="borderGradient" gradientTransform="rotate(268.87)">
                                    <stop offset="4.49%" stopColor="#EC3228" />
                                    <stop offset="86.06%" stopColor="#F66B34" />
                                    <stop offset="126.9%" stopColor="#FF9B3F" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center font-bold text-lg text-sprk-light">
                            {value}%
                        </span>
                    </div>
            
                    <div className='flex justify-between'>
                        <div className='w-[578px]'>
                            <h2 className="font-bold text-lg text-sprk-light">Optimal match</h2>
                            <p className="text-sm font-medium text-sprk-light">
                                Considering the influencers you’ve created for your campaigns, this is a perfect fit.
                            </p>
                        </div>
            
                        {/* Vertical Gradient Divider */}
                        <div className="h-16 w-[2px] bg-gradient-to-b from-[#EC3228] via-[#F66B34] to-[#FF9B3F] rounded-full mx-8"></div>
            
                        {/* Right Side Content */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-sprk-light font-semibold text-sm pb-2">Topics they talk about?</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">Artificial Intelligence</span>
                                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">Machine Learning</span>
                                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">Entertainment</span>
                                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">Gaming</span>
                                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">VFX</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="absolute top-0 right-0 btn btn-gradient ml-6 rounded-2xl">
                    <Image
                        src="/assets/icons/Shape.svg"
                        alt="shape Icon"
                        width={14}
                        height={14}
                        className="invert w-[14px] h-[14px]"
                    />
                    AI-personalised for you
                </button>
            </div>

            {/* tabs and bellow section */}
            <div className='mt-8 rounded-xl shadow-lg border border-gray-200'>
                {/* tab section */}
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    textColor='primary'
                    aria-label="custom tabs with gradient indicator"
                    slotProps={{
                    indicator: {
                        sx: {
                            background:
                                "linear-gradient(90deg, #EC3128, #F56233, #FF9B3F)",
                            height: 4,
                            borderRadius: 2,
                        },
                    },
                    }}
                    sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    }}
                >
                    <Tab
                        value="one"
                        label="Performance"
                        sx={{
                            fontWeight: 500,
                            color: "#60607B",
                            textTransform: "none",
                            padding: "24px",
                            "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
                        }}
                    />
                    <Tab
                    value="two"
                    label="Content"
                    sx={{
                        fontWeight: 500,
                        color: "#60607B",
                        textTransform: "none",
                        padding: "24px",
                         "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
                    }}
                    />
                    <Tab
                    value="three"
                    label="Campaigns"
                    sx={{
                        fontWeight: 500,
                        color: "#60607B",
                        textTransform: "none",
                        padding: "24px",
                        "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
                    }}
                    />
                </Tabs>

                {/* tab bellow section */}
                <div className='px-6 pt-6'>
                    <div className='flex gap-2'>
                        <Image
                            src="/assets/images/card-instagram.png"
                            alt='Instagram image'
                            width={24}
                            height={24}
                            style={{objectFit: 'contain'}}
                        />
                        <h3 className='sec-title text-sprk-dark-2'>Instagram</h3>
                    </div>
                    <CpMetricCard />
                    <CpInfluencerDetailSwiper />
                </div>
            </div>

        </MainPanel>
    )
}

export default InfluencerDashboard