'use client';

import React, { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import Image from 'next/image';
import MainPanel from '@/components/cp-main-panel/cp-main-panel';
import { Button, Chip, CircularProgress, Typography } from '@mui/material';

const CpScenarioDetail = () => {

    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    
    const handleClickAway = () => {
        setOpen(false);
    };

    // for progress value
    const radius = 29;
    const circumference = 2 * Math.PI * radius;
    const value = 90;

    return (
        <MainPanel>
            <div className='cp-breadcrumbs'>
                <p className='breadcrumb-item'>Campaign Listing</p>
                <Image src="/assets/icons/Chevron-right.svg" alt='' width={12} height={12} />
                <p className='breadcrumb-item'>Details: Campaign Name</p>
                <Image src="/assets/icons/Chevron-right.svg" alt='' width={12} height={12} />
                <p className='breadcrumb-item'>Scenario Name</p>
            </div>

            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
                <div className='flex items-center justify-between'>
                    <h2 className='sec-title flex items-center'>
                        Scenario Name
                        <span className=' ml-4 text-xs font-medium px-2 py-1 bg-sprk-light text-[#05051E] rounded-full flex items-center gap-1'>
                            Budget
                        </span>
                    </h2>
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
                                <Box className="bg-white rounded-xl shadow-sm border border-gray-200 py-2 px-[18px]">
                                    <p className='text-xs font-medium py-2'>Edit</p>
                                    <p className='text-xs font-medium py-2'>Delete</p>
                                </Box>
                            ) : null}
                        </Box>
                    </ClickAwayListener>          
                </div>
                <ul className='flex justify-between mt-6'>
                    <li>
                        <p className='text-xs text-[#60607B] font-medium'>Campaign</p>
                        <p className='text-[14px] font-bold text-sprk-dark-2'>Test campaign</p>
                    </li>
                    <li>
                        <p className='text-xs text-[#60607B] font-medium'>Created by</p>
                        <p className='text-[14px] font-bold text-sprk-dark-2'>Raj Kiran</p>
                    </li>
                    <li>
                        <p className='text-xs text-[#60607B] font-medium'>Last Updated</p>
                        <p className='text-[14px] font-bold text-sprk-dark-2'>July 2025 - Aug 2025</p>
                    </li>
                </ul>
            </div>

            {/* AI top fit component */}
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
                        {/* AI Top Fit Info */}
                        <div className='w-[578px]'>
                            <h2 className="font-bold text-lg text-sprk-light">AI top fit</h2>
                            <p className="text-sm font-medium text-sprk-light">
                                Considering the scenarios you’ve created for your campaigns, this is a perfect fit.
                            </p>
                        </div>

                        {/* Vertical Gradient Divider */}
                        <div className="h-16 w-[2px] bg-gradient-to-b from-[#EC3228] via-[#F66B34] to-[#FF9B3F] rounded-full mx-8"></div>

                        {/* Right Side Content */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-sprk-light font-semibold text-sm pb-2">Why is this the best fit?</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">Maximum KPI</span>
                                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">Best budget</span>
                                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">Driver budget allocation</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="absolute top-0 right-0 btn btn-gradient ml-6 rounded-2xl">
                    <Image
                        src="/assets/icons/Shape.svg"
                        alt="Home Icon"
                        width={14}
                        height={14}
                        className="invert w-[14px] h-[14px]"
                    />
                    AI-personalised for you
                </button>
            </div>
        </MainPanel>
    )
}

export default CpScenarioDetail;