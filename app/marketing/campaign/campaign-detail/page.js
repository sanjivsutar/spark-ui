'use client';

import MainPanel from "@/components/cp-main-panel/cp-main-panel";
import { Box, ClickAwayListener } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function CampaignDetail() {
    
      const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    
    return(
        <>
        <MainPanel>
              <div>
        {/* breadcrumbs start */}
        <div className='cp-breadcrumbs'>
            <p className='breadcrumb-item'>Campaign Listing</p>
            <Image src="/assets/icons/Chevron-right.svg" alt='' width={12} height={12} />
            <p className='breadcrumb-item'>Details: Campaign Name</p>
        </div>
        <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
            <div className='flex items-center justify-between'>
                <h2 className='sec-title mb-3 flex items-center'>
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
                            <Box className="bg-white rounded-xl shadow-sm border border-gray-200 py-2 px-[18px]">
                                <p className='text-xs font-medium py-2'>Edit</p>
                                <p className='text-xs font-medium py-2'>Delete</p>
                            </Box>
                        ) : null}
                    </Box>
                </ClickAwayListener>          
            </div>
            <p className='text-xs text-sprk-dark-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum, nulla at aliquam suscipit, nisi nisl iaculis velit, sit amet vulputate libero urna vitae.</p>
            <ul className='flex justify-between mt-6'>
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
        </div>

        <div className='flex item-center gap-5 mt-8 rounded-2xl  w-full mb-6 py-6 shadow-lg border border-gray-200 relative'>
                  <Image src="/assets/images/thumb-up-dynamic.png" alt="Home Icon" width={84} height={84} className="bg-[url('/assets/images/Vector.png')]" />
                  <div className='flex justify-between items-center w-[88%]'>
                    <div className=''>
                        <h2 className='sec-title text-sprk-dark-2'>Create new scenario based on target, budget, threshold or custom!</h2>
                        <p className='sec-desc text-sprk-grey'>You can create multiple scenario to compare simulation report</p>
                    </div>
                    <button className='btn-default btn-dark'>Add Scenario</button>
                  </div>
                  <button className="absolute top-3 right-4  text-gray-400 hover:text-gray-600">
                    <Image src="/assets/images/close.png" alt="Icon" width={14} height={14} />
                  </button>
                </div>
        </div>
        </MainPanel>
        </>
    )
}