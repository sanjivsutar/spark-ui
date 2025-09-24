"use client";

import Image from "next/image";
import AudienceAnalysisGraph from "../cp-audience-analysis-graph/cp-audience-analysis-graph";
import PieDonutChart from "../cp-audience-analysis-chart/cp-audience-analysis-chart";

export default function CpAudienceAnalysis() {
    return (
        <section className="bg-[url('/assets/images/audience-analysis-bgImage.png')] bg-cover bg-center h-screen flex flex-col text-[#FAFAFB] px-6 py-8 rounded-xl">
            <div className="sec-title mb-8">Audience Analysis</div>
            <div className="grid grid-cols-4 gap-5">
                <div className="border border-white/10 shadow-md rounded-lg bg-[linear-gradient(to_bottom_right,rgba(82,82,82,0.24),rgba(0,30,41,0.4))]">
                    <div className="flex flex-row items-center justify-between px-6 py-4">
                        <div className="flex flex-col items-start text-center">
                            <div className="text-2xl font-bold ">60 <span className="text-[22px] font-medium">%</span></div>
                            <div className="text-[12px] text-[#BEBEC9]">Male</div>
                        </div>
                        <div className="border border-white/10 shadow-md rounded-full">
                            <Image
                                src="/assets/icons/boy-dynamic-color.svg"
                                alt="Instagram image"
                                width={40}
                                height={40}
                                className="p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="border border-white/10 shadow-md rounded-lg bg-[linear-gradient(to_bottom_right,rgba(82,82,82,0.24),rgba(0,30,41,0.4))]">
                    <div className="flex flex-row items-center justify-between px-6 py-4">
                        <div className="flex flex-col items-start text-center">
                            <div className="text-2xl font-bold ">40 <span className="text-[22px] font-medium">%</span></div>
                            <div className="text-[12px] text-[#BEBEC9]">Female</div>
                        </div>
                        <div className="border border-white/10 shadow-md rounded-full">
                            <Image
                                src="/assets/icons/girl-dynamic-color.svg"
                                alt="Instagram image"
                                width={40}
                                height={40}
                                className="p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="border border-white/10 shadow-md rounded-lg bg-[linear-gradient(to_bottom_right,rgba(82,82,82,0.24),rgba(0,30,41,0.4))]">
                    <div className="flex flex-row items-center justify-between px-6 py-4">
                        <div className="flex flex-col items-start">
                            <div className="text-2xl font-bold ">18 - 24 <span className="text-[22px] font-medium">Yr</span></div>
                            <div className="text-[12px] text-[#BEBEC9]">Most Engaged Age Group</div>
                        </div>
                        <div className="border border-white/10 shadow-md rounded-full">
                            <Image
                                src="/assets/icons/bar-graph-analysis.svg"
                                alt="Instagram image"
                                width={30}
                                height={30}
                                className="p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="border border-white/10 shadow-md rounded-lg bg-[linear-gradient(to_bottom_right,rgba(82,82,82,0.24),rgba(0,30,41,0.4))]">
                    <div className="flex flex-row items-center justify-between px-6 py-4">
                        <div className="flex flex-col items-start text-center">
                            <div className="text-2xl font-bold ">70 <span className="text-[22px] font-medium">%</span></div>
                            <div className="text-[12px] text-[#BEBEC9]">Most Engaged Country</div>
                        </div>
                        <div className="border border-white/10 shadow-md rounded-full">
                            <Image
                                src="/assets/icons/india.svg"
                                alt="Instagram image"
                                width={40}
                                height={40}
                                className="p-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center mt-8 gap-5">
                <AudienceAnalysisGraph 
                labels={['< 18', '18 - 24', '25 - 34', '35 - 44', '> 44']}
                data={[60.2, 87.9, 50.7, 30.3, 20]}
                title="Age"
                maxValue={100}
                interval={20}
                suffix="%" 
                height={335}
                />
                <div className="w-1/2 shadow-md border border-white/10 rounded-lg p-4 bg-[linear-gradient(to_bottom_right,rgba(82,82,82,0.24),rgba(0,30,41,0.4))]">
                    <PieDonutChart />
                </div>
            </div>
        </section>
    )
}