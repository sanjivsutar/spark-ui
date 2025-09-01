"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import CheckboxLabels from '../checkbox/Checkbox';
import SelectPrimary from '../cp-select-primary/CpSelectPrimary';


export default function KpiTarget(){
   const [kpiValue, setkpiValue] = React.useState("");

     return(
        <section>
        <div className="flex items-center justify-between mb-6">
            <div className="sec-title">KPI Summary</div>
            <div className="flex items-center gap-4">
            <CheckboxLabels
            label="Include Competition Activity"/>
            <SelectPrimary
            label="Tom"
            value={kpiValue}
            onChange={(e) => setkpiValue(e.target.value)}
            items={[
                { label: "Tom", value: 1},
                { label: "Tom", value: 2 },
                { label: "Tom", value: 3 },
            ]}
            />
            </div>
        </div>
        <div className="flex gap-4 mb-6">
            <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
              <div className="relative z-10 flex justify-between pb-4">
                <div>
                  <p>
                    {/* <span className="font-medium text-2xl">₹ </span> */}
                    <span className="font-bold text-[38px]">56,603</span>
                    {/* <span className="font-medium text-2xl">Cr</span> */}
                  </p>
                  <h4 className="text-xs">Current KPI Level</h4>
                </div>
                <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                  <Image src="/assets/icons/market-chart.svg" alt="Icon" width={14} height={14} className="invert brightness-0"/>
                </div>
              </div>
            </div>
    
            <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
              <div className="relative z-10 flex justify-between pb-4">
                <div>
                  <p>
                    {/* <span className="font-medium text-2xl">₹ </span> */}
                    <span className="font-bold text-[38px]">74,061 </span>
                    {/* <span className="font-medium text-2xl">Lakh</span> */}
                  </p>
                  <h4 className="text-xs">Achieved KPI Level</h4>
                </div>
                <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                  <Image src="/assets/icons/market-graph.svg" alt="Icon" width={14} height={14} className="invert brightness-0" />
                </div>
              </div>
            </div>
    
            <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
              <div className="relative z-10 flex justify-between pb-4">
                <div>
                  <p>
                    <span className="font-medium text-2xl">¥ </span>
                    <span className="font-bold text-[38px]"> 241.8 </span>
                    <span className="font-medium text-2xl">Mn</span>
                  </p>
                  <h4 className="text-xs">Utilised Budget</h4>
                </div>
                 <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                  <Image src="/assets/icons/calculator.svg" alt="Icon" width={14} height={14} className="invert brightness-0"/>
                </div>
              </div>
            </div>
        </div>
        <div className="flex gap-4">
            <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
              <div className="relative z-10 flex justify-between pb-4">
                <div>
                  <p>
                    {/* <span className="font-medium text-2xl">₹ </span> */}
                    <span className="font-bold text-[38px]">19.2</span>
                    <span className="font-medium text-2xl"> %</span>
                  </p>
                  <h4 className="text-xs">Current Market Share</h4>
                </div>
                <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                  <Image src="/assets/icons/current-share.svg" alt="Icon" width={14} height={14} className="invert brightness-0"/>
                </div>
              </div>
            </div>
    
            <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
              <div className="relative z-10 flex justify-between pb-4">
                <div>
                  <p>
                    {/* <span className="font-medium text-2xl">₹ </span> */}
                    <span className="font-bold text-[38px]">21.3</span>
                    <span className="font-medium text-2xl">%</span>
                  </p>
                  <h4 className="text-xs">Achieved Market Share</h4>
                </div>
                <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                  <Image src="/assets/icons/market-graph.svg" alt="Icon" width={14} height={14} className="invert brightness-0" />
                </div>
              </div>
            </div>
    
            <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
              <div className="relative z-10 flex justify-between pb-4">
                <div>
                  <p>
                    {/* <span className="font-medium text-2xl">¥ </span> */}
                    <span className="font-bold text-[38px]"> 30.8</span>
                    <span className="font-medium text-2xl">%</span>
                  </p>
                  <h4 className="text-xs">Online KPI Level </h4>
                </div>
                 <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                  <Image src="/assets/icons/desktop.svg" alt="Icon" width={14} height={14} />
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
              <div className="relative z-10 flex justify-between pb-4">
                <div>
                  <p>
                    {/* <span className="font-medium text-2xl">¥ </span> */}
                    <span className="font-bold text-[38px]"> 69.2  </span>
                    <span className="font-medium text-2xl">%</span>
                  </p>
                  <h4 className="text-xs">Offline KPI Level </h4>
                </div>
                 <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                  <Image src="/assets/icons/book.svg" alt="Icon" width={14} height={14} />
                </div>
              </div>
            </div>
        </div>
        </section>
     )
}