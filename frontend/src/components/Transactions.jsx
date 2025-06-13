import React from "react";

const Transactions = ({ data }) => {
  return (
    <div className="h-full p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Recent Transactions
      </h3>
      <div className="h-[calc(100%-2rem)] overflow-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Merchant
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                  {new Date(transaction.date_time).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                  {transaction.merchant_name}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                  {transaction.currency}
                  {parseFloat(transaction.amount).toFixed(2)}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.status === "Success"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
