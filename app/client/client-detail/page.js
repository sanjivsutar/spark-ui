'use client';

import React from 'react'
import CpClientMarketingStrategy from '@/components/cp-client-marketing-strategy/cp-client-marketing-strategy';
import CpClientDetailTabs from '@/components/cp-client-detail-tabs/cp-client-detail-tabs';
import { ClickAwayListener } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useState } from 'react';

export default function ClientListing() {
    const [open, setOpen] = useState(false);
     const handleClick = () => {
        setOpen((prev) => !prev);
    };

     const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-10'>
                        <div className='flex items-center justify-between relative'>
                            <h2 className='sec-title mb-3 flex'>
                                Client Name
                                <span className=' ml-4 text-xs font-medium px-2 py-1 bg-[#E2F8EC] text-[#257F4E] rounded-full flex items-center gap-1'>
                                    {/* <Image src="/assets/icons/Time.svg" alt='Time Icon' width={12} height={12} /> */}
                                    Active
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
                                <p className='text-xs text-[#60607B] font-medium'>Brand/Sub brand</p>
                                <p className='text-[14px] font-bold text-sprk-dark-2'>NEC Japan</p>
                            </li>
                            <li>
                                <p className='text-xs text-[#60607B] font-medium'>Modules Enrolled</p>
                                <p className='text-[14px] font-bold text-sprk-dark-2'>Marketing Strategy, Creatives, Influencers</p>
                            </li>
                            <li>
                                <p className='text-xs text-[#60607B] font-medium'>User Count</p>
                                <p className='text-[14px] font-bold text-sprk-dark-2'>5</p>
                            </li>
                            <li>
                                <p className='text-xs text-[#60607B] font-medium'>Period</p>
                                <p className='text-[14px] font-bold text-sprk-dark-2'>July 2025 - Aug 2025</p>
                            </li>
                             <li>
                                <p className='text-xs text-[#60607B] font-medium'>Currency</p>
                                <p className='text-[14px] font-bold text-sprk-dark-2'>INR</p>
                            </li>
                             <li>
                                <p className='text-xs text-[#60607B] font-medium'>Key KPI</p>
                                <p className='text-[14px] font-bold text-sprk-dark-2'>Sales</p>
                            </li>
                             <li>
                                <p className='text-xs text-[#60607B] font-medium'>Created by</p>
                                <p className='text-[14px] font-bold text-sprk-dark-2'>Omkar Bargaje</p>
                            </li>
                        </ul>
            </div>
            <CpClientDetailTabs/>
        </>
    );
}
