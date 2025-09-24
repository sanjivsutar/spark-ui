'use client';

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function AudienceAnalysisGraph({
  labels = ['Instagram', 'Youtube', 'Tiktok', 'Twitter', 'LinkedIn'],
  data = [13, 12, 10, 0.5, 0.3],
  title = 'Social Platform ROI Comparison',
  maxValue = 20,     // keep your existing default if you like
  height = 335,
  interval = null, 
  suffix = '',    
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const chart = echarts.init(ref.current);

    const option = {
      title: {
        text: title,
        left: '0%',
        top: '0%',
        textStyle: {
          fontSize: 22,
          fontWeight: 700,
          color: '#FAFAFB',
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
        min: 0,                   // always start at 0 so ticks are 0, interval, 2*interval...
        max: maxValue,
        ...(interval !== null ? { interval } : {}), // only set interval if provided
        splitLine: { show: false },
        axisLine: { show: true },
        axisTick: { show: false },
        axisLabel: {
          fontSize: 14,
          color: '#D6D6DD',
          fontWeight: 700,
        },
      },
      yAxis: {
        type: 'category',
        data: labels,
        inverse: true,
        axisLine: { show: true },
        axisTick: { show: false },
        axisLabel: {
          fontSize: 14,
          color: '#D6D6DD',
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
            // SINGLE formatter that appends suffix — not overridden elsewhere
            formatter: function (params) {
              const val = Array.isArray(params.value) ? params.value[0] : params.value;
              // format integers cleanly; keep decimals if present
              const display = Number.isInteger(val) ? String(val) : String(val);
              return `${display}${suffix}`;
            },
            fontSize: 14,
            fontWeight: 600,
            color: '#D6D6DD',
          },
          itemStyle: {
            borderRadius: [0, 8, 8, 0],
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              { offset: 0, color: '#044085' },
              { offset: 1, color: '#3889E5' },
            ]),
          },
        },
      ],
      tooltip: { show: false },
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, [labels, data, title, maxValue, interval, suffix, height]);

  return (
    <div
      ref={ref}
      style={{ width: '50%', height  }}
      className="rounded-xl border border-white/10 shadow-md bg-[linear-gradient(to_bottom_right,rgba(82,82,82,0.24),rgba(0,30,41,0.4))] p-6"
    />
  );
}
