import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SpendActivity = ({ data }) => {
  const chartData = data.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-US", { month: "short" }),
    revenue: parseFloat(item.revenue),
    spend: parseFloat(item.spend),
  }));

  return (
    <div className="h-full p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Spend Activity
      </h3>
      <div className="h-[calc(100%-2rem)]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4CAF50"
              name="Revenue"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="spend"
              stroke="#F44336"
              name="Spend"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpendActivity;
