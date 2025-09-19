'use client';

import BarRaceChart from "@/components/cp-bar-graph/CpBarGraph";
import CpMetricCard from "@/components/cp-card/CpMetricCard";
import MainPanel from "@/components/cp-main-panel/cp-main-panel";
import BarChartStyled from "@/components/cp-performance-bar-graph/PerformanceBarGraph";
import CpScenarioCard from "@/components/cp-scenario-card/CpScenarioCard";
import ToastMessage from "@/components/cp-toast-message/CpToastMessage";
import TopPerformingContent from "@/components/cp-top-performing-content/TopPerformingContent";
import { Box, ClickAwayListener, Tab, Tabs } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function CampaignDetail() {

    const [tabValue, setTabValue] = useState("Overview");
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <>
            <MainPanel>
                <div>
                    {/* breadcrumbs start */}
                    <div className='cp-breadcrumbs'>
                        <p className='breadcrumb-item'>Campaign Listing</p>
                        <Image src="/assets/icons/Chevron-right.svg" alt='' width={12} height={12} />
                        <p className='breadcrumb-item'>Details: Campaign Name</p>
                    </div>
                    <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-10'>
                        <div className='flex items-center justify-between relative'>
                            <h2 className='sec-title mb-3 flex'>
                                Campaign Name
                                <span className=' ml-4 text-xs font-medium px-2 py-1 bg-[#FFF0E2] text-[#995D25] rounded-full flex items-center gap-1'>
                                    <Image src="/assets/icons/Time.svg" alt='Time Icon' width={12} height={12} />
                                    Ongoing
                                </span>
                            </h2>
                            {/* <Image src="/assets/icons/dots.svg" alt='' width={14} height={14} /> */}
                            <ClickAwayListener
                                mouseEvent="onMouseDown"
                                touchEvent="onTouchStart"
                                onClickAway={handleClickAway}
                            >
                                <Box>
                                    <button type="button" onClick={handleClick}>
                                        <Image src="/assets/icons/dots.svg" alt='' width={14} height={14} />
                                    </button>
                                    {open ? (
                                        <Box className="absolute right-0 bg-white rounded-xl shadow-sm border border-gray-200 py-2 px-[18px] opacity-100 transition-opacity duration-200 z-50">
                                            <p className='text-xs font-medium py-2'>Edit</p>
                                            <p className='text-xs font-medium py-2'>Delete</p>
                                        </Box>
                                    ) : null}
                                </Box>
                            </ClickAwayListener>
                        </div>
                        <p className='text-xs text-sprk-dark-2 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum, nulla at aliquam suscipit, nisi nisl iaculis velit, sit amet vulputate libero urna vitae.</p>
                        <ul className='flex justify-between mt-6 mb-6'>
                            <li>
                                <p className='text-xs text-[#60607B] font-medium'>Sub Brand</p>
                                <p className='text-[14px] font-bold text-sprk-dark-2'>NEC Japan</p>
                            </li>
                            <li>
                                <p className='text-xs text-[#60607B] font-medium'>Product</p>
                                <p className='text-[14px] font-bold text-sprk-dark-2'>Laptop</p>
                            </li>
                            <li>
                                <p className='text-xs text-[#60607B] font-medium'>Type</p>
                                <p className='text-[14px] font-bold text-sprk-dark-2'>Sustenance</p>
                            </li>
                            <li>
                                <p className='text-xs text-[#60607B] font-medium'>Period</p>
                                <p className='text-[14px] font-bold text-sprk-dark-2'>July 2025 - Aug 2025</p>
                            </li>
                        </ul>
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
                                            src="/assets/icons/parallel-arrow.svg"
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
                    <div className="">
                        <h1 className="sec-title mb-4">Scenario</h1>
                        <CpScenarioCard />
                    </div>
                    <div className='flex item-center gap-5 mt-8 rounded-2xl  w-full mb-6 shadow-lg border border-gray-200 relative'>
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/assets/images/notes-dynamic.svg"
                                alt=""
                                width={160}
                                height={160}
                            />
                        </div>
                        <div className='flex justify-between items-center w-[88%]'>
                            <div>
                                <h2 className='sec-title text-sprk-dark-2'>Create new scenario based on target, budget, threshold or custom!</h2>
                                <p className='sec-desc text-sprk-grey'>You can create multiple scenario to compare simulation report</p>
                            </div>
                            <button className='btn-default btn-dark'>Add Scenario</button>
                        </div>
                        <button className="absolute top-3 right-4  text-gray-400 hover:text-gray-600">
                            <Image src="/assets/images/close.png" alt="Icon" width={14} height={14} />
                        </button>
                    </div>
                    <section className="shadow-xl rounded-xl">
                        <Tabs
                            value={tabValue}
                            onChange={handleChange}
                            textColor="primary"
                            aria-label="custom tabs with gradient indicator"
                            slotProps={{
                                indicator: {
                                    sx: {
                                        background: "linear-gradient(90deg, #EC3128, #F56233, #FF9B3F)",
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
                                value="Overview"
                                label="Overview"
                                sx={{
                                    fontWeight: 500,
                                    color: "#60607B",
                                    textTransform: "none",
                                    padding: "24px",
                                    "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
                                }}
                            />
                            <Tab
                                value="Performance"
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
                                value="Influencer"
                                label="Influencer"
                                sx={{
                                    fontWeight: 500,
                                    color: "#60607B",
                                    textTransform: "none",
                                    padding: "24px",
                                    "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
                                }}
                            />
                        </Tabs>
                        <div className="p-6">
                            {tabValue === "Overview" && (
                                <>
                                    <div>Overview</div>
                                </>
                            )}
                            {tabValue === "Performance" && (
                                <>
                                    <div className="mb-14">
                                        {/* <div className='mb-5'>
                                            <h3 className="sec-title">Influencers Performance</h3>
                                            <p className='sec-desc text-[#60607B]'>Using your past performance data, we’ve generated insights to identify specific areas for improvement, segmented according to the data you provided.</p>
                                        </div> */}
                                        <BarChartStyled />
                                    </div>
                                    <TopPerformingContent />
                                </>
                            )}
                            {tabValue === "Influencer" && (
                                <>
                                    <div>Influencer</div>
                                </>
                            )}
                        </div>
                    </section>
                </div>
            </MainPanel>
        </>
    )
}