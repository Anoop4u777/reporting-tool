// src/components/BalanceSummary.tsx
import React from "react";

const BalanceSummary = ({ data }) => {
  return (
    <div
      style={{
        padding: "1.5rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        color: "black",
        margin: "1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h3 className="text-black mb-3 text-base font-semibold">
        Balance Summary
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p style={{ color: "black" }}>
          <strong>Total:</strong> {data.currency}
          {data.total_balance}
        </p>
        <p style={{ color: "black" }}>
          <strong>Change:</strong> {data.currency}
          {data.change_amount} ({data.change_type})
        </p>
      </div>
    </div>
  );
};

export default BalanceSummary;
