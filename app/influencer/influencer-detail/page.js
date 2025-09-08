"use client"

import React from 'react'
import Image from 'next/image'
import ExportFile from '@/components/cp-export/CpExport'
import MainPanel from '@/components/cp-main-panel/cp-main-panel'
import BarRaceChart from '@/components/cp-bar-graph/CpBarGraph'

const InfluencerDashboard = () => {
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
        </MainPanel>
    )
}

export default InfluencerDashboard