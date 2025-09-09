"use client";
import React, { useRef, useState } from "react";
import ReactECharts from "echarts-for-react";
import { Tab, Tabs, Box } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Menu, MenuItem } from "@mui/material";
import { Inter } from "next/font/google";
import { handleArrowState } from "../../utils/Swiper";
import CpTimelineDropdown from "../dropdown/CpTimelineDropdown";
import { styled } from "@mui/material/styles"; // Added missing import
import { DataGrid } from "@mui/x-data-grid";
import SingleSelectDropdown from "../dropdown/SingleSelectDropdown";

const KPIValueData = [
  { name: "HP", data: [128.45] },
  { name: "Dell", data: [110.29] },
  { name: "Acer", data: [85.09] },
  { name: "Lenovo", data: [7.89] },
  { name: "Asus", data: [4.13] },
  { name: "Apple", data: [3.52] },
  { name: "Microsoft", data: [-2.94] },
];

const DriverNDData = [
  { name: "HP", data: [128.45] },
  { name: "Dell", data: [110.29] },
  { name: "Acer", data: [85.09] },
  { name: "Lenovo", data: [7.89] },
  { name: "Asus", data: [4.13] },
  { name: "Apple", data: [3.52] },
  { name: "Microsoft", data: [-2.94] },
];

const BarNegativeChart = ({ title, data, colors }) => {
  // Fallback colors if none provided
  const defaultColors = [
    "#2ecc71",
    "#27ae60",
    "#3498db",
    "#2980b9",
    "#1abc9c",
    "#16a085",
    "#e74c3c",
  ];

  // Ensure data is valid; provide fallback if undefined or empty
  const safeData =
    Array.isArray(data) && data.length > 0
      ? data
      : [{ name: "Category A", data: [0] }];

  const option = {
    title: {
      text: title,
      left: "center",
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: safeData.map((item) => item.name || "Unknown"),
      bottom: 0,
    },
    xAxis: [
      {
        type: "value",
        min: -25,
        max: 150,
        axisTick: { show: false },
        axisLabel: {
          formatter: "{value}%",
        },
      },
    ],
    yAxis: [
      {
        type: "category",
        data: safeData.map((item) => item.name),
        axisTick: { show: false },
      },
    ],
    series: [
      {
        name: "KPI - Value",
        type: "bar",
        data: safeData.map((item) => ({
          value: item.data[0],
          itemStyle: {
            color:
              colors && colors[safeData.indexOf(item)]
                ? colors[safeData.indexOf(item)]
                : defaultColors[safeData.indexOf(item) % defaultColors.length],
          },
        })),
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
          fontSize: 12,
        },
        itemStyle: {
          borderRadius: [0],
        },
      },
    ],
  };

  return (
    <div className="w-1/2 p-5 border border-gray-200 rounded-lg bg-white">
      <ReactECharts
        option={option}
        style={{ height: "356px", width: "100%" }}
      />
    </div>
  );
};

// Define columns for StyledDataGrid
const columns = [
  { field: "brands", headerName: "Brands", width: 150 },
  { field: "value", headerName: "Value", width: 120 },
  { field: "volume", headerName: "Volume", width: 120 },
  { field: "valueShare", headerName: "Value Share", width: 140 },
  { field: "volumeShare", headerName: "Volume Share", width: 160 },
  { field: "nd", headerName: "ND", width: 120 },
  { field: "wd", headerName: "WD", width: 120 },
];

// Define rows for StyledDataGrid
const rows = [
  {
    id: 1,
    brands: "HP",
    value: 128.45,
    volume: 58.72,
    valueShare: 47.35,
    volumeShare: 30.21,
    nd: "120.33%",
    wd: "125.14%",
  },
  {
    id: 2,
    brands: "Dell",
    value: 128.45,
    volume: 58.72,
    valueShare: 47.35,
    volumeShare: 30.21,
    nd: "120.33%",
    wd: "125.14%",
  },
  {
    id: 3,
    brands: "Acer",
    value: 128.45,
    volume: 58.72,
    valueShare: 47.35,
    volumeShare: 30.21,
    nd: "120.33%",
    wd: "125.14%",
  },
  {
    id: 4,
    brands: "Lenovo",
    value: 128.45,
    volume: 58.72,
    valueShare: 47.35,
    volumeShare: 30.21,
    nd: "120.33%",
    wd: "125.14%",
  },
  {
    id: 5,
    brands: "Asus",
    value: 128.45,
    volume: 58.72,
    valueShare: 47.35,
    volumeShare: 30.21,
    nd: "120.33%",
    wd: "125.14%",
  },
  {
    id: 6,
    brands: "Apple",
    value: 128.45,
    volume: 58.72,
    valueShare: 47.35,
    volumeShare: 30.21,
    nd: "120.33%",
    wd: "125.14%",
  },
  {
    id: 7,
    brands: "HP",
    value: 128.45,
    volume: 58.72,
    valueShare: 47.35,
    volumeShare: 30.21,
    nd: "120.33%",
    wd: "125.14%",
  },
  {
    id: 8,
    brands: "Dell",
    value: 128.45,
    volume: 58.72,
    valueShare: 47.35,
    volumeShare: 30.21,
    nd: "120.33%",
    wd: "125.14%",
  },
  {
    id: 9,
    brands: "Acer",
    value: 128.45,
    volume: 58.72,
    valueShare: 47.35,
    volumeShare: 30.21,
    nd: "120.33%",
    wd: "125.14%",
  },
  {
    id: 10,
    brands: "Lenovo",
    value: 128.45,
    volume: 58.72,
    valueShare: 47.35,
    volumeShare: 30.21,
    nd: "120.33%",
    wd: "125.14%",
  },
  {
    id: 11,
    brands: "Asus",
    value: 128.45,
    volume: 58.72,
    valueShare: 47.35,
    volumeShare: 30.21,
    nd: "120.33%",
    wd: "125.14%",
  },
  {
    id: 12,
    brands: "Apple",
    value: 128.45,
    volume: 58.72,
    valueShare: 47.35,
    volumeShare: 30.21,
    nd: "120.33%",
    wd: "125.14%",
  },
];

// Define column grouping model for StyledDataGrid
const columnGroupingModel = [
  {
    groupId: "data",
    headerName: "Data",
    children: [{ field: "brands" }],
  },
  {
    groupId: "kpi",
    headerName: "KPI",
    children: [
      { field: "value" },
      { field: "volume" },
      { field: "valueShare" },
      { field: "volumeShare" },
    ],
  },
  {
    groupId: "drivers",
    headerName: "Drivers",
    children: [{ field: "nd" }, { field: "wd" }],
  },
];

// Styled DataGrid component
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: "none",
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: "#fff",
  width: "100%",
  // column header background
  "& .MuiDataGrid-columnHeaders": {
   background: 'linear-gradient( 180deg, #022B59 31.25%, #044085 100%)',
    // Blue background for column headers
    color: "#fff",
    fontWeight: 600,
    borderBottom: "1px solid #004080",
  },

  // group headers (data, kpi, Drivers)
  "& .MuiDataGrid-columnHeader--group": {
    color: "#fff",
    fontWeight: 700,
    textAlign: "center",
    borderRight: "1px solid #004080",
  },

  // individual column headers (Brands, value, volume, etc.)
  "& .MuiDataGrid-columnHeader": {
    background: "#fff", // Blue background for individual column headers
    color: "#000",
    borderRight: "1px solid #ddd",
  },

  // cell borders
  "& .MuiDataGrid-cell": {
    borderRight: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
  },

  // alternating row background
  "& .MuiDataGrid-row:nth-of-type(odd)": {
    backgroundColor: "#f9f9f9",
  },

  // row hover effect
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#f1f8ff",
  },

  // footer styling
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "#000",
    color: "#fff",
    borderTop: "none",
    fontWeight: 600,
  },

  // pagination controls
  "& .MuiTablePagination-root": {
    color: "#fff",
  },
  "& .MuiTablePagination-actions svg": {
    fill: "#fff",
  },
}));

const FunnelChart = ({ title, data }) => {
  const option = {
    title: {
      text: title,
      left: "left",
      top: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: (params) => {
        return `${params.name}<br/>${params.value}<br/>+${params.data.growth}% ↑`;
      },
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: "Funnel",
        type: "funnel",
        orient: "horizontal",
        funnelAlign: "center",
        left: "5%",
        top: "15%",
        bottom: "15%",
        width: "90%",
        minSize: "25%",
        maxSize: "100%",
        sort: "none",
        gap: 2,
        label: {
          show: true,
          position: "inside",
          color: "#fff",
          fontSize: 14,
          fontWeight: "bold",
          formatter: (params) => {
            return `${params.value}\n+${params.data.growth}% ↑`;
          },
          verticalAlign: "middle",
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          borderRadius: 10,
          opacity: 0.9,
          emphasis: {
            opacity: 1,
          },
        },
        emphasis: {
          label: {
            fontSize: 16,
          },
        },
        data: data.map((item) => ({
          value: item.value,
          name: item.name,
          growth: item.growth,
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: item.colorStart },
                { offset: 1, color: item.colorEnd },
              ],
            },
          },
        })),
      },
    ],
  };

  return (
    <div className="w-1/2 p-5 border border-gray-200 rounded-lg bg-white">
      <ReactECharts
        option={option}
        style={{ height: "356px", width: "100%" }}
      />
      <ul className="chart-legend-list mt-2 space-y-1 text-sm text-gray-800 flex flex-col">
        <li className="chart-legend-item flex justify-between items-center py-5 border-b border-[#CECED6]">
          <p className="chart-legend-text lhs-panel w-1/2 text-left text-[14px] text-[#60607B] font-semibold">
            Market
          </p>
          <p className="chart-legend-text rhs-panel w-1/2 text-right text-[14px] text-[#0D0D11] font-semibold">
            4893{" "}
            <span
              className="bg-[#E2F8EC] text-[12px] text-[#257F4E]"
              style={{ padding: "4px 6px", borderRadius: "15px" }}
            >
              (+3.04%)
            </span>
          </p>
        </li>
        <li className="chart-legend-item flex justify-between items-center py-5 border-b border-[#CECED6]">
          <p className="chart-legend-text lhs-panel w-1/2 text-left font-semibold text-[14px] text-[#60607B]">
            Brand
          </p>
          <p className="chart-legend-text rhs-panel w-1/2 text-right font-semibold text-[14px] text-[#0D0D11]">
            2621
            <span
              className="bg-[#E2F8EC] text-[12px] text-[#257F4E]"
              style={{ padding: "4px 6px", borderRadius: "15px" }}
            >
              (+3.14%)
            </span>
          </p>
        </li>
        <li className="chart-legend-item flex justify-between items-center py-1">
          <p className="chart-legend-text lhs-panel w-1/2 text-left font-semibold text-[14px] text-[#60607B]">
            Share
          </p>
          <p className="chart-legend-text rhs-panel w-1/2 text-right font-semibold text-[14px] text-[#0D0D11]">
            53%
          </p>
        </li>
      </ul>
    </div>
  );
};

// Define chartData for BarLabelRotationChart
const chartData = [
  { name: "Forest", data: [320, 332, 301, 334, 390] },
  { name: "Steppe", data: [220, 182, 191, 234, 290] },
  { name: "Desert", data: [150, 232, 201, 154, 190] },
  { name: "Wetland", data: [98, 77, 101, 99, 40] },
];


// Configuration for label positioning options
const posList = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight',
];

const app = {
  configParameters: {
    rotate: { min: -90, max: 90 },
    align: { options: { left: 'left', center: 'center', right: 'right' } },
    verticalAlign: { options: { top: 'top', middle: 'middle', bottom: 'bottom' } },
    position: {
      options: posList.reduce((map, pos) => {
        map[pos] = pos;
        return map;
      }, {}),
    },
    distance: { min: 0, max: 100 },
  },
  config: {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
  },
};

const BarLabelRotationChart = ({ title, data, colors }) => {
  // Fallback colors if none provided
  const defaultColors = ['#1E3A8A', '#3B82F6', '#93C5FD', '#DBEAFE'];

  // Ensure data is valid; provide fallback if undefined or empty
  const safeData = Array.isArray(data) && data.length > 0 ? data : [
    { name: 'Forest', data: [320, 332, 301, 334, 390] },
    { name: 'Steppe', data: [220, 182, 191, 234, 290] },
    { name: 'Desert', data: [150, 232, 201, 154, 190] },
    { name: 'Wetland', data: [98, 77, 101, 99, 40] },
  ];

  const labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    borderRadius: 4,
    formatter: '',
    fontSize: 16,
    rich: { name: {} },
  };

  const option = {
    title: {
      text: title,
      left: "center",
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: safeData.map((item) => item.name || "Unknown"),
      bottom: 0,
    },
    toolbox: {
      show: false,
      orient: "vertical",
      left: "right",
      top: "center",
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar", "stack"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        data: ["2012", "2013", "2014", "2015", "2016"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: safeData.map((item, index) => ({
      name: item.name || "Unknown",
      type: "bar",
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: "series",
      },
      data: item.data || [0, 0, 0, 0, 0],
      itemStyle: {
        color:
          colors && colors[index]
            ? colors[index]
            : defaultColors[index % defaultColors.length],
        borderRadius: [5, 5, 0, 0],
      },
    })),
  };

  return (
    <div className="w-1/2 p-5 border border-gray-200 rounded-lg bg-white">
      <ReactECharts
        option={option}
        style={{ height: '356px', width: '100%' }}
      />
    </div>
  );
};


const CmpDashboard = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const valueGrowthData = [
    {
      value: 4000,
      name: "2024",
      growth: 4.04,
      colorStart: "#FF5722",
      colorEnd: "#E91E63",
    },
    {
      value: 6547,
      name: "2025",
      growth: 4.04,
      colorStart: "#9C27B0",
      colorEnd: "#673AB7",
    },
    {
      value: 6547,
      name: "2026",
      growth: 4.04,
      colorStart: "#7B1FA2",
      colorEnd: "#512DA8",
    },
    {
      value: 8765,
      name: "2027",
      growth: 4.04,
      colorStart: "#8E24AA",
      colorEnd: "#5E35B1",
    },
  ];

  const volumeGrowthData = [
    {
      value: 173,
      name: "2024",
      growth: 4.04,
      colorStart: "#FF5722",
      colorEnd: "#E91E63",
    },
    {
      value: 173,
      name: "2025",
      growth: 4.04,
      colorStart: "#9C27B0",
      colorEnd: "#673AB7",
    },
    {
      value: 106,
      name: "2026",
      growth: 4.04,
      colorStart: "#7B1FA2",
      colorEnd: "#512DA8",
    },
    {
      value: 91,
      name: "2027",
      growth: 4.04,
      colorStart: "#8E24AA",
      colorEnd: "#5E35B1",
    },
  ];

  const [dateRangeInfo, setDateRangeInfo] = useState(null);
  const [exportFormat, setExportFormat] = useState(null);

  const swiperRefs = useRef({});

  const goNextSlide = (id) => {
    swiperRefs.current[id]?.slideNext();
  };

  const goPrevslide = (id) => {
    swiperRefs.current[id]?.slidePrev();
  };

  return (
    <div className="">
      {/* Main Content */}
      <main className="">
        <div className="flex justify-between items-center">
          <h1 className="text-[28px] font-bold text-sprk-dark-2 py-[31px]">
            Welcome Meha,
          </h1>
          <div style={{ display: "flex", gap: "1rem" }}>
            <CpTimelineDropdown />
            <div>
              <button
                className="font-semibold text-[13px] text-[#022B59] rounded-lg bg-white flex items-center gap-2 border border-[#022B59] py-2 px-4"
                onClick={(e) => setExportFormat(e.currentTarget)}
              >
                <Image
                  src="/assets/icons/Export.svg"
                  alt="Export icon"
                  width={12}
                  height={12}
                />
                Export
              </button>
              <Menu
                anchorEl={exportFormat}
                open={Boolean(exportFormat)}
                PaperProps={{
                  sx: {
                    width: exportFormat ? exportFormat.offsetWidth : "auto",
                  },
                }}
                onClose={() => setExportFormat(null)}
              >
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    justifyContent: "center",
                    padding: "8px 16px",
                    color: "#0D0D11",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                  onClick={() => setExportFormat(null)}
                >
                  JPEG
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    justifyContent: "center",
                    padding: "8px 16px",
                    color: "#0D0D11",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                  onClick={() => setExportFormat(null)}
                >
                  PNG
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    justifyContent: "center",
                    padding: "8px 16px",
                    color: "#0D0D11",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                  onClick={() => setExportFormat(null)}
                >
                  PDF
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>

        <div className="flex gap-5 rounded-2xl w-full mb-6 shadow-lg border border-gray-200 relative">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/assets/images/thumb-with-bg.png"
              alt="Home Icon"
              width={160}
              height={160}
            />
          </div>
          <div className="flex justify-between w-full py-6 px-4">
            <div className="w-[48%]">
              <h2 className="sec-title text-sprk-dark-2">
                Your tailored setup guide!
              </h2>
              <p className="sec-desc text-sprk-grey">
                Let’s assist you in kickstarting your journey step-by-step by
                organising things for you.
              </p>
            </div>
            <div className="relative w-[40%] top-2 right-6 pr-2">
              <div className="absolute top-4 left-[10.5%] right-[8%] h-[2px] bg-gray-300"></div>
              <ul className="flex items-center justify-between w-full relative z-10">
                <li className="flex flex-col items-center">
                  <div className="bg-[#FFFF] px-2">
                    <p className="rounded-full bg-[#E6F0FB] w-[32px] h-[32px] flex items-center justify-center">
                      1
                    </p>
                  </div>
                  <p className="text-xs text-center">Add a new campaign</p>
                </li>
                <li className="flex flex-col items-center">
                  <div className="bg-[#FFFF] px-2">
                    <p className="rounded-full bg-[#E6F0FB] w-[32px] h-[32px] flex items-center justify-center">
                      2
                    </p>
                  </div>
                  <p className="text-xs text-center">Create scenario</p>
                </li>
                <li className="flex flex-col items-center">
                  <div className="bg-[#FFFF] px-2">
                    <p className="rounded-full bg-[#E6F0FB] w-[32px] h-[32px] flex items-center justify-center">
                      3
                    </p>
                  </div>
                  <p className="text-xs text-center">Simulate report</p>
                </li>
              </ul>
            </div>
            <button className="absolute top-3 right-4 text-gray-400 hover:text-gray-600">
              <Image
                src="/assets/images/close.png"
                alt="Icon"
                width={14}
                height={14}
              />
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="flex gap-4">
          <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
            <div className="relative z-10 flex justify-between pb-4">
              <div>
                <p>
                  <span className="font-medium text-2xl">₹ </span>
                  <span className="font-bold text-[38px]">172 </span>
                  <span className="font-medium text-2xl">Cr</span>
                </p>
                <h4 className="text-xs">Total Marketing Spend</h4>
              </div>
              <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                <Image
                  src="/assets/icons/market-graph.svg"
                  alt="Icon"
                  width={14}
                  height={14}
                />
              </div>
            </div>
            <span className="metric-card-label green">
              - 6.9 %
              <Image
                src="/assets/icons/arrow-left.svg"
                className="arrow-red"
                alt="Icon"
                width={16}
                height={16}
              />
            </span>
          </div>

          <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
            <div className="relative z-10 flex justify-between pb-4">
              <div>
                <p>
                  <span className="font-medium text-2xl">₹ </span>
                  <span className="font-bold text-[38px]">11 </span>
                  <span className="font-medium text-2xl">Lakh</span>
                </p>
                <h4 className="text-xs">Total Revenue Generated</h4>
              </div>
              <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                <Image
                  src="/assets/icons/dollar.svg"
                  alt="Icon"
                  width={14}
                  height={14}
                />
              </div>
            </div>
            <span className="metric-card-label red">
              - 13.9%
              <Image
                src="/assets/icons/arrow-left.svg"
                className="arrow-red"
                alt="Icon"
                width={16}
                height={16}
              />
            </span>
          </div>

          <div className="flex-1 min-w-0 rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden card-bg">
            <div className="relative z-10 flex justify-between pb-4">
              <div>
                <p>
                  <span className="font-bold text-[38px]">55 </span>
                  <span className="font-medium text-2xl">%</span>
                </p>
                <h4 className="text-xs">Baseline</h4>
              </div>
              <div className="w-12 h-12 bg-red-orange-gradient rounded-full flex justify-center items-center">
                <Image
                  src="/assets/icons/market-chart.svg"
                  alt="Icon"
                  width={14}
                  height={14}
                />
              </div>
            </div>
            <span className="metric-card-label blue">
              - 12.0%
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
        {/* Key Performance Insights */}
        <section className="mt-5 mb-5">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            aria-label="custom tabs with gradient indicator"
            slotProps={{
              indicator: {
                sx: {
                  background:
                    "linear-gradient(90deg, #EC3128, #F56233, #FF9B3F)",
                  height: 4,
                  borderRadius: 2,
                },
              },
            }}
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tab
              value="one"
              label="Category Overview"
              sx={{
                fontWeight: 500,
                color: "black",
                textTransform: "none",
                "&.Mui-selected": { color: "black", fontWeight: 700 },
              }}
            />
            <Tab
              value="two"
              label="Competition Comparison"
              sx={{
                fontWeight: 500,
                color: "black",
                textTransform: "none",
                "&.Mui-selected": { color: "black", fontWeight: 700 },
              }}
            />
            <Tab
              value="three"
              label="Brand Comparison"
              sx={{
                fontWeight: 500,
                color: "black",
                textTransform: "none",
                "&.Mui-selected": { color: "black", fontWeight: 700 },
              }}
            />
            <Tab
              value="four"
              label="Driver Impact"
              sx={{
                fontWeight: 500,
                color: "black",
                textTransform: "none",
                "&.Mui-selected": { color: "black", fontWeight: 700 },
              }}
            />
          </Tabs>

          <div className="mt-5">
            {value === "one" && (
              <>
                <div className="p-5 bg-[#F2F7FD] rounded-xl flex justify-between items-center mb-5">
                  <div className="lhs-panel w-1/2"></div>
                  <div className="rhs-panel w-1/2 flex justify-end items-center gap-2">
                    <span className="flex justify-center align-center p-1 bg-[#022B59] rounded-lg w-6 h-6">
                      <Image
                        src="/assets/icons/question.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                    </span>
                    <span className="flex justify-center align-center p-1 bg-[#022B59] rounded-lg w-6 h-6">
                      <Image
                        src="/assets/icons/question.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                    </span>
                  </div>
                </div>
                <div className="flex gap-5">
                  <FunnelChart title="Value Growth" data={valueGrowthData} />
                  <FunnelChart title="Volume Growth" data={volumeGrowthData} />
                </div>
              </>
            )}
            {value === "two" && (
              <>
                <div className="p-5 bg-[#F2F7FD] rounded-xl flex justify-between items-center mb-5">
                  <div className="lhs-panel w-1/2  flex justify-start items-center gap-2">
                    {/* <h2 className="text-lg font-semibold text-[#0D0D11]">
                      Competition Comparison
                    </h2>
                    <p className="text-sm text-[#60607B]">
                      Analyze how your brand stacks up against competitors based
                      on key performance indicators.
                    </p> */}

                    <SingleSelectDropdown
                      label="Visualisation"
                      options={["Chart", "Graph"]}
                      onSelect={(option) => console.log(option)}
                    />
                  </div>
                  <div className="rhs-panel w-1/2 flex justify-end items-center gap-2">
                    <span className="flex justify-center align-center p-1 bg-[#022B59] rounded-lg w-6 h-6">
                      <Image
                        src="/assets/icons/question.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                    </span>
                    <span className="flex justify-center align-center p-1 bg-[#022B59] rounded-lg w-6 h-6">
                      <Image
                        src="/assets/icons/question.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-row align-center justify-between gap-4">
                  <div className="flex w-1/2 rounded-xl shadow-sm p-4 border border-gray-200 relative overflow-hidden">
                    <div className="flex flex-row items-center gap-6">
                      <div className="w-12 h-12 bg-[#FFFFFF] shadow-sm rounded-full flex justify-center items-center">
                        <Image
                          src="/assets/icons/growth-curve.svg"
                          alt="growth"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="flex flex-col min-w-[240px] gap-2">
                        <div className="flex flex-row items-center justify-start gap-3">
                          <span className="text-[20px] font-bold">HP </span>
                          <span className="label">Value</span>
                        </div>
                        <ul className="flex flex-col gap-2 text-[14px]">
                          <li className="flex flex-row items-center justify-start gap-1">
                            <span className="text-[#60607B] font-[500]">
                              Value (in Bn IDR) :{" "}
                            </span>
                            <span className="font-bold">128</span>
                          </li>
                          <li className="flex flex-row items-center justify-start gap-1">
                            <span className="text-[#60607B] font-[500]">
                              Volume (Mn units):{" "}
                            </span>
                            <span className="font-bold">59</span>
                          </li>
                        </ul>
                      </div>
                      <div></div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row items-center justify-start gap-3">
                        <span className="text-[20px] font-bold">Dell </span>
                        <span className="label">Volume</span>
                      </div>
                      <ul className="flex flex-col gap-2 text-[14px]">
                        <li className="flex flex-row items-center justify-start gap-1">
                          <span className="text-[#60607B] font-[500]">
                            Value (in Bn IDR) :
                          </span>
                          <span className="font-bold">110</span>
                        </li>
                        <li className="flex flex-row items-center justify-start gap-1">
                          <span className="text-[#60607B] font-[500]">
                            Volume (Mn units):{" "}
                          </span>
                          <span className="font-bold">60</span>
                        </li>
                      </ul>
                    </div>
                    <div></div>
                  </div>
                  <div className="flex w-1/2 rounded-xl shadow-sm p-4 border border-gray-200 relative overflow-hidden">
                    <div className="flex flex-row items-center gap-6">
                      <div className="w-12 h-12 bg-[#FFFFFF] shadow-sm rounded-full flex justify-center items-center">
                        <Image
                          src="/assets/icons/fall-curve.svg"
                          alt="growth"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="flex flex-col min-w-[240px] gap-2">
                        <div className="flex flex-row items-center justify-start gap-3">
                          <span className="text-[20px] font-bold">LG </span>
                          <span className="label">Value</span>
                        </div>
                        <ul className="flex flex-col gap-2 text-[14px]">
                          <li className="flex flex-row items-center justify-start gap-1">
                            <span className="text-[#60607B] font-[500]">
                              Value (in Bn IDR) :{" "}
                            </span>
                            <span className="font-bold">-5</span>
                          </li>
                          <li className="flex flex-row items-center justify-start gap-1">
                            <span className="text-[#60607B] font-[500]">
                              Volume (Mn units):{" "}
                            </span>
                            <span className="font-bold">4</span>
                          </li>
                        </ul>
                      </div>
                      <div></div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row items-center justify-start gap-3">
                        <span className="text-[20px] font-bold">Acer </span>
                        <span className="label">Volume</span>
                      </div>
                      <ul className="flex flex-col gap-2 text-[14px]">
                        <li className="flex flex-row items-center justify-start gap-1">
                          <span className="text-[#60607B] font-[500]">
                            Value (in Bn IDR) :{" "}
                          </span>
                          <span className="font-bold">85</span>
                        </li>
                        <li className="flex flex-row items-center justify-start gap-1">
                          <span className="text-[#60607B] font-[500]">
                            Volume (Mn units):{" "}
                          </span>
                          <span className="font-bold">-2</span>
                        </li>
                      </ul>
                    </div>
                    <div></div>
                  </div>
                </div>
               
                <div className="flex gap-5 mt-6">
                  <Box sx={{ height: 490, width: "100%" }}>
                    <StyledDataGrid
                      rows={rows}
                      columns={columns}
                      experimentalFeatures={{ columnGrouping: true }}
                      columnGroupingModel={columnGroupingModel}
                      pageSizeOptions={[6]}
                      initialState={{
                        pagination: { paginationModel: { pageSize: 6 } },
                      }}
                    />
                  </Box>
                </div>
                <div className="flex gap-5 mt-5">
                  {KPIValueData ? (
                    <BarNegativeChart title="KPI - Value" data={KPIValueData} />
                  ) : (
                    <div>Data not available for KPI - Value</div>
                  )}
                  {DriverNDData ? (
                    <BarNegativeChart title="Driver - ND" data={DriverNDData} />
                  ) : (
                    <div>Data not available for Driver - ND</div>
                  )}
                </div>
              </>
            )}
            {value === "three" && (
              <>
                <div className="p-5 bg-[#F2F7FD] rounded-xl flex justify-between items-center mb-5">
                  <div className="lhs-panel w-1/2">
                    {/* <h2 className="text-lg font-semibold text-[#0D0D11]">
                      Competition Comparison
                    </h2>
                    <p className="text-sm text-[#60607B]">
                      Analyze how your brand stacks up against competitors based
                      on key performance indicators.
                    </p> */}
                  </div>
                  <div className="rhs-panel w-1/2 flex justify-end items-center gap-2">
                    <span className="flex justify-center align-center p-1 bg-[#022B59] rounded-lg w-6 h-6">
                      <Image
                        src="/assets/icons/question.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                    </span>
                    <span className="flex justify-center align-center p-1 bg-[#022B59] rounded-lg w-6 h-6">
                      <Image
                        src="/assets/icons/question.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <BarLabelRotationChart
                    title="Lenovo"
                    data={chartData}
                    colors={["#1E3A8A", "#3B82F6", "#93C5FD", "#DBEAFE"]}
                  />
                  <BarLabelRotationChart
                    title="HP"
                    data={chartData}
                    colors={["#2A1E5A", "#6B48FF", "#B794F4", "#E0D6FF"]}
                  />
                </div>
                <div className="flex gap-5 mt-5">
                  <BarLabelRotationChart
                    title="Dell"
                    data={chartData}
                    colors={["#D32F2F", "#F44336", "#EF9A9A", "#FFCDD2"]}
                  />
                  <BarLabelRotationChart
                    title="Asus"
                    data={chartData}
                    colors={["#7B1FA2", "#9C27B0", "#CE93D8", "#F3E5F5"]}
                  />
                </div>
              </>
            )}
            {value === "four" && <div>Content for Item Four</div>}
          </div>
        </section>

        {/* AI Recommendations */}
        <section className="bg-[url('/assets/images/AI-driven-bg.png')] bg-cover bg-center py-8 mt-6 rounded-xl">
          <div className="flex justify-between">
            <div>
              <h2 className="sec-title text-sprk-light-1 px-6">
                AI-driven Recommendations
              </h2>
              <p className="sec-desc text-sprk-light-grey px-6 pb-6">
                Let’s find out where you’re falling behind with our AI insights
              </p>
            </div>
            <div className="relative top-6 right-[40px] flex gap-[16px]">
              <button
                className="custom-prev"
                onClick={() => goPrevslide("Ai-recommendation-swiper")}
              >
                <Image
                  src="/assets/icons/left-arrow.svg"
                  alt="Prev"
                  width={14}
                  height={14}
                  className="invert"
                />
              </button>
              <button
                className="custom-next"
                onClick={() => goNextSlide("Ai-recommendation-swiper")}
              >
                <Image
                  src="/assets/icons/right-arrow.svg"
                  alt="Next"
                  width={14}
                  height={14}
                  className="invert"
                />
              </button>
            </div>
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2.2}
            spaceBetween={50}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 90,
              modifier: 1,
              slideShadows: false,
            }}
            onSwiper={(swiper) =>
              (swiperRefs.current["Ai-recommendation-swiper"] = swiper)
            }
            modules={[Navigation, EffectCoverflow]}
            className="mySwiper"
            onSlideChange={(swiper) =>
              handleArrowState(
                "Ai-recommendation-swiper",
                swiper,
                ".custom-prev",
                ".custom-next"
              )
            }
            onAfterInit={(swiper) =>
              handleArrowState(
                "Ai-recommendation-swiper",
                swiper,
                ".custom-prev",
                ".custom-next"
              )
            }
          >
            <SwiperSlide className="transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 h-[214px]">
                <h3 className="text-xl text-sprk-light-1 font-bold">
                  Time to refuel the engine
                </h3>
                <p className="sec-desc text-sprk-light-grey italic pb-6">
                  Value is growing but volume is dropping – it’s time to
                  fine-tune the mix
                </p>
                <ul className="card-bullet-list">
                  <li>
                    <span>
                      <Image
                        src="/assets/icons/Clean.svg"
                        alt="Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                    Test alternate budget splits in “Compare Scenario”
                  </li>
                  <li>
                    <span>
                      <Image
                        src="/assets/icons/Clean.svg"
                        alt="Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                    Shift budget toward high-RO channels (Social = 45%)
                  </li>
                  <li>
                    <span>
                      <Image
                        src="/assets/icons/Clean.svg"
                        alt="Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                    Add volume-push campaigns (promos, bundling, regional
                    bursts)
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 h-[214px]">
                <h3 className="text-xl text-sprk-light-1 font-bold">
                  Maximize marginal returns
                </h3>
                <p className="sec-desc text-sprk-light-grey italic pb-6">
                  Some channels have reached saturation; incremental spend
                  yields diminishing returns
                </p>
                <ul className="card-bullet-list">
                  <li>
                    <span>
                      <Image
                        src="/assets/icons/Clean.svg"
                        alt="Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                    Reduce investment in saturated channels.
                  </li>
                  <li>
                    <span>
                      <Image
                        src="/assets/icons/Clean.svg"
                        alt="Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                    Redirect savings to underfunded, high-growth channels.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 h-[214px]">
                <h3 className="text-xl text-sprk-light-1 font-bold">
                  Time to refuel the engine
                </h3>
                <p className="sec-desc text-sprk-light-grey italic pb-6">
                  Value is growing but volume is dropping – it’s time to
                  fine-tune the mix
                </p>
                <ul className="card-bullet-list">
                  <li>
                    <span>
                      <Image
                        src="/assets/icons/Clean.svg"
                        alt="Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                    Test alternate budget splits in “Compare Scenario”
                  </li>
                  <li>
                    <span>
                      <Image
                        src="/assets/icons/Clean.svg"
                        alt="Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                    Shift budget toward high-RO channels (Social = 45%)
                  </li>
                  <li>
                    <span>
                      <Image
                        src="/assets/icons/Clean.svg"
                        alt="Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                    Add volume-push campaigns (promos, bundling, regional
                    bursts)
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 h-[214px]">
                <h3 className="text-xl text-sprk-light-1 font-bold">
                  Time to refuel the engine
                </h3>
                <p className="sec-desc text-sprk-light-grey italic pb-6">
                  Value is growing but volume is dropping – it’s time to
                  fine-tune the mix
                </p>
                <ul className="card-bullet-list">
                  <li>
                    <span>
                      <Image
                        src="/assets/icons/Clean.svg"
                        alt="Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                    Test alternate budget splits in “Compare Scenario”
                  </li>
                  <li>
                    <span>
                      <Image
                        src="/assets/icons/Clean.svg"
                        alt="Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                    Shift budget toward high-RO channels (Social = 45%)
                  </li>
                  <li>
                    <span>
                      <Image
                        src="/assets/icons/Clean.svg"
                        alt="Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                    Add volume-push campaigns (promos, bundling, regional
                    bursts)
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Campaign Section */}
        <section className="mt-14 get-inspired-section">
          <div className="flex justify-between">
            <div className="w-[60%]">
              <h2 className="sec-title text-sprk-dark-2">Get Inspired</h2>
              <p className="sec-desc text-sprk-grey">
                We’ve analysed your previous performance data and curated a list
                of the best-performing campaigns for your review.
              </p>
            </div>
            <div className="relative top-6 flex gap-[16px]">
              <button
                className="custom-prev"
                onClick={() => goPrevslide("get-inspired-swiper")}
              >
                <Image
                  src="/assets/icons/left-arrow.svg"
                  alt="Prev"
                  width={14}
                  height={14}
                />
              </button>
              <button
                className="custom-next"
                onClick={() => goNextSlide("get-inspired-swiper")}
              >
                <Image
                  src="/assets/icons/right-arrow.svg"
                  alt="Next"
                  width={14}
                  height={14}
                />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 pt-7">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              modules={[Navigation]}
              onSwiper={(swiper) =>
                (swiperRefs.current["get-inspired-swiper"] = swiper)
              }
              onSlideChange={(swiper) =>
                handleArrowState(
                  "get-inspired-swiper",
                  swiper,
                  ".get-inspired-section .custom-prev",
                  ".get-inspired-section .custom-next"
                )
              }
              onAfterInit={(swiper) => {
                handleArrowState(
                  "get-inspired-swiper",
                  swiper,
                  ".get-inspired-section .custom-prev",
                  ".get-inspired-section .custom-next"
                );
              }}
            >
              <SwiperSlide>
                <div className="flex-1 min-w-[250px] rounded-xl border border-[#F1F1F1] shadow overflow-hidden">
                  <Swiper
                    navigation={{
                      nextEl: ".custom-next",
                      prevEl: ".custom-prev",
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                    onSlideChange={(swiper) =>
                      handleArrowState(swiper, ".custom-prev", ".custom-next")
                    }
                    onAfterInit={(swiper) =>
                      handleArrowState(swiper, ".custom-prev", ".custom-next")
                    }
                  >
                    <SwiperSlide>
                      <Image
                        src="/assets/images/get-inspired.png"
                        alt="Home Icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto object-cover rounded-t-xl"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/assets/images/get-inspired.png"
                        alt="Home Icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto object-cover rounded-t-xl"
                      />
                    </SwiperSlide>
                    <div className="absolute bottom-4 right-4 flex gap-4 z-10">
                      <button className="custom-prev grey-bg">
                        <Image
                          src="/assets/icons/left-arrow.svg"
                          alt="Prev"
                          width={14}
                          height={14}
                          className="invert brightness-0"
                        />
                      </button>
                      <button className="custom-next grey-bg">
                        <Image
                          src="/assets/icons/right-arrow.svg"
                          alt="Next"
                          width={14}
                          height={14}
                          className="invert brightness-0"
                        />
                      </button>
                    </div>
                  </Swiper>
                  <h3 className="card-title px-6 pt-5">Premium Compete</h3>
                  <div className="stats-container px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="stat-item">
                      <p className="stat-label">Like</p>
                      <p className="stat-value">100k</p>
                    </div>
                    <div className="stat-item">
                      <p className="stat-label">Share</p>
                      <p className="stat-value">100</p>
                    </div>
                    <div className="stat-item">
                      <p className="stat-label">Comments</p>
                      <p className="stat-value">200</p>
                    </div>
                    <div className="stat-item">
                      <p className="stat-label">Engagement %</p>
                      <p className="stat-value">20%</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-1 min-w-[250px] rounded-xl border border-[#F1F1F1] shadow overflow-hidden">
                  <Image
                    src="/assets/images/get-inspired.png"
                    alt="Home Icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-cover rounded-t-xl"
                  />
                  <h3 className="card-title px-6 pt-5">Premium Compete</h3>
                  <div className="stats-container px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="stat-item">
                      <p className="stat-label">Like</p>
                      <p className="stat-value">100k</p>
                    </div>
                    <div className="stat-item">
                      <p className="stat-label">Share</p>
                      <p className="stat-value">100</p>
                    </div>
                    <div className="stat-item">
                      <p className="stat-label">Comments</p>
                      <p className="stat-value">200</p>
                    </div>
                    <div className="stat-item">
                      <p className="stat-label">Engagement %</p>
                      <p className="stat-value">20%</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-1 min-w-[250px] rounded-xl border border-[#F1F1F1] shadow overflow-hidden">
                  <Image
                    src="/assets/images/get-inspired.png"
                    alt="Home Icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-cover rounded-t-xl"
                  />
                  <h3 className="card-title px-6 pt-5">Premium Compete</h3>
                  <div className="stats-container px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="stat-item">
                      <p className="stat-label">Like</p>
                      <p className="stat-value">100k</p>
                    </div>
                    <div className="stat-item">
                      <p className="stat-label">Share</p>
                      <p className="stat-value">100</p>
                    </div>
                    <div className="stat-item">
                      <p className="stat-label">Comments</p>
                      <p className="stat-value">200</p>
                    </div>
                    <div className="stat-item">
                      <p className="stat-label">Engagement %</p>
                      <p className="stat-value">20%</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-1 min-w-[250px] rounded-xl border border-[#F1F1F1] shadow overflow-hidden">
                  <Image
                    src="/assets/images/get-inspired.png"
                    alt="Home Icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-cover rounded-t-xl"
                  />
                  <h3 className="card-title px-6 pt-5">Premium Compete</h3>
                  <div className="stats-container px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="stat-item">
                      <p className="stat-label">Like</p>
                      <p className="stat-value">100k</p>
                    </div>
                    <div className="stat-item">
                      <p className="stat-label">Share</p>
                      <p className="stat-value">100</p>
                    </div>
                    <div className="stat-item">
                      <p className="stat-label">Comments</p>
                      <p className="stat-value">200</p>
                    </div>
                    <div className="stat-item">
                      <p className="stat-label">Engagement %</p>
                      <p className="stat-value">20%</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="bg-red-orange-gradient text-white py-6 mt-8 mb-8 rounded-2xl flex justify-between px-6">
          <div>
            <h2 className="text-base text-white font-bold">
              Curious about your past performance?
            </h2>
            <p className="text-sm text-white font-medium">
              Let our AI dig into your history to answer your questions and
              reveal useful insights.
            </p>
          </div>
          <button className="btn-default flex gap-1">
            <Image
              src="/assets/icons/Shape.svg"
              alt="Home Icon"
              width={14}
              height={14}
              className=""
            />
            Spark AI Insights
          </button>
        </section>

        <section className="bg-[url('/assets/images/get-in-touch-bg.png')] py-[30px] bg-cover rounded-2xl">
          <div className="flex gap-[39.5px] pr-6">
            <div className="w-[36%] pl-6 py-[23px]">
              <h3 className="text-2xl font-extrabold text-sprk-light-1 pb-6">
                Start your end-to-end marketing analysis today with our tailored
                solutions.
              </h3>
              <button className="btn-default">Get in Touch</button>
            </div>
            <div className="w-[64%] pr-6">
              <ul className="flex item-center gap-6">
                <li className="flex-1 flex justify-between bg-[linear-gradient(126.16deg,rgba(82,82,82,0.24)-3.39%,rgba(0,30,41,0.4)58.7%)] rounded-xl border border-[#525252] shadow overflow-hidden py-[33px] px-6">
                  <div>
                    <h2 className="text-xl font-bold text-sprk-light-1 pb-6">
                      Influencers
                    </h2>
                    <ul className="card-list">
                      <li className="pb-4 text-[11px]">
                        Browse & analyse influencers
                      </li>
                      <li className="pb-4 text-[11px]">
                        Create a plan with your chosen influencers
                      </li>
                      <li className="text-[11px]">
                        Explore leading influencer by categories
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/assets/icons/user.svg"
                    alt="user Icon"
                    width={40}
                    height={40}
                    className="bg-white h-[40px]"
                  />
                </li>
                <li className="flex-1 flex justify-between bg-[linear-gradient(126.16deg,rgba(82,82,82,0.24)-3.39%,rgba(0,30,41,0.4)58.7%)] rounded-xl border border-[#525252] shadow overflow-hidden py-[33px] px-6">
                  <div>
                    <h2 className="sec-title text-sprk-light-1 pb-6">
                      Creatives
                    </h2>
                    <ul className="card-list">
                      <li className="pb-4 text-[11px]">
                        Upload creatives & performance data
                      </li>
                      <li className="pb-4 text-[11px]">Analyse creatives</li>
                      <li className="text-[11px]">View report</li>
                    </ul>
                  </div>
                  <Image
                    src="/assets/icons/comparison.svg"
                    alt="comparison Icon"
                    width={40}
                    height={40}
                    className="bg-white h-[40px]"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CmpDashboard;