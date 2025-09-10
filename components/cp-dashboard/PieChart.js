import React from "react";
import ReactECharts from "echarts-for-react";
import { Box } from "@mui/material";

const PieWithRoundedSlices = () => {
  const option = {
    title: {
      text: "Lenovo - Online",
      left: "left",
      top: "top",
      textStyle: {
        fontSize: 20,
        fontWeight: "bold",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {d}%",
    },
    series: [
      {
        name: "Share",
        type: "pie",
        radius: ["50%", "70%"], // donut shape
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0, // rounded corners on slices
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "outside",
          formatter: "{d}%",
          color: "#666",
        },
        labelLine: {
          length: 12,
          length2: 15,
          smooth: true,
        },
        data: [
          { value: 36.8, name: "Segment A" },
          { value: 35.4, name: "Segment B" },
          { value: 0.7, name: "Segment C" },
          { value: 5.4, name: "Segment D" },
          { value: 10.9, name: "Segment E" },
          { value: 1.1, name: "Segment F" },
          { value: 0.5, name: "Segment G" },
          { value: 0.3, name: "Segment H" },
          { value: 0.8, name: "Segment I" },
          { value: 1.6, name: "Segment J" },
          { value: 6.3, name: "Segment K" },
          { value: 1.0, name: "Segment L" },
          { value: 5.3, name: "Segment M" },
          { value: 5.3, name: "Segment N" },
        ],
      },
    ],
    color: [
      "#2E0854",
      "#3B0A68",
      "#47127A",
      "#53248C",
      "#5F36A0",
      "#6B47B3",
      "#7759C7",
      "#836BDA",
      "#8F7DEE",
      "#9B8FFF",
      "#A7A1FF",
      "#B3B3FF",
      "#BFBFFF",
      "#CBCBFF",
    ], // purple-to-light gradient palette
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

export default PieWithRoundedSlices;
