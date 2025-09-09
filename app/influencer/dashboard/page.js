"use client"
import CpInfluencersPerformanceCard from '@/components/cp-influencers-perfomance/CpInfluencersPerformanceCard'
import MainPanel from '@/components/cp-main-panel/cp-main-panel'
import React from 'react'
import { useState } from 'react'
import CpTopPerformingCampaigns from '@/components/cp-top-performing-compaigns/CpTopPerformingCampaigns'
import Search from '@/components/cp-search/CpSearch'
import ExportFile from '@/components/cp-export/CpExport'
import ReactECharts from "echarts-for-react";

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
    <EngagementLineChart />
    </MainPanel>
  )
}

export default InfluencerDashboard