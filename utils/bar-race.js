// src/lib/bar-race.js
import * as echarts from 'echarts';

/**
 * @typedef {Object} BarRaceConfig
 * @property {string[]} labels
 * @property {number[]} [initialData]
 * @property {(data:number[], labels:string[]) => number[]} [stepFn]
 * @property {number} [intervalMs=3000]
 * @property {number} [maxBars]
 * @property {string} [seriesName='Series']
 * @property {boolean} [showLegend=true]
 * @property {Object} [grid]
 */

export function createBarRaceChart(container, cfg) {
  const {
    labels,
    initialData = Array.from({ length: (labels || []).length }, () => 0),
    stepFn,
    intervalMs = 3000,
    maxBars = (labels || []).length,
    seriesName = 'Series',
    showLegend = true,
    grid
  } = cfg || {};

  if (!labels || !labels.length) throw new Error('labels[] is required');
  const el = typeof container === 'string' ? document.getElementById(container) : container;
  if (!el) throw new Error('Container not found');

  const chart = echarts.init(el);
  let data = initialData.slice();
  let timer = null;

  chart.setOption({
    xAxis: { type: 'value', max: 'dataMax' },
    yAxis: {
      type: 'category',
      data: labels.slice(),
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: Math.min(maxBars, labels.length) - 1
    },
    series: [{
      realtimeSort: true,
      name: seriesName,
      type: 'bar',
      data: data.slice(),
      label: { show: true, position: 'right', valueAnimation: true }
    }],
    legend: { show: showLegend },
    animationDuration: 0,
    animationDurationUpdate: intervalMs,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
    grid: { top: 16, bottom: 16, left: 64, right: 24, ...(grid || {}) },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } }
  });

  const ro = new ResizeObserver(() => chart.resize());
  ro.observe(el);

  function defaultStep(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += Math.random() > 0.9
        ? Math.round(Math.random() * 2000)
        : Math.round(Math.random() * 200);
    }
    return arr;
  }

  function tick() {
    const next = typeof stepFn === 'function'
      ? stepFn(data.slice(), labels.slice())
      : defaultStep(data.slice());
    if (!Array.isArray(next) || next.length !== labels.length) return;
    data = next;
    chart.setOption({
      series: [{ type: 'bar', data }],
      yAxis: [{ max: Math.min(maxBars, labels.length) - 1 }]
    });
  }

  function start() {
    if (timer) return;
    tick();
    timer = setInterval(tick, intervalMs);
  }
  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
  }
  function updateData(nextData) {
    if (!Array.isArray(nextData) || nextData.length !== labels.length) {
      throw new Error('updateData: data length must match labels length');
    }
    data = nextData.slice();
    chart.setOption({ series: [{ data }] });
  }
  function updateLabels(nextLabels, nextData) {
    if (!Array.isArray(nextLabels) || !nextLabels.length) throw new Error('labels[] required');
    if (nextData && nextData.length !== nextLabels.length) throw new Error('data length mismatch');
    stop();
    const L = nextLabels.slice();
    const D = nextData ? nextData.slice() : Array.from({ length: L.length }, () => 0);
    chart.setOption({ yAxis: [{ data: L, max: Math.min(maxBars, L.length) - 1 }], series: [{ data: D }] });
    data = D;
    start();
  }
  function resize() { chart.resize(); }
  function destroy() { stop(); ro.disconnect(); chart.dispose(); }

  return { start, stop, updateData, updateLabels, resize, destroy, getInstance: () => chart };
}

export default createBarRaceChart;
