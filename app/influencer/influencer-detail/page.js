"use client";

import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import Image from "next/image";
import ExportFile from "@/components/cp-export/CpExport";
import MainPanel from "@/components/cp-main-panel/cp-main-panel";
import BarRaceChart from "@/components/cp-bar-graph/CpBarGraph";
import { Box, Tab, Tabs, Typography, Select, MenuItem } from "@mui/material"; // Added Select and MenuItem
import CircularProgress from "@mui/material/CircularProgress";
import CpMetricCard from "@/components/cp-card/CpMetricCard";
import CpInfluencerDetailSwiper from "@/components/cp-influencer-detail/CpInfluencerDetailSwiper";
import { styled } from "@mui/material/styles"; // Added missing import
import { DataGrid } from "@mui/x-data-grid";

// Define rows for StyledDataGrid
const rows = [
  {
    id: 1,
    platform: "Youtube",
    sales: 128.45,
    saleContribution: "58.72%",
    roi: 47.35,
    kpiUplift: "30.21%",
  },
  {
    id: 2,
    platform: "Instagram",
    sales: 128.45,
    saleContribution: "58.72%",
    roi: 47.35,
    kpiUplift: "30.21%",
  },
  {
    id: 3,
    platform: "TikTok",
    sales: 128.45,
    saleContribution: "58.72%",
    roi: 47.35,
    kpiUplift: "30.21%",
  },
  {
    id: 4,
    platform: "Youtube",
    sales: 128.45,
    saleContribution: "58.72%",
    roi: 47.35,
    kpiUplift: "30.21%",
  },
  {
    id: 5,
    platform: "Instagram",
    sales: 128.45,
    saleContribution: "58.72%",
    roi: 47.35,
    kpiUplift: "30.21%",
  },
];

// Define column grouping model for StyledDataGrid
const columnGroupingModel = [
  {
    groupId: "performance",
    headerName: "Performance Metrics by Platform",
    children: [
      { field: "platform" },
      { field: "sales" },
      { field: "saleContribution" },
      { field: "roi" },
      { field: "kpiUplift" },
    ],
  },
];

// Define column structure
const columns = [
  { field: "platform", headerName: "Platform", flex: 1 },
  { field: "sales", headerName: "Sales", flex: 1 },
  { field: "saleContribution", headerName: "Sale Contribution", flex: 1 },
  { field: "roi", headerName: "ROI", flex: 1 },
  { field: "kpiUplift", headerName: "KPI Uplift", flex: 1 },
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
    background: "linear-gradient(180deg, #022B59 31.25%, #044085 100%)",
    color: "#fff",
    fontWeight: 600,
    borderBottom: "1px solid #004080",
    textAlign: 'center'
  },

  // group headers
  "& .MuiDataGrid-columnHeader--group": {
    color: "#fff",
    fontWeight: 700,
    textAlign: "center",
    borderRight: "1px solid #004080",
  },

  // individual column headers
  "& .MuiDataGrid-columnHeader": {
    background: "linear-gradient(180deg, #022B59 31.25%, #044085 100%)",
    color: "#fff",
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

const InfluencerDashboard = () => {
  // for progress value
  const radius = 29;
  const circumference = 2 * Math.PI * radius;
  const value = 60;

  // for tabs
  const [tabValue, setTabValue] = useState("Performance");

  // for dropdown
  const [timeInterval, setTimeInterval] = useState("Weekly");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleIntervalChange = (event) => {
    setTimeInterval(event.target.value);
  };

  // Constant for Performance tab content
  const PerformanceContent = () => {
    useEffect(() => {
      if (!echarts) {
        console.error("ECharts is not loaded. Check installation or import.");
        return;
      }

      const chartDom = document.getElementById("salesPerformanceChart");
      if (chartDom) {
        const myChart = echarts.init(chartDom);

        // Sample data based on time interval
        const getDataByInterval = () => {
          switch (timeInterval) {
            case "Weekly":
              return {
                xAxisData: [
                  "Week 1",
                  "Week 2",
                  "Week 3",
                  "Week 4",
                  "Week 5",
                  "Week 6",
                  "Week 7",
                  "Week 8",
                ],
                seriesData: [
                  40000, 45000, 50000, 55000, 58000, 59000, 60000, 60000,
                ],
              };
            case "Monthly":
              return {
                xAxisData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                seriesData: [100000, 120000, 110000, 130000, 140000, 150000],
              };
            case "Yearly":
              return {
                xAxisData: ["2023", "2024", "2025"],
                seriesData: [500000, 600000, 700000],
              };
            default:
              return {
                xAxisData: [
                  "Week 1",
                  "Week 2",
                  "Week 3",
                  "Week 4",
                  "Week 5",
                  "Week 6",
                  "Week 7",
                  "Week 8",
                ],
                seriesData: [
                  40000, 45000, 50000, 55000, 58000, 59000, 60000, 60000,
                ],
              };
          }
        };

        const { xAxisData, seriesData } = getDataByInterval();

        const option = {
          title: {
            text: "Sales Performance",
            left: "left",
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: xAxisData,
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#E0E0E0"],
                width: 1,
                type: "solid",
              },
            },
          },
          yAxis: {
            type: "value",
            min: 0,
            max:
              timeInterval === "Weekly"
                ? 100000
                : timeInterval === "Monthly"
                ? 200000
                : 1000000,
            interval:
              timeInterval === "Weekly"
                ? 20000
                : timeInterval === "Monthly"
                ? 40000
                : 200000,
          },
          series: [
            {
              name: "Sales",
              type: "line",
              smooth: true,
              data: seriesData,
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(138, 43, 226, 0.3)" },
                  { offset: 1, color: "rgba(138, 43, 226, 0)" },
                ]),
              },
              lineStyle: {
                color: "#8A2BE2",
              },
              itemStyle: {
                color: "#8A2BE2",
              },
            },
          ],
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
            show: true,
            backgroundColor: "transparent",
            borderWidth: 0,
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#E0E0E0"],
                width: 1,
                type: "solid",
              },
            },
          },
        };

        myChart.setOption(option);

        // Cleanup on unmount
        return () => {
          myChart.dispose();
        };
      }
    }, [timeInterval]); // Re-run effect when timeInterval changes

    return (
      <div>
        <Box sx={{ mb: 2, position: "relative" }}>
          <Select
            value={timeInterval}
            onChange={handleIntervalChange}
            variant="outlined"
            sx={{
              minWidth: 120,
              position: "absolute",
              height: 36,
              borderRadius: 2,
              top: 2,
              right: 0,
              padding: "5px",
              zIndex: 8,
              background: "white",
            }}
          >
            <MenuItem value="Weekly">Weekly</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
            <MenuItem value="Yearly">Yearly</MenuItem>
          </Select>
        </Box>
        <div
          id="salesPerformanceChart"
          style={{ width: "100%", height: "400px" }}
        ></div>
      </div>
    );
  };

  const EngagementByPlatform = () => {
    useEffect(() => {
      const chartDom = document.getElementById("engagementByPlatformChart");
      if (chartDom) {
        const myChart = echarts.init(chartDom);

        const option = {
          title: {
            text: "Engagement by Platform",
            left: "left",
            textStyle: {
              fontSize: 18,
              fontWeight: "bold",
            },
          },
          tooltip: {
            trigger: "item",
          },
          xAxis: {
            type: "category",
            data: ["Youtube", "Instagram", "TikTok", "Mojo", "Snapchat"],
            axisLabel: {
              fontWeight: "bold",
              color: "#2c2c38",
            },
          },
          yAxis: {
            type: "value",
            min: 0,
            max: 80,
            interval: 20,
            axisLabel: {
              color: "#60607B",
            },
            splitLine: {
              show: false,
            },
          },
          series: [
            {
              name: "Engagement",
              type: "bar",
              data: [45, 60, 62, 55, 55],
              barWidth: "24px",
              itemStyle: {
                borderRadius: [8, 8, 0, 0],
                color: function (params) {
                  const gradients = [
                    // Youtube
                    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#8E2DE2" },
                      { offset: 1, color: "#4A00E0" },
                    ]),
                    // Instagram
                    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#00F260" },
                      { offset: 1, color: "#0575E6" },
                    ]),
                    // TikTok
                    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#9D50BB" },
                      { offset: 1, color: "#6E48AA" },
                    ]),
                    // Mojo
                    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#00c6ff" },
                      { offset: 1, color: "#0072ff" },
                    ]),
                    // Snapchat
                    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#fceabb" },
                      { offset: 1, color: "#f8b500" },
                    ]),
                  ];
                  return gradients[params.dataIndex];
                },
              },
            },
          ],
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
        };

        myChart.setOption(option);

        return () => {
          myChart.dispose();
        };
      }
    }, []);

    return (
      <div
        id="engagementByPlatformChart"
        style={{ width: "100%", height: "400px" }}
      ></div>
    );
  };
  return (
    <MainPanel>
      {/* Influencer Details Section */}
      <section>
        <div className="flex-1 rounded-xl shadow-lg p-6 border border-gray-200 relative overflow-hidden">
          <div className="flex flex-row items-center justify-between mb-4">
            <div className="flex flex-row items-center justify-center gap-4">
              <h1 className="sec-title">Influencer Name</h1>
              <p className="label">Technology</p>
            </div>
            <div className="flex flex-row gap-[6px]">
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
          <div className="flex flex-row items-center justify-start gap-30 mb-6">
            <div className="flex flex-row items-center justify-center gap-[6px]">
              <Image
                src="/assets/icons/instagram-icon.svg"
                alt="Heart icon"
                width={20}
                height={20}
              />
              <span>abc@instagram</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-[6px]">
              <Image
                src="/assets/icons/zoom.svg"
                alt="Zoom icon"
                width={20}
                height={20}
              />
              <span>abc@youtube</span>
            </div>
          </div>
          <div className="flex mb-6">
            <ul className="flex flex-row align-centre justify-start gap-28">
              <li>
                <div className="sec-desc text-[#60607B]">Gender</div>
                <div className="sec-desc font-bold">Male</div>
              </li>
              <li>
                <div className="sec-desc text-[#60607B]">Age</div>
                <div className="sec-desc font-bold">25 Years</div>
              </li>
              <li>
                <div className="sec-desc text-[#60607B]">Language</div>
                <div className="sec-desc font-bold">
                  Hindi<span>,</span>
                  <span>English</span>
                </div>
              </li>
              <li>
                <div className="sec-desc text-[#60607B]">Gender</div>
                <div className="sec-desc font-bold">Male</div>
              </li>
              <li>
                <div className="sec-desc text-[#60607B]">Location</div>
                <div className="sec-desc font-bold">India</div>
              </li>
              <li>
                <div className="sec-desc text-[#60607B]">Active Channels</div>
                <div className="flex flex-row items-center justify-start gap-2">
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
                <div className="sec-desc text-[#60607B]">Brand Partnered</div>
                <div className="sec-desc font-bold">12th July, 2018</div>
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
          <div className="mb-5">
            <h3 className="sec-title">Influencers Performance</h3>
            <p className="sec-desc text-[#60607B]">
              Using your past performance data, we’ve generated insights to
              identify specific areas for improvement, segmented according to
              the data you provided.
            </p>
          </div>
          <BarRaceChart
            labels={["Instagram", "Youtube", "Tiktok", "Twitter", "LinkedIn"]}
            maxBars={3}
            intervalMs={3000}
            seriesName="X"
            height={320}
          />
        </div>
      </section>

      {/* Followers section */}
      <div className="pt-8">
        <h2 className="sec-title text-sprk-dark-2 pb-3">Followers</h2>
        <div className="flex gap-4">
          <div className="flex-1 min-w-0 rounded-xl shadow-lg py-6 px-5 border border-gray-200 relative overflow-hidden">
            <div className="relative z-10 flex justify-between pb-4">
              <div>
                <p>
                  <span className="font-bold text-[38px] text-sprk-dark">
                    1.5
                  </span>
                  <span className="font-medium text-[22px] text-sprk-dark">
                    {" "}
                    M
                  </span>
                </p>
                <h3 className="text-xs text-sprk-grey font-medium">Youtube</h3>
              </div>
              <div className="rounded-full flex justify-center items-center">
                <Image
                  src="/assets/images/card-youtube.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  className=""
                />
              </div>
            </div>
            <span className="metric-card-label green">
              <Image
                src="/assets/icons/plus.svg"
                className="plus"
                alt="Icon"
                width={12}
                height={12}
              />
              20%
              <Image
                src="/assets/icons/Arrow-top-right.svg"
                className="plus"
                alt="Icon"
                width={16}
                height={16}
              />
            </span>
          </div>

          <div className="flex-1 min-w-0 rounded-xl shadow-lg py-6 px-5 border border-gray-200 relative overflow-hidden">
            <div className="relative z-10 flex justify-between pb-4">
              <div>
                <p>
                  <span className="font-bold text-[38px] text-sprk-dark">
                    252
                  </span>
                  <span className="font-medium text-[22px] text-sprk-dark">
                    {" "}
                    K
                  </span>
                </p>
                <h3 className="text-xs text-sprk-grey font-medium">
                  Instagram
                </h3>
              </div>
              <div className="rounded-full flex justify-center items-center">
                <Image
                  src="/assets/images/card-instagram.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  className=""
                />
              </div>
            </div>
            <span className="metric-card-label red">
              <Image
                src="/assets/icons/minus.svg"
                className="minus"
                alt="Icon"
                width={12}
                height={12}
              />
              5%
              <Image
                src="/assets/icons/arrow-left.svg"
                className="arrow-red"
                alt="Icon"
                width={16}
                height={16}
              />
            </span>
          </div>

          <div className="flex-1 min-w-0 rounded-xl shadow-lg py-6 px-5 border border-gray-200 relative overflow-hidden">
            <div className="relative z-10 flex justify-between pb-4">
              <div>
                <p>
                  <span className="font-bold text-[38px] text-sprk-dark">
                    800
                  </span>
                  <span className="font-medium text-[22px] text-sprk-dark">
                    {" "}
                    K
                  </span>
                </p>
                <h3 className="text-xs text-sprk-grey font-medium">TikTok</h3>
              </div>
              <div className="rounded-full flex justify-center items-center">
                <Image
                  src="/assets/images/card-tiktok.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  className=""
                />
              </div>
            </div>
            <span className="metric-card-label green">
              <Image
                src="/assets/icons/plus.svg"
                className="plus"
                alt="Icon"
                width={12}
                height={12}
              />
              20%
              <Image
                src="/assets/icons/Arrow-top-right.svg"
                className="arrow-red"
                alt="Icon"
                width={16}
                height={16}
              />
            </span>
          </div>

          <div className="flex-1 min-w-0 rounded-xl shadow-lg py-6 px-5 border border-gray-200 relative overflow-hidden">
            <div className="relative z-10 flex justify-between pb-4">
              <div>
                <p>
                  <span className="font-bold text-[38px] text-sprk-dark">
                    100
                  </span>
                  <span className="font-medium text-[22px] text-sprk-dark">
                    {" "}
                    K
                  </span>
                </p>
                <h3 className="text-xs text-sprk-grey font-medium">Facebook</h3>
              </div>
              <div className="rounded-full flex justify-center items-center">
                <Image
                  src="/assets/images/card-facebook.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  className=""
                />
              </div>
            </div>
            <span className="metric-card-label red">
              <Image
                src="/assets/icons/minus.svg"
                className="minus"
                alt="Icon"
                width={12}
                height={12}
              />
              2%
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

      {/* Optimal match section */}
      <div className="relative flex items-center justify-between bg-[url('/assets/images/AI-driven-bg.png')] bg-cover bg-center py-[12.5px] px-8 rounded-2xl shadow-lg mt-8">
        <div className="flex items-center gap-10">
          {/* Progress Circle */}
          <div className="relative w-20 h-20">
            <Box
              sx={{
                position: "relative",
                display: "inline-flex",
              }}
            >
              <CircularProgress
                variant="determinate"
                value={value}
                size={80}
                thickness={4}
                sx={{ color: "#ff4500" }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  color="#f7f7f8"
                  sx={{ fontWeight: "bold" }}
                  children="text-lg"
                >
                  {value}%
                </Typography>
              </Box>
            </Box>
          </div>

          <div className="flex justify-between">
            <div className="w-[578px]">
              <h2 className="font-bold text-lg text-sprk-light">
                Optimal match
              </h2>
              <p className="text-sm font-medium text-sprk-light">
                Considering the influencers you’ve created for your campaigns,
                this is a perfect fit.
              </p>
            </div>

            {/* Vertical Gradient Divider */}
            <div className="h-16 w-[2px] bg-gradient-to-b from-[#EC3228] via-[#F66B34] to-[#FF9B3F] rounded-full mx-8"></div>

            {/* Right Side Content */}
            <div className="flex flex-col gap-2">
              <h2 className="text-sprk-light font-semibold text-sm pb-2">
                Topics they talk about?
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">
                  Artificial Intelligence
                </span>
                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">
                  Machine Learning
                </span>
                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">
                  Entertainment
                </span>
                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">
                  Gaming
                </span>
                <span className="text-sm font-medium px-2 py-[2px] bg-[#E6F0FB] text-[#022B59] rounded-full">
                  VFX
                </span>
              </div>
            </div>
          </div>
        </div>
        <button className="absolute top-0 right-0 btn btn-gradient ml-6 rounded-2xl">
          <Image
            src="/assets/icons/Shape.svg"
            alt="shape Icon"
            width={14}
            height={14}
            className="invert w-[14px] h-[14px]"
          />
          AI-personalised for you
        </button>
      </div>

      {/* tabs and bellow section */}
      <div className="mt-8 rounded-xl shadow-lg border border-gray-200">
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
            borderColor: "divider",
          }}
        >
          <Tab
            value="Performance"
            label="Performance"
            sx={{
              fontWeight: 500,
              color: "#60607B",
              textTransform: "none",
              padding: "24px",
              "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
            }}
          />
          <Tab
            value="Content"
            label="Content"
            sx={{
              fontWeight: 500,
              color: "#60607B",
              textTransform: "none",
              padding: "24px",
              "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
            }}
          />
          <Tab
            value="Campaigns"
            label="Campaigns"
            sx={{
              fontWeight: 500,
              color: "#60607B",
              textTransform: "none",
              padding: "24px",
              "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
            }}
          />
        </Tabs>
        <div className="p-6">
          {tabValue === "Performance" && (
            <>
              <PerformanceContent />
              <div className="flex gap-5 pt-20">
                <div className="w-1/2 rounded-xl shadow-lg border border-gray-200 p-5">
                  <Box sx={{ mb: 2, position: "relative" }}>
                    <EngagementByPlatform />
                  </Box>
                </div>
                <div className="w-1/2 rounded-xl">
                  <Box sx={{ mb: 2, position: "relative", height: 440, width: "100%" }}>
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
              </div>
            </>
          )}
          {tabValue === "Content" && (
            <>
              <div className="flex gap-2">
                <Image
                  src="/assets/images/card-instagram.png"
                  alt="Instagram image"
                  width={24}
                  height={24}
                  style={{ objectFit: "contain" }}
                />
                <h3 className="sec-title text-sprk-dark-2">Instagram</h3>
              </div>
              <CpMetricCard />
              <CpInfluencerDetailSwiper />
            </>
          )}
          {tabValue === "Campaigns" && (
            <>
              <div>Campaigns</div>
            </>
          )}
        </div>
      </div>
    </MainPanel>
  );
};

export default InfluencerDashboard;
