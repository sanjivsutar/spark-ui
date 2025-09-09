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
            sx={{ minWidth: 120, position:"absolute",height: 36, borderRadius:2, top: 2, right:0, padding: "5px", zIndex:8, background: "white" }}
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

  return (
    <MainPanel>
      {/* [Rest of the component remains unchanged until the tabs section] */}

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
                <div className="w-1/2">
                  <Box sx={{ mb: 2, position: "relative" }}>sdsd</Box>
                </div>
                <div className="w-1/2">
                  <Box sx={{ mb: 2, position: "relative" }}>asdasd</Box>
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
