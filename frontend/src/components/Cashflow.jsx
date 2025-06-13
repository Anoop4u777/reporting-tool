import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Cashflow = ({ data }) => {
  const chartData = [
    { name: "Money In", value: parseFloat(data.money_in) },
    { name: "Money Out", value: parseFloat(data.money_out) },
  ];

  return (
    <div
      style={{
        padding: "1.5rem",
        backgroundColor: "#e8f4ea",
        borderRadius: "8px",
        color: "black",
        margin: "1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h3 className="text-black mb-3 text-base font-semibold">Cashflow</h3>
      <div className="flex flex-col gap-3">
        <p className="text-black">
          <strong>Total:</strong> {data.currency}
          {data.total}
        </p>
        <div style={{ height: "200px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#00a86b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Cashflow;
