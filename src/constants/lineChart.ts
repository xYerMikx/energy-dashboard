import { ChartData, ChartOptions } from "chart.js";
import { temperatures } from "./chartData";

export const optionsLine: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawTicks: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      max: Math.max(...temperatures) + 10,
      min: Math.min(...temperatures) - 10,
      grid: {
        display: false,
        drawTicks: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

export const dataLine: ChartData<"line"> = {
  labels: temperatures,
  datasets: [
    {
      label: "",
      data: temperatures,
      borderColor: "#2396EF",
      borderWidth: 1,
      backgroundColor: "rgba(255, 252, 253, 0.5)",
      datalabels: { display: false },
    },
  ],
};
