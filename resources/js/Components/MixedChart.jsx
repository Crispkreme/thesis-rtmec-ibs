import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MixedChart = ({ data, options }) => {
  return (
      <div className="charts-card">
        <Line
          data={data}
          options={options}
        />
      </div>
  );
};

export default MixedChart;
