'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const productSales = [
  {
    name: 'Jan',
    product1: 4000,
    product2: 2400,
  },
  {
    name: 'Feb',
    product1: 3000,
    product2: 2210,
  },
  {
    name: 'Mar',
    product1: 2000,
    product2: 2290,
  },
  {
    name: 'Apr',
    product1: 2780,
    product2: 2000,
  },
  {
    name: 'May',
    product1: 1890,
    product2: 2181,
  },
  {
    name: 'Jun',
    product1: 2390,
    product2: 2500,
  },
];

const CustomToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='p-4 bg-white flex flex-col gap-4 rounded-md'>
        <p className='text-medium text-lg'>{label}</p>
        <p className='text-sm text-blue-400'>
          Product 1:
          <span className='ml-2'>${payload[0].value}</span>
        </p>
        <p className='text-sm text-blue-400'>
          Product 2:
          <span className='ml-2'>${payload[1].value}</span>
        </p>
      </div>
    );
  }

  return null;
};

const AreaChartComponent = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <AreaChart data={productSales} margin={{ right: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomToolTip />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="product1"
            stroke="#2563eb"
            fill="#3b82f6"
          />
          <Area
            type="monotone"
            dataKey="product2"
            stroke="#7c3aed"
            fill="#8b5cf6"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;
