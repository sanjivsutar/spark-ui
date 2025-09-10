"use-client";

import React from "react";
import Image from "next/image";
import EditDeletePopup from "../cp-edit-delete-popup/EditDeletePopup";

export default function CpScenarioCard() {
    return (
        <section className="flex flex-row gap-4">
            <div className="rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex flex-row items-center gap-4 mb-4">
                    <button className="btn-gradient typ-small">
                        <Image
                            src="/assets/icons/Shape.svg"
                            alt="Home Icon"
                            width={14}
                            height={14}
                            className="invert w-[14px] h-[14px]"
                        />
                        Top up Ai
                    </button>
                    <div className="px-2 py-1 bg-[#F7F7F8] rounded-2xl text-[#0D0D11]">KPI target</div>
                </div>
                <div className="flex flex-row items-center justify-between mb-6">
                    <div className="card-title">Scenario Name</div>
                    <EditDeletePopup />
                </div>
                <div className="flex flex-row items-center gap-5 mb-[30px]">
                    <div>
                        <span className="font-medium text-[16px]">₹ </span>
                        <span className="font-bold text-[20px]">2.4 </span>
                        <span className="font-medium text-[16px]">Cr</span>
                        <p className="text-[8px] font-semibold text-[#60607B]">Allocated Budget</p>
                    </div>
                    <div>
                        <span className="font-bold text-[20px]">2.4</span>
                        <p className="text-[8px] font-semibold text-[#60607B]">Forecasted ROI</p>
                    </div>
                    <div className="w-[2px] h-9 bg-gradient-to-b from-[#EC3228] via-[#F66B34] to-[#FF9B3F]"></div>
                    <div>
                        <span className="font-bold text-[20px]">20 </span>
                        <span className="font-medium text-[16px]">%</span>
                        <p className="text-[8px] font-semibold text-[#60607B]">Current KPI Level</p>
                    </div>
                    <div>
                        <span className="font-bold text-[20px]">21.5 </span>
                        <span className="font-medium text-[16px]">%</span>
                        <p className="text-[8px] font-semibold text-[#60607B]">Achieved KPI Level</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="font-bold text-[12px] leading-[16px] text-[#373748]"><span className="font-normal text-[11px]">Created by: </span>Raj Kiran</div>
                    <div className="font-bold text-[12px] leading-[16px] text-[#373748]"><span className="font-normal text-[11px]">Last Updated: </span> July 2025 - Aug 2025</div>
                </div>
            </div>
            <div className="rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex flex-row items-center gap-4 mb-4">
                    <button className="btn-gradient typ-small">
                        <Image
                            src="/assets/icons/Shape.svg"
                            alt="Home Icon"
                            width={14}
                            height={14}
                            className="invert w-[14px] h-[14px]"
                        />
                        Top up Ai
                    </button>
                    <div className="px-2 py-1 bg-[#F7F7F8] rounded-2xl text-[#0D0D11]">KPI target</div>
                </div>
                <div className="flex flex-row items-center justify-between mb-6">
                    <div className="card-title">Scenario Name</div>
                    <EditDeletePopup />
                </div>
                <div className="flex flex-row items-center gap-5 mb-[30px]">
                    <div>
                        <span className="font-medium text-[16px]">₹ </span>
                        <span className="font-bold text-[20px]">2.4 </span>
                        <span className="font-medium text-[16px]">Cr</span>
                        <p className="text-[8px] font-semibold text-[#60607B]">Allocated Budget</p>
                    </div>
                    <div>
                        <span className="font-bold text-[20px]">2.4</span>
                        <p className="text-[8px] font-semibold text-[#60607B]">Forecasted ROI</p>
                    </div>
                    <div className="w-[2px] h-9 bg-gradient-to-b from-[#EC3228] via-[#F66B34] to-[#FF9B3F]"></div>
                    <div>
                        <span className="font-bold text-[20px]">20 </span>
                        <span className="font-medium text-[16px]">%</span>
                        <p className="text-[8px] font-semibold text-[#60607B]">Current KPI Level</p>
                    </div>
                    <div>
                        <span className="font-bold text-[20px]">21.5 </span>
                        <span className="font-medium text-[16px]">%</span>
                        <p className="text-[8px] font-semibold text-[#60607B]">Achieved KPI Level</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="font-bold text-[12px] leading-[16px] text-[#373748]"><span className="font-normal text-[11px]">Created by: </span>Raj Kiran</div>
                    <div className="font-bold text-[12px] leading-[16px] text-[#373748]"><span className="font-normal text-[11px]">Last Updated: </span> July 2025 - Aug 2025</div>
                </div>
            </div>
            <div className="rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex flex-row items-center gap-4 mb-4">
                    <button className="btn-gradient typ-small">
                        <Image
                            src="/assets/icons/Shape.svg"
                            alt="Home Icon"
                            width={14}
                            height={14}
                            className="invert w-[14px] h-[14px]"
                        />
                        Top up Ai
                    </button>
                    <div className="px-2 py-1 bg-[#F7F7F8] rounded-2xl text-[#0D0D11]">KPI target</div>
                </div>
                <div className="flex flex-row items-center justify-between mb-6">
                    <div className="card-title">Scenario Name</div>
                    <EditDeletePopup />
                </div>
                <div className="flex flex-row items-center gap-5 mb-[30px]">
                    <div>
                        <span className="font-medium text-[16px]">₹ </span>
                        <span className="font-bold text-[20px]">2.4 </span>
                        <span className="font-medium text-[16px]">Cr</span>
                        <p className="text-[8px] font-semibold text-[#60607B]">Allocated Budget</p>
                    </div>
                    <div>
                        <span className="font-bold text-[20px]">2.4</span>
                        <p className="text-[8px] font-semibold text-[#60607B]">Forecasted ROI</p>
                    </div>
                    <div className="w-[2px] h-9 bg-gradient-to-b from-[#EC3228] via-[#F66B34] to-[#FF9B3F]"></div>
                    <div>
                        <span className="font-bold text-[20px]">20 </span>
                        <span className="font-medium text-[16px]">%</span>
                        <p className="text-[8px] font-semibold text-[#60607B]">Current KPI Level</p>
                    </div>
                    <div>
                        <span className="font-bold text-[20px]">21.5 </span>
                        <span className="font-medium text-[16px]">%</span>
                        <p className="text-[8px] font-semibold text-[#60607B]">Achieved KPI Level</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="font-bold text-[12px] leading-[16px] text-[#373748]"><span className="font-normal text-[11px]">Created by: </span>Raj Kiran</div>
                    <div className="font-bold text-[12px] leading-[16px] text-[#373748]"><span className="font-normal text-[11px]">Last Updated: </span> July 2025 - Aug 2025</div>
                </div>
            </div>
        </section>
    )
}