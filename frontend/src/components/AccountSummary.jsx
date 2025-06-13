// src/components/AccountSummary.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AccountSummary = ({ data }) => {
  return (
    <div
      style={{
        padding: "1.5rem",
        backgroundColor: "#eef1f5",
        borderRadius: "8px",
        color: "black",
        margin: "1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ color: "black", marginBottom: "1.5rem" }}>
        Account Summary
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {data.map((account, index) => (
          <div
            key={index}
            style={{
              padding: "1rem",
              backgroundColor: "white",
              borderRadius: "6px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <h4 style={{ color: "black", marginBottom: "0.75rem" }}>
              {account.account_type}
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <p style={{ color: "black" }}>
                <strong>Balance:</strong> {account.currency}
                {account.balance}
              </p>
              <p style={{ color: "black" }}>
                <strong>Change:</strong> {account.change_percent}%
              </p>
            </div>
            {/* <ResponsiveContainer width="100%" height={100}>
              <LineChart
                data={account.trend_data.points.map((val, i) => ({
                  name: `Day ${i + 1}`,
                  value: val,
                }))}
              >
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSummary;
