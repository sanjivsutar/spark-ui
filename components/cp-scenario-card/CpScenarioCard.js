"use-client";

import React from "react";
import Image from "next/image";
import EditDeletePopup from "../cp-edit-delete-popup/EditDeletePopup";

export default function CpScenarioCard() {
    return(
        <div className="rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex flex-row items-center gap-4 mb-2">
                <button className="btn typ-gradient btn-gradient">
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
            <div className="flex flex-row items-center justify-between mb-2">
                <div className="card-title">Scenario Name</div>
                <EditDeletePopup/>
            </div>
            <div className="flex flex-row gap-3 mb-2">
                <div>
                    <span className="font-medium text-xl">₹ </span>
                    <span className="font-bold text-[24px]">2.4 </span>
                    <span className="font-medium text-xl">Cr</span>
                    <p className="text-xs">Allocated Budget</p>
                </div>
                <div>
                    <span className="font-bold text-[24px]">2.4 </span>
                    <p className="text-xs">Forecasted ROI</p>
                </div>
                <div>
                    <span className="font-bold text-[24px]">20 </span>
                    <span className="font-medium text-xl">%</span>
                    <p className="text-xs">Current KPI Level</p>
                </div>
                <div>
                    <span className="font-bold text-[24px]">21.5 </span>
                    <span className="font-medium text-xl">%</span>
                    <p className="text-xs">Achieved KPI Level</p>
                </div>
             </div>
            <div className="flex flex-row items-center justify-between">
                <div className="font-bold text-[12px] leading-[16px]"><span className="font-normal text-[11px]">Created by: </span>Raj Kiran</div>
                <div className="font-bold text-[12px] leading-[16px]"><span className="font-normal text-[11px]">Last Updated: </span> July 2025 - Aug 2025</div>
            </div>
        </div>
    )
}