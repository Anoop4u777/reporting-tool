import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const InvestmentAccount = ({ data }) => {
  const investmentAccounts = data.filter(
    (account) =>
      account.account_type.toLowerCase().includes("investment") ||
      account.account_type.toLowerCase().includes("brokerage")
  );

  return (
    <div className="p-3 bg-[#eef1f5] rounded-lg text-black shadow-md w-fit">
      <h3 className="text-black mb-3 text-base font-semibold">
        Investment Accounts
      </h3>
      <div className="flex flex-col gap-3">
        {investmentAccounts.map((account, index) => (
          <div key={index} className="p-2 bg-white rounded-md shadow-sm">
            <h4 className="text-black mb-1 text-sm">{account.account_type}</h4>
            <div className="flex flex-col gap-1">
              <p className="text-black text-sm m-0">
                <strong>Balance:</strong> {account.currency}
                {account.balance}
              </p>
              <p className="text-sm m-0">
                <strong>Change:</strong>{" "}
                <span
                  className={
                    parseFloat(account.change_percent) < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {account.change_percent}%
                </span>
              </p>
            </div>
            <ResponsiveContainer width="100%" height={40}>
              <LineChart
                data={account.trend_data.points.map((val, i) => ({
                  name: `Day ${i + 1}`,
                  value: val,
                }))}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={
                    parseFloat(account.change_percent) < 0
                      ? "#ef4444"
                      : "#22c55e"
                  }
                  dot={false}
                />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentAccount;
