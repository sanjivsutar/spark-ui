"use client";

import React from "react";
import Image from "next/image";

export default function TopPerformingContent() {
    return (
        <section>
            <h1 className="sec-title">Top Performing Content</h1>
            <div className="grid grid-cols-3 gap-5">
                <div className='flex max-w-[414px] items-start justify-start flex-col mt-8 rounded-xl  w-full mb-6 shadow-lg border border-gray-200'>
                    <div>
                        <Image
                            src="/assets/images/campaign-performance-image.png"
                            alt="Heart icon"
                            width={414}
                            height={219}
                        />
                    </div>
                    <div className="flex flex-col items-start py-6 px-4">
                        <div className="flex items-center flex-row gap-3 mb-4">
                            <div>
                                <Image
                                    src="/assets/icons/instagram-icon.svg"
                                    alt="Heart icon"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <h2 className="card-title">@prajakta_kohli</h2>
                        </div>
                        <div className="flex flex-row items-center gap-2 mb-5"><span className="label">Technology</span><span className="label">Instagram</span><span className="label">Story</span></div>
                        <div className="flex flex-row gap-6 mb-3">
                            <div className="flex flex-row items-center gap-1"><span >
                                <Image
                                    src="/assets/icons/calender-icon.svg"
                                    alt="Calander"
                                    width={12}
                                    height={12}
                                />
                            </span><span className="text-[12px] text-[#373748]">12th August, 2025</span></div>
                            <div className="flex flex-row items-center gap-1"><span >
                                <Image
                                    src="/assets/icons/location-icon.svg"
                                    alt="Location"
                                    width={12}
                                    height={12}
                                />
                            </span><span className="text-[12px] text-[#373748]">United Kingdom</span></div>
                            <div className="flex flex-row items-center gap-1"><span >
                                <Image
                                    src="/assets/icons/language-icon.svg"
                                    alt="Language"
                                    width={12}
                                    height={12}
                                />
                            </span><span className="text-[12px] text-[#373748]">English</span></div>
                        </div>
                        <div className="inline-flex flex-row rounded-xl w-full items-center justify-between mb-6 bg-[#F7FAFD] px-4 py-2">
                            <div className="flex flex-row items-center gap-2"><span className="eyebrow-title">CTR</span><span className="text-[14px] text-[#040406] font-bold">3.5 %</span></div>
                            <span class="mx-5 h-5 w-px bg-[#EC3228]"></span>
                            <div className="flex flex-row items-center gap-2"><span className="eyebrow-title">Engagement %</span><span className="text-[14px] text-[#040406] font-bold">5 %</span></div>
                        </div>
                        <div>
                            <ul className="grid grid-cols-4 w-full">
                                <li className="px-4">
                                    <div className="eyebrow-title">Like</div>
                                    <div className="text-[14px] text-[#0D0D11] font-bold">100k</div>
                                </li>
                                <li className="px-4">
                                    <div className="eyebrow-title">Share</div>
                                    <div className="text-[14px] text-[#0D0D11] font-bold">100</div>
                                </li>
                                <li className="px-4">
                                    <div className="eyebrow-title">Comments</div>
                                    <div className="text-[14px] text-[#0D0D11] font-bold">200</div>
                                </li>
                                <li className="px-4">
                                    <div className="eyebrow-title">Views</div>
                                    <div className="text-[14px] text-[#0D0D11] font-bold">100</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex max-w-[414px] items-start justify-start flex-col mt-8 rounded-xl  w-full mb-6 shadow-lg border border-gray-200'>
                    <div>
                        <Image
                            src="/assets/images/campaign-performance-image.png"
                            alt="Heart icon"
                            width={414}
                            height={219}
                        />
                    </div>
                    <div className="flex flex-col items-start py-6 px-4">
                        <div className="flex items-center flex-row gap-3 mb-4">
                            <div>
                                <Image
                                    src="/assets/icons/instagram-icon.svg"
                                    alt="Heart icon"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <h2 className="card-title">@prajakta_kohli</h2>
                        </div>
                        <div className="flex flex-row items-center gap-2 mb-5"><span className="label">Technology</span><span className="label">Instagram</span><span className="label">Story</span></div>
                        <div className="flex flex-row gap-6 mb-3">
                            <div className="flex flex-row items-center gap-1"><span >
                                <Image
                                    src="/assets/icons/calender-icon.svg"
                                    alt="Calander"
                                    width={12}
                                    height={12}
                                />
                            </span><span className="text-[12px] text-[#373748]">12th August, 2025</span></div>
                            <div className="flex flex-row items-center gap-1"><span >
                                <Image
                                    src="/assets/icons/location-icon.svg"
                                    alt="Location"
                                    width={12}
                                    height={12}
                                />
                            </span><span className="text-[12px] text-[#373748]">United Kingdom</span></div>
                            <div className="flex flex-row items-center gap-1"><span >
                                <Image
                                    src="/assets/icons/language-icon.svg"
                                    alt="Language"
                                    width={12}
                                    height={12}
                                />
                            </span><span className="text-[12px] text-[#373748]">English</span></div>
                        </div>
                        <div className="inline-flex flex-row rounded-xl w-full items-center justify-between mb-6 bg-[#F7FAFD] px-4 py-2">
                            <div className="flex flex-row items-center gap-2"><span className="eyebrow-title">CTR</span><span className="text-[14px] text-[#040406] font-bold">3.5 %</span></div>
                            <span class="mx-5 h-5 w-px bg-[#EC3228]"></span>
                            <div className="flex flex-row items-center gap-2"><span className="eyebrow-title">Engagement %</span><span className="text-[14px] text-[#040406] font-bold">5 %</span></div>
                        </div>
                        <div>
                            <ul className="grid grid-cols-4 w-full">
                                <li className="px-4">
                                    <div className="eyebrow-title">Like</div>
                                    <div className="text-[14px] text-[#0D0D11] font-bold">100k</div>
                                </li>
                                <li className="px-4">
                                    <div className="eyebrow-title">Share</div>
                                    <div className="text-[14px] text-[#0D0D11] font-bold">100</div>
                                </li>
                                <li className="px-4">
                                    <div className="eyebrow-title">Comments</div>
                                    <div className="text-[14px] text-[#0D0D11] font-bold">200</div>
                                </li>
                                <li className="px-4">
                                    <div className="eyebrow-title">Views</div>
                                    <div className="text-[14px] text-[#0D0D11] font-bold">100</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex max-w-[414px] items-start justify-start flex-col mt-8 rounded-xl  w-full mb-6 shadow-lg border border-gray-200'>
                    <div>
                        <Image
                            src="/assets/images/campaign-performance-image.png"
                            alt="Heart icon"
                            width={414}
                            height={219}
                        />
                    </div>
                    <div className="flex flex-col items-start py-6 px-4">
                        <div className="flex items-center flex-row gap-3 mb-4">
                            <div>
                                <Image
                                    src="/assets/icons/instagram-icon.svg"
                                    alt="Heart icon"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <h2 className="card-title">@prajakta_kohli</h2>
                        </div>
                        <div className="flex flex-row items-center gap-2 mb-5"><span className="label">Technology</span><span className="label">Instagram</span><span className="label">Story</span></div>
                        <div className="flex flex-row gap-6 mb-3">
                            <div className="flex flex-row items-center gap-1"><span >
                                <Image
                                    src="/assets/icons/calender-icon.svg"
                                    alt="Calander"
                                    width={12}
                                    height={12}
                                />
                            </span><span className="text-[12px] text-[#373748]">12th August, 2025</span></div>
                            <div className="flex flex-row items-center gap-1"><span >
                                <Image
                                    src="/assets/icons/location-icon.svg"
                                    alt="Location"
                                    width={12}
                                    height={12}
                                />
                            </span><span className="text-[12px] text-[#373748]">United Kingdom</span></div>
                            <div className="flex flex-row items-center gap-1"><span >
                                <Image
                                    src="/assets/icons/language-icon.svg"
                                    alt="Language"
                                    width={12}
                                    height={12}
                                />
                            </span><span className="text-[12px] text-[#373748]">English</span></div>
                        </div>
                        <div className="inline-flex flex-row rounded-xl w-full items-center justify-between mb-6 bg-[#F7FAFD] px-4 py-2">
                            <div className="flex flex-row items-center gap-2"><span className="eyebrow-title">CTR</span><span className="text-[14px] text-[#040406] font-bold">3.5 %</span></div>
                            <span class="mx-5 h-5 w-px bg-[#EC3228]"></span>
                            <div className="flex flex-row items-center gap-2"><span className="eyebrow-title">Engagement %</span><span className="text-[14px] text-[#040406] font-bold">5 %</span></div>
                        </div>
                        <div>
                            <ul className="grid grid-cols-4 w-full">
                                <li className="px-4">
                                    <div className="eyebrow-title">Like</div>
                                    <div className="text-[14px] text-[#0D0D11] font-bold">100k</div>
                                </li>
                                <li className="px-4">
                                    <div className="eyebrow-title">Share</div>
                                    <div className="text-[14px] text-[#0D0D11] font-bold">100</div>
                                </li>
                                <li className="px-4">
                                    <div className="eyebrow-title">Comments</div>
                                    <div className="text-[14px] text-[#0D0D11] font-bold">200</div>
                                </li>
                                <li className="px-4">
                                    <div className="eyebrow-title">Views</div>
                                    <div className="text-[14px] text-[#0D0D11] font-bold">100</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}