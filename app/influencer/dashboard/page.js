"use client"
import CpInfluencersPerformanceCard from '@/components/cp-influencers-perfomance/CpInfluencersPerformanceCard'
import MainPanel from '@/components/cp-main-panel/cp-main-panel'
import React, { useEffect } from 'react'
import { useState } from 'react'
import CpTopPerformingCampaigns from '@/components/cp-top-performing-compaigns/CpTopPerformingCampaigns'
import Search from '@/components/cp-search/CpSearch'
import ExportFile from '@/components/cp-export/CpExport'
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import Image from 'next/image';
import { Menu, MenuItem } from "@mui/material";

const EngagementLineChart = () => {

  const option = {
    title: {
      text: "Engagement Trends (%)",
      textStyle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0D0D11",
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      left: 0,
      bottom: 0,
      orient: "horizontal",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "#6B7280",
      },
      data: [
        { name: "Instagram", icon: "rect" },
        { name: "TikTok", icon: "rect" },
        { name: "YouTube", icon: "rect" },
        { name: "Twitter", icon: "rect" },
        { name: "LinkedIn", icon: "rect" },
      ],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "12%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "06 July",
        "07 July",
        "08 July",
        "09 July",
        "10 July",
        "11 July",
        "12 July",
        "13 July",
        "14 July",
        "15 July",
      ],
      axisLine: { lineStyle: { color: "#E5E7EB" } }, 
      axisLabel: { color: "#6B7280", align: "center",  margin: 12, show: true,},  
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 9,
      interval: 1,
      axisLine: { show: false },
      splitLine: { lineStyle: { color: "#E5E7EB" } },
      axisLabel: { color: "#6B7280" },
    },
    series: [
      {
        name: "Instagram",
        type: "line",
        smooth: true,
        data: [3.1, 7.1, 5.8, 6.7, 6.1, 8, 7, 7.5, 7.2, 7.7],
        lineStyle: { color: "#00A1A5" }, 
        itemStyle: { color: "#00A1A5" },
          areaStyle: {
          color: "rgba(0,161,165,0.08)", 
        },
      },
      {
        name: "TikTok",
        type: "line",
        smooth: true,
        data: [2.4, 3.4, 3.1, 4, 4.4, 4.1, 4.8, 5.5, 5.9, 6],
        lineStyle: { color: "#82249A" }, 
        itemStyle: { color: "#82249A" },
         areaStyle: {
          color: "rgba(130,36,154,0.08)",
        },
      },
      {
        name: "YouTube",
        type: "line",
        smooth: true,
        data: [1.9, 1.7, 2.1, 3, 3.5, 3.3, 3.8, 4.6, 4.2, 5 ],
        lineStyle: { color: "#48149C" }, 
        itemStyle: { color: "#48149C" },
        areaStyle: {
          color: "rgba(72,20,156,0.08)",
        },
      },
      {
        name: "Twitter",
        type: "line",
        smooth: true,
        data: [1, 0.8, 0.6, 2.1, 2.6, 2.1, 2.6, 2.4, 3.5, 3.8],
        lineStyle: { color: "#CCBC5B" }, 
        itemStyle: { color: "#CCBC5B" },
        areaStyle: {
          color: "rgba(204,188,91,0.08)",
        },
      },
      {
        name: "LinkedIn",
        type: "line",
        smooth: true,
        data: [0.2, 0.4, 0.6, 1, 2.1, 1.2, 2, 1.9, 1.1, 1.9],
        lineStyle: { color: "#0556B2" }, 
        itemStyle: { color: "#0556B2" },
        areaStyle: {
          color: "rgba(5,86,178,0.08)",
        },
      },
    ],
  };

  return (
    <div className="w-full p-5 border border-gray-200 rounded-lg bg-white">
      <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />
    </div>
  );
};

const RevenueChart = () => {
const [activeCard, setActiveCard] = useState(null);
const [revenueAnalysis, setRevenueAnalysis] = useState(null);

  const yData = ["Instagram", "YouTube", "Tiktok", "Twitter", "LinkedIn"];

  useEffect(() => {
    const chartDom = document.getElementById("chart");
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        backgroundColor: "transparent", // remove default white bg
  borderWidth: 0,                  // remove border
  extraCssText: "box-shadow:none; padding:0;", // remove shadow & padding
        formatter: (params) => {
          let total = params.reduce((sum, p) => sum + p.value, 0);

          return `
            <div style="
              background: #0D0D11;
              padding: 16px;
              border-radius: 12px;
              border: 1px solid rgba(255,255,255,0.1);
              min-width: 180px;
              font-family: 'Inter', sans-serif;
            ">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="
                  display:inline-block;
                  width:16px;
                  height:16px;
                  border-radius:50%;
                  background: linear-gradient(90deg, #0556B2 0%, #3889E5 100%);
                "></span>
                <span style="color:#EEEEF1;font-size:12px;font-weight:500;">
                  ${params[0].name} Influencers
                </span>
              </div>
              <p style="
                margin:6px 0 10px;
                color:#BEBEC9;
                font-size:10px;
                font-weight:500;
              ">
                1K - 10K Followers
              </p>
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <p style="margin:0;color:#fff;font-size:16px;font-weight:600;">
                  ₹ 56.5 Lakh 
                </p>
                <span style="
                  background:#E6F0FB;
                  color:#111;
                  font-size:12px;
                  font-weight:600;
                  padding:2px 8px;
                  border-radius:999px;
                ">
                  39%
                </span>
              </div>
            </div>
          `;
        },
      },
      legend: {
        top: 10,
        right: 10,
        textStyle: { color: "#fff" },
        data: ["Nano", "Micro", "Macro", "Mega"],
      },
      graphic: [
        {
          type: "text",
          right: 280,
          top: 16,
          style: {
            text: "Total revenue: ₹6.50cr",
            fill: "#fff",
            font: "bold 14px Arial",
          },
        },
      ],
      grid: {
        left: "3%",
        right: "3%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        axisLine: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
      },
      yAxis: {
        type: "category",
        data: ["LinkedIn", "Twitter", "Tiktok", "YouTube", "Instagram"],
        axisLine: { show: false },
        axisLabel: { show: false },
      },
      legend: {
        show: true,         
        top: "10px",        
        right: "10px",      
        orient: "horizontal",
        itemWidth: 20,       
        itemHeight: 14,      
        itemGap: 15,    
        textStyle: {         
          color: "#fff",
          fontSize: 12,
          fontWeight: "regular",
        },
        data: [
          {
            name: "Nano",
            icon: "circle",
            textStyle: { color: "#fff" },
          },
          {
            name: "Micro",
            icon: "circle",
            textStyle: { color: "#fff" },
          },
          {
            name: "Macro",
            icon: "circle",
            textStyle: { color: "#fff" },
          },
          {
            name: "Mega",
            icon: "circle",
            textStyle: { color: "#fff" },
          },
        ],
      },
      series: [
        {
          name: "Nano",
          type: "bar",
          stack: "total",
          barWidth: 18,
          cursor: "url('/assets/images/handCursorRevenueChart.png') 20 20, pointer",
          label: {
            show: true,
            position: 'top',
            formatter: (params) => params.name,
            distance: 5,
            color: '#fff',
            fontSize: 16,
            fontWeight: 'medium'
          },
          itemStyle: {
            borderRadius: [10, 0, 0, 10],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#044085" },
              { offset: 1, color: "#3889E5" },
            ]),
          },
          data: [120, 200, 200, 150, 200],
        },
        {
          name: "Micro",
          type: "bar",
          stack: "total",
          barWidth: 18,
          cursor: "url('/assets/images/handCursorRevenueChart.png') 20 20, pointer",
          itemStyle: { 
            color : new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#82249A" },
              { offset: 1, color: "#C781D9" },
            ]),
          }, 
          data: [60, 100, 150, 300, 150],
        },
        {
          name: "Macro",
          type: "bar",
          stack: "total",
          barWidth: 18,
          cursor: "url('/assets/images/handCursorRevenueChart.png') 20 20, pointer",
          itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#00A1A5" },
                { offset: 1, color: "#33D4D8" },
              ])
          },
          data: [90, 80, 100, 80, 100],
        },
        {
          name: "Mega",
          type: "bar",
          stack: "total",
          barWidth: 18,
          cursor: "url('/assets/images/handCursorRevenueChart.png') 20 20, pointer",
          itemStyle: {
            borderRadius: [0, 10, 10, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#48149C" },
              { offset: 1, color: "#7B47CF" },
            ])
          },
          data: [200, 250, 100, 300, 400],
        },
      ],
    };

    myChart.setOption(option);

    myChart.on("mouseover", function (params) {
      setActiveCard(params.name); // name of the hovered bar
    });

    myChart.on("mouseout", function () {
      setActiveCard(null);
    });

    const resize = () => myChart.resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      myChart.dispose();
    };
  }, []);

  return (
    <div className='bg-[url(/assets/images/revanuchartBgImage.png)] bg-cover bg-center px-6 pt-8 pb-7 rounded-xl mt-6 mb-[56px]'>
     
     <div className='flex gap-2 pb-7'>
        <h2 className='sec-title text-white'>Revenue Contributions</h2>
        <div>
            <button
                className="font-medium text-xs text-sprk-dark-2 rounded-lg bg-white flex items-center gap-2 border border-sprk-light-2 px-3 py-[6px]"
                onClick={(e) => setRevenueAnalysis(e.currentTarget)}
              >
                Platform
                <Image
                  src="/assets/icons/Chevron-down.svg"
                  alt="Down arrow"
                  width={12}
                  height={12}
                />
              </button>

              <Menu
                anchorEl={revenueAnalysis}
                open={Boolean(revenueAnalysis)}
                onClose={() => setRevenueAnalysis(null)}
              >
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    textAlign: "left",
                    // padding: "8px 16px",
                    color: "#0D0D11",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                  onClick={() => setRevenueAnalysis(null)}
                >
                  Platform
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    // padding: "8px 16px",
                    color: "#0D0D11", 
                    "&:hover": {
                      backgroundColor: "#F3F4F6", 
                    },
                  }}
                  onClick={() => setRevenueAnalysis(null)}
                >
                  Content Type
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    // padding: "8px 16px",
                    color: "#0D0D11", 
                    "&:hover": {
                      backgroundColor: "#F3F4F6", 
                    },
                  }}
                  onClick={() => setRevenueAnalysis(null)}
                >
                  Content Format
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    // padding: "8px 16px",
                    color: "#0D0D11", 
                    "&:hover": {
                      backgroundColor: "#F3F4F6", 
                    },
                  }}
                  onClick={() => setRevenueAnalysis(null)}
                >
                  Posting Time
                </MenuItem>
              </Menu>
            </div>
     </div>
      <div className="flex flex-wrap gap-4 justify-start pb-5">
        {yData.map((name) => (
          <div
            key={name}
            className={`flex-1 min-w-0 rounded-xl shadow-lg p-6 relative overflow-hidden bg-[linear-gradient(126.16deg,rgba(82,82,82,0.24)_-3.39%,rgba(0,30,41,0.4)_58.7%)]  ${
              activeCard === name ? "scale-105 border border-[#EC3228]" : "border border-[#525252]"
            }`}
          >
            <div className='flex gap-2'>
              <h3 className='sec-title text-white'>₹ 6.5 Cr </h3>
              <p className='bg-[#E6F0FB] rounded-2xl text-xs font-medium text-sprk-dark-2 py-[2px] px-[6px] flex items-center'>13.9%</p>
            </div>
            <h3 className="font-medium text-xs text-[#BEBEC9]">{name}</h3>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div id='chart' className="w-full border border-gray-700 rounded-lg bg-[#111827] w-full h-[400px]" />
    </div>
  );
}



const InfluencerDashboard = () => {
  return (
    <MainPanel>
        <CpInfluencersPerformanceCard />
    <section>
      <div className='flex flex-row justify-between'>
        <div>
          <h1 className="head-title">Influencers</h1>
          <p className='sec-desc'>Manage and analyse your influencer partnerships</p>
        </div>
        <div className='flex flex-row align-center justify-between gap-4'>
          <Search/>
          <ExportFile/>
        </div>
      </div>
    </section>
    <CpTopPerformingCampaigns/>
    <RevenueChart />
    <EngagementLineChart />
    </MainPanel>
  )
}

export default InfluencerDashboard