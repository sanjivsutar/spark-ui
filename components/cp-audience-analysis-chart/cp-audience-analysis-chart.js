import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

// Modified PieDonutChart for "Top Countries" style
export default function PieDonutChart({
  data = [
    { value: 70, name: "India" },
    { value: 15, name: "Australia" },
    { value: 10, name: "Canada" },
    { value: 3, name: "United Kingdom (UK)" },
    { value: 2, name: "United States of America (USA)" }
  ],
  title = "Top Countries",
  style = { height: 300, width: "100%" }
}) {
  const containerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    chartRef.current = echarts.init(containerRef.current, null, {
      renderer: "canvas",
      useDirtyRect: false
    });

    const getOption = () => ({
      title: {
        text: title,
        left: "left",
        top: 0,
        textStyle: {
          color: "#fff",
          fontSize: 22,
          fontWeight: "bold",
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}: {d}%"
      },
      legend: { show: false },
      series: [
        {
          type: "pie",
          radius: ["60%", "80%"],
          center: ["50%", "60%"],
          avoidLabelOverlap: true,
          itemStyle: {
           // borderRadius: 4,
            borderColor: "#FFFFFF",
            borderWidth: 1
          },
          label: {
            show: true,
            position: "outside",
            formatter: "{b} {d}%",
            color: "#fff",
            fontSize: 12,
            fontWeight: 500
          },
          labelLine: {
            show: true,
            length: 15,
            length2: 10,
            lineStyle: { color: "#aaa" }
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          data: data.map((item, idx) => ({
            ...item,
            itemStyle: {
              color: [
                "#48149C",
                "#7B47CF",
                "#AD8CE1",
                "#CEBAED",
                "#EEE8F9"
              ][idx]
            }
          }))
        }
      ]
    });

    chartRef.current.setOption(getOption());

    const onResize = () => chartRef.current && chartRef.current.resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      chartRef.current && chartRef.current.dispose();
      chartRef.current = null;
    };
  }, [data, title]);

  return <div ref={containerRef} style={style} />;
}
