'use client';

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import SelectPrimary from '../cp-select-primary/CpSelectPrimary';

export default function BarChartStyled({
  labels = ['Instagram', 'Youtube', 'Tiktok', 'Twitter', 'LinkedIn'],
  data = [21545595, 41545595, 61545595, 31545595, 81545595],
  title = 'Performance',
  maxValue,
  height = 400,
}) {
  const chartRefs = useRef([]);
  const dropdownOptions = {
    Platform: [
      { value: "platform", label: "Platform" },
      { value: "Content Type", label: "Content Type" },
      { value: "Content Format", label: "Content Format" },
      { value: "Posting Time", label: "Posting Time" },
    ],
  };
  const handleChange = (field) => (event) => {
    const value = event?.target?.value ?? event;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  useEffect(() => {
    labels.forEach((_, index) => {
      const chart = echarts.init(chartRefs.current[index]);

      const colors = [
        ['#022B59', '#076CDF'],   // Instagram
        ['#611B73', '#A32DC1'],   // Youtube
        ['#005052', '#00CACF'],   // Tiktok
        ['#360F75', '#7B47CF'],   // Twitter
        ['#CCBC5B', '#FFF3AA'],   // LinkedIn
      ];

      const option = {
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        xAxis: {
          type: 'value',
          max: maxValue || Math.max(...data) * 1.1,
          show: false,
        },
        yAxis: {
          type: 'category',
          data: [labels[index]],
          show: false,
        },
        series: [
          {
            type: 'bar',
            data: [data[index]],
            barWidth: 16,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: colors[index][0] },
                { offset: 1, color: colors[index][1] },
              ]),
              borderRadius: 20,
            },
            label: {
              show: false,
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
    });
  }, [labels, data, title, maxValue]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <div className="flex items-center mb-6 gap-4">
        <h2 className="sec-title">{title}</h2>
        <SelectPrimary
                    placeholder="Sub Brand"
                    label="Sub Brand"
                    value={'Platform'}
                    onChange={handleChange("subBrand")}
                    items={dropdownOptions.Platform}
                    minWidth={100}  
                    maxWidth={95}
        />
      </div>

      <div className="space-y-6">
        {labels.map((label, index) => (
          <div key={label}>
            {/* Labels Row */}
            <div className="flex justify-between text-sm text-black mb-1 px-1">
              <span className='text-[#000000] font-semibold'>{label}</span>
              <span className='text-[#7A7A7A]'>{data[index]}</span>
            </div>

            {/* Chart Bar */}
            <div
              ref={(el) => (chartRefs.current[index] = el)}
              style={{ width: '100%', height: 24 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
