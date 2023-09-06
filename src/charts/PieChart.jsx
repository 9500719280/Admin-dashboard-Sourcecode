import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Mobile", 11],
  ["Laptop", 2],
  ["Tab", 2],
  ["TV", 2],
  ["Electronic", 7],
];

export const options = {
  title: "Customer Activities",
  is3D: true,
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"280px"}
    />
  );
}
