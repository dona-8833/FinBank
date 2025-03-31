import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", balance: 5000 },
  { name: "Feb", balance: 7500 },
  { name: "Mar", balance: 6200 },
  { name: "Apr", balance: 8200 },
  { name: "May", balance: 9100 },
];

const BalanceChart = () => {
  return (
    <div className="bg-white p-6 shadow rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Balance Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="balance" fill="#1a677b" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;
