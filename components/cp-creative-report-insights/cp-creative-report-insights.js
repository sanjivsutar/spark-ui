"use client";

import { Tab, Tabs } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useState } from "react";

function AspectRatio() {
    return (
        <div className="flex flex-row items-center w-full">
            <div className="flex flex-row items-end gap-4 w-[76%] p-8">
                <div>
                    <div className="py-4 px-6">
                        <div className="label mb-15 w-15 bg-[#F1ABA7]">Negaive</div>
                        <Image
                            src="/assets/images/negative-image.png"
                            alt="Insights Image"
                            width={185}
                            height={240}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div className="py-4 px-6">
                            <div className="label mb-15 w-15 bg-[#FFF3AA]">Neutral</div>
                            <Image
                                src="/assets/images/positive-image.png"
                                alt="Insights Image"
                                width={185}
                                height={240}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-center">
                        <div className="py-4 px-6">
                            <div className="label mb-15 w-15 bg-[#9FEAC1]">Positive</div>
                            <Image
                                src="/assets/images/neutral-image.png"
                                alt="Insights Image"
                                width={185}
                                height={240}
                            />
                        </div>
                        <div>
                            <div className="mb-15"></div>
                            <Image
                                src="/assets/images/insights-image.png"
                                alt="Insights Image"
                                width={185}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className="flex flex-col items-center relative left-0 w-[24%] border-[1px] border-[#CECED6] rounded-[12px] px-6 py-26 bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)]">
                <div className="mb-6">
                    <Image
                        src="/assets/icons/aspect-ratio-icon.svg"
                        alt="Aspect ratio icon"
                        width={30}
                        height={30}
                    />
                </div>
                <ul className="list-disc pl-5 flex flex-col gap-4">
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                </ul>
            </div>
        </div>
    );
}

function TextContext() {
    return (
        <div className="flex flex-row items-center w-full">
            <div className="flex flex-row items-end gap-4 w-[76%] p-8 gap-4">
                <div className="w-[50%] py-6 px-4">
                    <div className="label mb-6 w-15 bg-[#F1ABA7]">Negaive</div>
                    <div className="mb-6 border border-[] bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)] rounded-[12px] px-6 py-[30px]">
                        <div className="flex flex-row gap-2 items-center"><span>
                            <Image
                                src="/assets/icons/image-icon.svg"
                                alt="Heart icon"
                                width={12}
                                height={10}
                            />
                        </span>
                            <span className="text-sm text-[#F7F7F8]">Theme of Text Content</span></div>
                        <div className="text-sm text-[#EEEEF1]">Adventure</div>
                    </div>
                    <div className="border border-[] bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)] rounded-[12px] px-6 py-[30px]">
                        <div className="flex flex-row gap-2 items-center"><span>
                            <Image
                                src="/assets/icons/text-search-icon.svg"
                                alt="Heart icon"
                                width={12}
                                height={10}
                            />
                        </span>
                            <span className="text-sm text-[#F7F7F8]">Theme of Text Content</span></div>
                        <div className="text-sm text-[#EEEEF1]">0 - 14 {">"}28</div>
                    </div>
                </div>
                <div className="w-[50%] py-6 px-4">
                    <div className="label mb-6 w-15 bg-[#9FEAC1]">Positive</div>
                    <div className="mb-6 border border-[] bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)] rounded-[12px] px-6 py-[30px]">
                        <div className="flex flex-row gap-2 items-center"><span>
                            <Image
                                src="/assets/icons/image-icon.svg"
                                alt="Heart icon"
                                width={12}
                                height={10}
                            />
                        </span>
                            <span className="text-sm text-[#F7F7F8]">Number of Text Elements</span></div>
                        <div className="text-sm text-[#EEEEF1]">0 - 14 {">"}28</div>
                    </div>
                    <div className="border border-[] bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)] rounded-[12px] px-6 py-[30px]">
                        <div className="flex flex-row gap-2 items-center"><span>
                            <Image
                                src="/assets/icons/text-search-icon.svg"
                                alt="Heart icon"
                                width={12}
                                height={10}
                            />
                        </span>
                            <span className="text-sm text-[#F7F7F8]">Theme of Text Content</span></div>
                        <div className="text-sm text-[#EEEEF1]">Sad</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center relative left-0 w-[24%] border-[1px] border-[#CECED6] rounded-[12px] px-6 py-26 bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)]">
                <div className="mb-6">
                    <Image
                        src="/assets/icons/t-plus.svg"
                        alt="Aspect ratio icon"
                        width={30}
                        height={30}
                    />
                </div>
                <ul className="list-disc pl-5 flex flex-col gap-4">
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                </ul>
            </div>
        </div>
    )
}

function ShortsAndObjects() {
    return (
        <div className="flex flex-row items-center w-full">
            <div className="flex flex-row items-end gap-4 w-[76%] p-8 gap-4">
                <div className="w-[50%] py-6 px-4">
                    <div className="label mb-6 w-15 bg-[#F1ABA7]">Negaive</div>
                    <div className="mb-6 border border-[] bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)] rounded-[12px] px-6 py-[30px]">
                        <div className="flex flex-row gap-2 items-center"><span>
                            <Image
                                src="/assets/icons/person-icon.svg"
                                alt="Person icon"
                                width={12}
                                height={10}
                            />
                        </span>
                            <span className="text-sm text-[#F7F7F8]">Theme of Text Content</span></div>
                        <div className="text-sm text-[#EEEEF1]">Adventure</div>
                    </div>
                    <div className="border border-[] bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)] rounded-[12px] px-6 py-[30px]">
                        <div className="flex flex-row gap-2 items-center"><span>
                            <Image
                                src="/assets/icons/text-search-icon.svg"
                                alt="Person icon"
                                width={12}
                                height={10}
                            />
                        </span>
                            <span className="text-sm text-[#F7F7F8]">Theme of Text Content</span></div>
                        <div className="text-sm text-[#EEEEF1]">0 - 14 {">"}28</div>
                    </div>
                </div>
                <div className="w-[50%] py-6 px-4">
                    <div className="label mb-6 w-15 bg-[#9FEAC1]">Positive</div>
                    <div className="mb-6 border border-[] bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)] rounded-[12px] px-6 py-[30px]">
                        <div className="flex flex-row gap-2 items-center"><span>
                            <Image
                                src="/assets/icons/cards-icon.svg"
                                alt="Cards icon"
                                width={12}
                                height={10}
                            />
                        </span>
                            <span className="text-sm text-[#F7F7F8]">Number of Text Elements</span></div>
                        <div className="text-sm text-[#EEEEF1]">0 - 14 {">"}28</div>
                    </div>
                    <div className="border border-[] bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)] rounded-[12px] px-6 py-[30px]">
                        <div className="flex flex-row gap-2 items-center"><span>
                            <Image
                                src="/assets/icons/cards-icon.svg"
                                alt="Cards icon"
                                width={12}
                                height={10}
                            />
                        </span>
                            <span className="text-sm text-[#F7F7F8]">Theme of Text Content</span></div>
                        <div className="text-sm text-[#EEEEF1]">Sad</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center relative left-0 w-[24%] border-[1px] border-[#CECED6] rounded-[12px] px-6 py-26 bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)]">
                <div className="mb-6">
                    <Image
                        src="/assets/icons/cube-icon.svg"
                        alt="Cube Icon"
                        width={30}
                        height={30}
                    />
                </div>
                <ul className="list-disc pl-5 flex flex-col gap-4">
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                </ul>
            </div>
        </div>
    )
}

function BackgroundSetup() {
    return (
        <div className="flex flex-row items-center w-full">
            <div className="flex flex-row items-end gap-4 w-[76%] p-8">
                <div className="flex flex-col items-center p-6 w-[50%]">
                    <div className="label mb-6 w-15 bg-[#F1ABA7] self-start">Negaive</div>
                    <div className="flex flex-col text-center">
                        <Image
                            src="/assets/images/background-setup-image-1.png"
                            alt="Insights Image"
                            width={144}
                            height={256}
                            className="mb-2"
                        />
                        <p className="text-[10px] text-[#FAFAFB]">Nature</p>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="flex flex-col items-center p-6">

                        <div className="label mb-6 w-15 bg-[#9FEAC1] self-start">Positive</div>
                        <div className="flex flex-row gap-6">
                            <div className="flex flex-col text-center">
                                <Image
                                    src="/assets/images/background-setup-image-2.png"
                                    alt="Insights Image"
                                    width={144}
                                    height={256}
                                    className="mb-2"
                                />
                                <p className="text-[10px] text-[#FAFAFB]">Abstract/Indoor</p>
                            </div>
                            <div className="flex flex-col text-center">
                                <Image
                                    src="/assets/images/background-setup-image-2.png"
                                    alt="Insights Image"
                                    width={144}
                                    height={256}
                                    className="mb-2"
                                />
                                <p className="text-[10px] text-[#FAFAFB] ">Nature</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center relative left-0 w-[24%] border-[1px] border-[#CECED6] rounded-[12px] px-6 py-26 bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)]">
                <div className="mb-6">
                    <Image
                        src="/assets/icons/image-icon.svg"
                        alt="Aspect ratio icon"
                        width={30}
                        height={30}
                    />
                </div>
                <ul className="list-disc pl-5 flex flex-col gap-4">
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                </ul>
            </div>
        </div>
    );
}

function BackgroundSound() {
    return (
        <div className="flex flex-row items-center w-full">
            <div className="flex flex-row items-end gap-4 w-[76%] p-8">
                <div className="flex flex-col items-center p-6 w-[33%]">
                    <div className="label mb-6 w-15 bg-[#F1ABA7] self-start">Negaive</div>
                    <div className="flex flex-col justify-end text-center min-h-[278px]">
                        <Image
                            src="/assets/images/background-sound-image-1.png"
                            alt="Insights Image"
                            width={254}
                            height={251}
                            className="mb-2"
                        />
                        <p className="text-[10px] text-[#FAFAFB]">Nature</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-6 w-[33%]">
                    <div className="label mb-6 w-15 bg-[#F1ABA7] self-start">Negaive</div>
                    <div className="flex flex-col justify-end text-center min-h-[278px]">
                        <Image
                            src="/assets/images/background-sound-image-2.png"
                            alt="Insights Image"
                            width={272}
                            height={127}
                            className="mb-2"
                        />
                        <p className="text-[10px] text-[#FAFAFB]">Nature</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-6 w-[33%]">
                    <div className="label mb-6 w-15 bg-[#F1ABA7] self-start">Negaive</div>
                    <div className="flex flex-col justify-end text-center min-h-[278px]">
                        <Image
                            src="/assets/images/background-sound-image-3.png"
                            alt="Insights Image"
                            width={144}
                            height={256}
                            className="mb-2"
                        />
                        <p className="text-[10px] text-[#FAFAFB]">Nature</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center relative left-0 w-[24%] border-[1px] border-[#CECED6] rounded-[12px] px-6 py-26 bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)]">
                <div className="mb-6">
                    <Image
                        src="/assets/icons/image-icon.svg"
                        alt="Aspect ratio icon"
                        width={30}
                        height={30}
                    />
                </div>
                <ul className="list-disc pl-5 flex flex-col gap-4">
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                </ul>
            </div>
        </div>
    );
}

function LogoPlacement() {
    return (
        <div className="flex flex-row items-center w-full">
            <div className="flex flex-row items-end gap-4 w-[76%] p-8">
                <div className="flex flex-col items-center p-6 w-[50%]">
                    <div className="label mb-6 w-15 bg-[#F1ABA7] self-start">Negaive</div>
                    <div className="flex flex-col text-center">
                        <Image
                            src="/assets/images/negative-impact-image.png"
                            alt="Insights Image"
                            width={271}
                            height={238}
                            className="mb-2"
                        />
                        <p className="text-[10px] text-[#FAFAFB]">Nature</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-6 w-[50%]">
                    <div className="label mb-6 w-15 bg-[#F1ABA7] self-start">Negaive</div>
                    <div className="flex flex-col text-center">
                        <Image
                            src="/assets/images/positive-impact-image.png"
                            alt="Insights Image"
                            width={271}
                            height={238}
                            className="mb-2"
                        />
                        <p className="text-[10px] text-[#FAFAFB]">Nature</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center relative left-0 w-[24%] border-[1px] border-[#CECED6] rounded-[12px] px-6 py-26 bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)]">
                <div className="mb-6">
                    <Image
                        src="/assets/icons/placement-icon.svg"
                        alt="Aspect ratio icon"
                        width={30}
                        height={30}
                    />
                </div>
                <ul className="list-disc pl-5 flex flex-col gap-4">
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                </ul>
            </div>
        </div>
    )
}

function Emotion() {
    return (
        <div className="flex flex-row items-center w-full">
            <div className="flex flex-row items-end gap-4 w-[76%] p-8 gap-4">
                <div className="w-[33%] py-6 px-4">
                    <div className="label mb-15 w-15 bg-[#F1ABA7]">Negaive</div>
                    <div className="text-sm text-[#EEEEF1] border border-[] bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)] rounded-[12px] px-6 py-12">Sad</div>
                </div>
                <div className="w-[33%] py-6 px-4">
                    <div className="label mb-15 w-15 bg-[#FFF3AA]">Neutral</div>
                    <div className="text-sm text-[#EEEEF1] border border-[] bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)] rounded-[12px] px-6 py-12">Angry <span>Confused</span></div>
                </div>
                <div className="w-[33%] py-6 px-4">
                    <div className="label mb-15 w-15 bg-[#9FEAC1]">Positive</div>
                    <div className="text-sm text-[#EEEEF1] border border-[] bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)] rounded-[12px] px-6 py-12">Happy</div>
                </div>
            </div>
            <div className="flex flex-col items-center relative left-0 w-[24%] border-[1px] border-[#CECED6] rounded-[12px] px-6 py-26 bg-gradient-to-b from-[rgba(82,82,82,0.24)] to-[rgba(0,30,41,0.4)]">
                <div className="mb-6">
                    <Image
                        src="/assets/icons/aspect-ratio-icon.svg"
                        alt="Aspect ratio icon"
                        width={30}
                        height={30}
                    />
                </div>
                <ul className="list-disc pl-5 flex flex-col gap-4">
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                    <li className="text-xs text-[#EEEEF1]">Portrait orientation of video ads typically yields greater engagement, with the <span className="text-[#FF9B3F]">9:16 aspect ratio demonstrating</span> the most significant impact in this regard.</li>
                </ul>
            </div>
        </div>
    )
}

export default function CpCreativeReportInsights() {
    // for tabs
    const [tabValue, setTabValue] = useState("Aspect Ratio");

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <section>
            <div className="mt-8 rounded-xl shadow-lg border border-gray-200"
                style={{
                    backgroundImage: "url('/assets/images/insights-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* tab section */}
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
                        borderColor: "#CECED6",
                    }}
                >
                    <Tab
                        value="Aspect Ratio"
                        label="Aspect Ratio"
                        sx={{
                            fontWeight: 500,
                            color: "#BEBEC9",
                            textTransform: "none",
                            padding: "24px",
                            "&.Mui-selected": { color: "#EEEEF1", fontWeight: 700 },
                        }}
                    />
                    <Tab
                        value="Text Content"
                        label="Text Content"
                        sx={{
                            fontWeight: 500,
                            color: "#BEBEC9",
                            textTransform: "none",
                            padding: "24px",
                            "&.Mui-selected": { color: "#EEEEF1", fontWeight: 700 },
                        }}
                    />
                    <Tab
                        value="Background Setup of Ads"
                        label="Background Setup of Ads"
                        sx={{
                            fontWeight: 500,
                            color: "#BEBEC9",
                            textTransform: "none",
                            padding: "24px",
                            "&.Mui-selected": { color: "#EEEEF1", fontWeight: 700 },
                        }}
                    />
                    <Tab
                        value="Background Sound"
                        label="Background Sound"
                        sx={{
                            fontWeight: 500,
                            color: "#BEBEC9",
                            textTransform: "none",
                            padding: "24px",
                            "&.Mui-selected": { color: "#EEEEF1", fontWeight: 700 },
                        }}
                    />
                    <Tab
                        value="Shots and Objects"
                        label="Shots and Objects"
                        sx={{
                            fontWeight: 500,
                            color: "#BEBEC9",
                            textTransform: "none",
                            padding: "24px",
                            "&.Mui-selected": { color: "#EEEEF1", fontWeight: 700 },
                        }}
                    />
                    <Tab
                        value="Logo Placement"
                        label="Logo Placement"
                        sx={{
                            fontWeight: 500,
                            color: "#BEBEC9",
                            textTransform: "none",
                            padding: "24px",
                            "&.Mui-selected": { color: "#EEEEF1", fontWeight: 700 },
                        }}
                    />
                    <Tab
                        value="Emotion"
                        label="Emotion"
                        sx={{
                            fontWeight: 500,
                            color: "#BEBEC9",
                            textTransform: "none",
                            padding: "24px",
                            "&.Mui-selected": { color: "#EEEEF1", fontWeight: 700 },
                        }}
                    />
                </Tabs>
                <div className="">
                    {tabValue === "Aspect Ratio" && (
                        <>
                            <AspectRatio />
                        </>
                    )}
                    {tabValue === "Text Content" && (
                        <>
                            <TextContext />
                        </>
                    )}
                    {tabValue === "Background Setup of Ads" && (
                        <>
                            <BackgroundSetup />
                        </>
                    )}
                    {tabValue === "Background Sound" && (
                        <>
                            <BackgroundSound />
                        </>
                    )}
                    {tabValue === "Shots and Objects" && (
                        <>
                            <ShortsAndObjects />
                        </>
                    )}
                    {tabValue === "Logo Placement" && (
                        <>
                            <LogoPlacement />
                        </>
                    )}
                    {tabValue === "Emotion" && (
                        <>
                            <Emotion />
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
