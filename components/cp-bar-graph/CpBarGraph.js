'use client';

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function BarRaceChart({
  labels = ['Instagram', 'Youtube', 'Tiktok', 'Twitter', 'LinkedIn'],
  data = [13, 12, 10, 0.5, 0.3],
  title = 'Social Platform ROI Comparison',
  maxValue = 20,
  height = 300
}) {
  const ref = useRef(null);

  useEffect(() => {
    const chart = echarts.init(ref.current);

    const option = {
      title: {
        text: title,
        left: '0%',
        top: '0%',
        textStyle: {
          fontSize: 22,
          fontWeight: 700,
          color:'#040406',
        },
      },
      grid: {
        top: 40,
        left: 100,
        right: 40,
        bottom: 20,
      },
      xAxis: {
        type: 'value',
        max: maxValue,
        splitLine: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      yAxis: {
        type: 'category',
        data: labels,
        inverse: true,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          fontSize: 14,
          color:'#3E3E51',
          fontWeight: 700,
        },
      },
      series: [
        {
          type: 'bar',
          data: data,
          barWidth: 21,
          label: {
            show: true,
            position: 'right',
            formatter: '{c}',
            fontSize: 13,
            fontWeight: 600,
          },
          itemStyle: {
            borderRadius: [0, 8, 8, 0],
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              { offset: 0, color: '#7B47CF' }, // right side
              { offset: 1, color: '#240A4E' }, // left side
            ]),
          },
        },
      ],
      tooltip: { show: false },
    };

    chart.setOption(option);

    // resize on window change
    window.addEventListener('resize', chart.resize);

    return () => {
      window.removeEventListener('resize', chart.resize);
      chart.dispose();
    };
  }, [labels, data, title, maxValue]);

  return (
    <div
      ref={ref}
      style={{ width: '40%', height }}
      className="rounded-xl border border-gray-200 shadow-md bg-white p-6"
    />
  );
}
