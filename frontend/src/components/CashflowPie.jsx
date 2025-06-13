import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CashflowPie = ({ data }) => {
  // Log the incoming data to debug
  console.log("CashflowPie data:", data);

  // Ensure we have valid numbers and handle potential undefined values
  const pieData = [
    {
      name: "Money In",
      value: data?.money_in ? Math.abs(parseFloat(data.money_in)) : 0,
    },
    {
      name: "Money Out",
      value: data?.money_out ? Math.abs(parseFloat(data.money_out)) : 0,
    },
    {
      name: "Total",
      value: data?.total ? Math.abs(parseFloat(data.total)) : 0,
    },
  ].filter((item) => item.value > 0); // Only show segments with values

  // Log the processed pie data to debug
  console.log("Processed pie data:", pieData);

  const COLORS = ["#22c55e", "#ef4444", "#3b82f6"];

  // If no data, show a message
  if (pieData.length === 0) {
    return (
      <div className="h-full p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Cash Flow Distribution
        </h3>
        <div className="h-[calc(100%-3rem)] flex items-center justify-center">
          <p className="text-gray-500">No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Cash Flow Distribution
      </h3>
      <div className="h-[calc(100%-3rem)]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`$${value.toFixed(2)}`, "Amount"]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CashflowPie;
