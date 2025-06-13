import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import BalanceSummary from "./components/BalanceSummary";
import CheckingsAccount from "./components/CheckingsAccount";
import SavingsAccount from "./components/SavingsAccount";
import InvestmentAccount from "./components/InvestmentAccount";
import Cashflow from "./components/Cashflow";
import SpendActivity from "./components/SpendActivity";
import Transactions from "./components/Transactions";
import CashflowPie from "./components/CashflowPie";

const defaultLayout = [
  { i: "balance_summary", x: 0, y: 0, w: 12, h: 12 },
  { i: "checkings", x: 12, y: 0, w: 12, h: 12 },
  { i: "savings", x: 0, y: 12, w: 12, h: 12 },
  { i: "investment", x: 12, y: 12, w: 12, h: 12 },
  { i: "cashflow", x: 0, y: 24, w: 12, h: 12 },
  { i: "cashflow_pie", x: 12, y: 24, w: 12, h: 12 },
  { i: "spend_activity", x: 0, y: 36, w: 12, h: 12 },
  { i: "transactions", x: 12, y: 36, w: 12, h: 12 },
];

const App = () => {
  const [layout, setLayout] = useState(defaultLayout);
  const [financeData, setFinanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savedLayouts, setSavedLayouts] = useState([]);
  const [selectedLayoutId, setSelectedLayoutId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/dashboard/dashboard/get_all_data/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFinanceData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchLayouts = async () => {
      try {
        const response = await fetch("http://localhost:8000/layouts/");
        if (!response.ok) {
          throw new Error("Failed to fetch layouts");
        }
        const data = await response.json();
        setSavedLayouts(data);

        // Load the first layout if available
        if (data.length > 0) {
          loadSavedLayout(data[0]);
        }
      } catch (error) {
        console.error("Error fetching layouts:", error);
      }
    };

    fetchLayouts();
  }, []);

  const transformLayoutToSchema = (currentLayout) => {
    const widgetTypeMap = {
      balance_summary: "balance_summary",
      checkings: "account_checking",
      savings: "account_savings",
      investment: "account_investment",
      cashflow: "cashflow",
      cashflow_pie: "cashflow_pie",
      spend_activity: "spend_activity",
      transactions: "transactions",
    };

    return {
      widgets: currentLayout.map((item) => ({
        type: widgetTypeMap[item.i],
        position: {
          x: item.x,
          y: item.y,
        },
        size: {
          w: item.w,
          h: item.h,
        },
      })),
    };
  };

  const transformSchemaToLayout = (schema) => {
    const widgetTypeMap = {
      balance_summary: "balance_summary",
      account_checking: "checkings",
      account_savings: "savings",
      account_investment: "investment",
      cashflow: "cashflow",
      cashflow_pie: "cashflow_pie",
      spend_activity: "spend_activity",
      transactions: "transactions",
    };

    return schema.widgets.map((widget) => ({
      i: widgetTypeMap[widget.type],
      x: widget.position.x,
      y: widget.position.y,
      w: widget.size.w,
      h: widget.size.h,
    }));
  };

  const saveLayout = async () => {
    if (selectedLayoutId) {
      // Update existing layout
      try {
        const response = await fetch(
          `http://localhost:8000/layouts/${selectedLayoutId}/`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              layout_schema: transformLayoutToSchema(layout),
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update layout");
        }

        const updatedLayout = await response.json();
        setSavedLayouts(
          savedLayouts.map((l) =>
            l.id === selectedLayoutId ? updatedLayout : l
          )
        );
        console.log("Layout updated successfully:", updatedLayout);
        alert("Layout updated successfully!");
      } catch (error) {
        console.error("Error updating layout:", error);
        alert("Failed to update layout. Please try again.");
      }
    } else {
      // Create new layout
      const layoutName = prompt("Enter a name for this layout:");
      if (!layoutName) return;

      try {
        const response = await fetch("http://localhost:8000/layouts/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: layoutName,
            layout_schema: transformLayoutToSchema(layout),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to save layout");
        }

        const savedLayout = await response.json();
        setSavedLayouts([...savedLayouts, savedLayout]);
        setSelectedLayoutId(savedLayout.id);
        console.log("Layout saved successfully:", savedLayout);
        alert("Layout saved successfully!");
      } catch (error) {
        console.error("Error saving layout:", error);
        alert("Failed to save layout. Please try again.");
      }
    }
  };

  const loadSavedLayout = (savedLayout) => {
    const newLayout = transformSchemaToLayout(savedLayout.layout_schema);
    setLayout(newLayout);
    setSelectedLayoutId(savedLayout.id);
  };

  const createNewLayout = () => {
    setLayout(defaultLayout);
    setSelectedLayoutId(null);
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!financeData) return <div className="p-4">No data available</div>;

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Finance Dashboard</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={createNewLayout}
          >
            Create New
          </button>
          {savedLayouts.map((savedLayout) => (
            <button
              key={savedLayout.id}
              className={`px-4 py-2 text-white rounded ${
                selectedLayoutId === savedLayout.id
                  ? "bg-purple-700"
                  : "bg-purple-500"
              }`}
              onClick={() => loadSavedLayout(savedLayout)}
            >
              {savedLayout.name}
            </button>
          ))}
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={saveLayout}
          >
            {selectedLayoutId ? "Update Layout" : "Save Layout"}
          </button>
        </div>
      </div>
      <div className="">
        <GridLayout
          className="layout"
          layout={layout}
          cols={74}
          rowHeight={10}
          width={1600}
          margin={[8, 8]}
          containerPadding={[8, 8]}
          onLayoutChange={(newLayout) => setLayout(newLayout)}
          style={{ height: "740px" }}
        >
          <div key="balance_summary" className="h-full overflow-auto">
            <BalanceSummary data={financeData.balance_summary[0]} />
          </div>
          <div key="checkings" className="h-full overflow-auto">
            <CheckingsAccount data={financeData.account_summary} />
          </div>
          <div key="savings" className="h-full overflow-auto">
            <SavingsAccount data={financeData.account_summary} />
          </div>
          <div key="investment" className="h-full overflow-auto">
            <InvestmentAccount data={financeData.account_summary} />
          </div>
          <div key="cashflow" className="h-full overflow-auto">
            <Cashflow data={financeData.cashflow[0]} />
          </div>
          <div key="cashflow_pie" className="h-full overflow-auto">
            <CashflowPie data={financeData.cashflow[0]} />
          </div>
          <div key="spend_activity" className="h-full overflow-auto">
            <SpendActivity data={financeData.spend_activity} />
          </div>
          <div key="transactions" className="h-full overflow-auto">
            <Transactions data={financeData.transactions} />
          </div>
        </GridLayout>
      </div>
    </div>
  );
};

export default App;
