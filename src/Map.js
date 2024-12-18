import React, { useState } from 'react';
import { Table, Layout, Input, Card, Row, Col } from 'antd';
import ReactECharts from 'echarts-for-react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const { Header, Content, Footer } = Layout;

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

  // Table Columns
  const columns = [
    { title: 'Date', dataIndex: 'Date', key: 'Date' },
    { title: 'Sales', dataIndex: 'Sales', key: 'Sales' },
    { title: 'Region', dataIndex: 'Region', key: 'Region' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', color: 'white' }}>
        <h1 style={{ textAlign: 'center' }}>Sales Dashboard</h1>
      </Header>
      <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 'calc(100vh - 64px)' }}>
        <Row gutter={16} style={{ flex: 1 }}>
          {/* Table */}
          <Col span={12}>
            <ResizableBox width="100%" height={300} axis="xy" minConstraints={[200, 200]}>
              <Card title="Sales Data Table" style={{ height: '100%' }}>
                <Input
                  placeholder="Filter by region"
                  value={filterText}
                  onChange={e => setFilterText(e.target.value)}
                  style={{ marginBottom: 10 }}
                />
                <Table
                  dataSource={filteredData}
                  columns={columns}
                  rowKey="Date"
                  pagination={false}
                  scroll={{ y: 240 }} // Scrollable Table
                />
              </Card>
            </ResizableBox>
          </Col>

          {/* Bar Chart */}
          <Col span={12}>
            <ResizableBox width="100%" height={300} axis="xy" minConstraints={[200, 200]}>
              <Card title="Sales by Region (Bar Chart)" style={{ height: '100%' }}>
                <ReactECharts option={barChartOptions} />
              </Card>
            </ResizableBox>
          </Col>
        </Row>

        <Row gutter={16} style={{ flex: 1, marginTop: 20 }}>
          {/* Gauge Chart */}
          <Col span={12}>
            <ResizableBox width="100%" height={300} axis="xy" minConstraints={[200, 200]}>
              <Card title="Performance Gauge" style={{ height: '100%' }}>
                <ReactECharts option={gaugeChartOptions} />
              </Card>
            </ResizableBox>
          </Col>

          {/* Radar Chart */}
          <Col span={12}>
            <ResizableBox width="100%" height={300} axis="xy" minConstraints={[200, 200]}>
              <Card title="Sales Metrics (Radar Chart)" style={{ height: '100%' }}>
                <ReactECharts option={radarChartOptions} />
              </Card>
            </ResizableBox>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Sales Dashboard ©2024</Footer>
    </Layout>
  );
};

export default Map;
