import { ChartData, ChartOptions } from "chart.js";

export type Level = {
  src: string;
  alt: string;
  type: string;
  options: ChartOptions;
  data: ChartData;
  chartType: "line" | "bar";
};
