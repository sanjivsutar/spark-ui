import React from "react";
import ReactECharts from "echarts-for-react";
import { Box } from "@mui/material";

const DriverChart = () => {
  const option = {
    title: {
      text: "HP",
      left: "left",
      top: "top",
      textStyle: {
        fontSize: 20,
        fontWeight: "bold",
      },
    },
    tooltip: {},
    radar: {
      indicator: [
        { name: "TV", max: 5, min: -5 },
        { name: "Print", max: 5, min: -5 },
        { name: "Radio", max: 5, min: -5 },
        { name: "Digital", max: 5, min: -5 },
        { name: "OOH", max: 5, min: -5 },
        { name: "Cinema", max: 5, min: -5 },
        { name: "Price", max: 5, min: -5 },
        { name: "Promotion", max: 5, min: -5 },
        { name: "Distribution", max: 5, min: -5 },
        { name: "GDP", max: 5, min: -5 },
        { name: "Unemployment", max: 5, min: -5 },
      ],
      splitNumber: 5,
      axisName: {
        color: "#555",
      },
      splitLine: {
        lineStyle: {
          color: ["#ddd"],
        },
      },
      splitArea: {
        areaStyle: {
          color: ["#fff"],
        },
      },
      axisLine: {
        lineStyle: {
          color: "#aaa",
        },
      },
    },
    series: [
      {
        name: "Drivers",
        type: "radar",
        data: [
          {
            value: [0, -1, -2, -2, -3, -2, -3, -2, -1, -2, -1],
            name: "HP",
            areaStyle: {
              color: "rgba(102, 51, 153, 0.3)", // purple fill
            },
            lineStyle: {
              color: "#663399", // purple border
              width: 2,
            },
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              color: "#663399",
              borderColor: "#fff",
              borderWidth: 1.5,
            },
          },
        ],
      },
    ],
  };

  return (
    <main>
      <Box sx={{ height: 480, width: "100%" }}>
        <ReactECharts
          option={option}
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
    </main>
  );
};

export default DriverChart;
