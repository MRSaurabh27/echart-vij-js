import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const Map = () => {
  const [filterText, setFilterText] = useState('');

  // Static Data Example
  const data = [
    { Date: '2024-01-01', Sales: 120, Region: 'North', Performance: 85 },
    { Date: '2024-01-02', Sales: 200, Region: 'South', Performance: 70 },
    { Date: '2024-01-03', Sales: 150, Region: 'East', Performance: 90 },
    { Date: '2024-01-04', Sales: 170, Region: 'West', Performance: 80 },
  ];

  // Filtered Data
  const filteredData = data.filter(item =>
    item.Region.toLowerCase().includes(filterText.toLowerCase())
  );

  // ECharts: Bar Chart
  const barChartOptions = {
    title: { text: 'Sales by Region' },
    tooltip: {},
    xAxis: { type: 'category', data: filteredData.map(item => item.Region) },
    yAxis: { type: 'value' },
    series: [{ data: filteredData.map(item => item.Sales), type: 'bar' }],
  };

  // ECharts: Gauge Chart
  const gaugeChartOptions = {
    title: { text: 'Performance Gauge', subtext: 'Goal', left: 'center' },
    series: [
      {
        name: 'Performance',
        type: 'gauge',
        detail: { formatter: '{value}%' },
        data: [{ value: filteredData.length ? filteredData[0].Performance : 0, name: 'Performance' }],
      },
    ],
  };

  // ECharts: Radar Chart
  const radarChartOptions = {
    title: { text: 'Sales Metrics' },
    tooltip: {},
    radar: {
      indicator: [
        { name: 'Sales', max: 250 },
        { name: 'Customer Satisfaction', max: 100 },
        { name: 'Market Share', max: 100 },
        { name: 'Growth Rate', max: 100 },
        { name: 'Profitability', max: 100 },
      ],
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [filteredData[0]?.Sales || 0, 90, 85, 75, 80],
            name: 'Metrics',
          },
        ],
      },
    ],
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#001529', color: 'white', textAlign: 'center', padding: '10px 0' }}>
        <h1>Sales Dashboard</h1>
      </div>

      {/* Content */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>
        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
          {/* Table Section */}
          <ResizableBox width={500} height={300} axis="xy" minConstraints={[200, 200]} style={{ flex: 1 }}>
            <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', background: '#fff', height: '100%' }}>
              <h2>Sales Data Table</h2>
              <input
                type="text"
                placeholder="Filter by region"
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
                style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
              />
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sales</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Region</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map(item => (
                    <tr key={item.Date}>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.Date}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.Sales}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.Region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ResizableBox>

          {/* Bar Chart Section */}
          <ResizableBox width={500} height={300} axis="xy" minConstraints={[200, 200]} style={{ flex: 1 }}>
            <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', background: '#fff', height: '100%' }}>
              <h2>Sales by Region (Bar Chart)</h2>
              <ReactECharts option={barChartOptions} style={{ height: '90%' }} />
            </div>
          </ResizableBox>
        </div>

        <div style={{ display: 'flex', gap: '20px', flex: 1, marginTop: '20px' }}>
          {/* Gauge Chart Section */}
          <ResizableBox width={500} height={300} axis="xy" minConstraints={[200, 200]} style={{ flex: 1 }}>
            <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', background: '#fff', height: '100%' }}>
              <h2>Performance Gauge</h2>
              <ReactECharts option={gaugeChartOptions} style={{ height: '90%' }} />
            </div>
          </ResizableBox>

          {/* Radar Chart Section */}
          <ResizableBox width={500} height={300} axis="xy" minConstraints={[200, 200]} style={{ flex: 1 }}>
            <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', background: '#fff', height: '100%' }}>
              <h2>Sales Metrics (Radar Chart)</h2>
              <ReactECharts option={radarChartOptions} style={{ height: '90%' }} />
            </div>
          </ResizableBox>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#001529', color: 'white', textAlign: 'center', padding: '10px 0' }}>
        <p>Sales Dashboard ©2024</p>
      </div>
    </div>
  );
};

export default Map;
