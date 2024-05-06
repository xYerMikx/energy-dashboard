import { ChartData, ChartOptions } from "chart.js";
import { energy } from "./chartData";

export const optionsBar: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
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
    },
    y: {
      max: Math.max(...energy) + 10,
      border: {
        dash: [7, 5],
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};
const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const dataBar: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      label: "",
      data: energy,
      backgroundColor: "#E8F3FC",
      borderRadius: 4,
      datalabels: {
        display: true,
        color: "#2396ef",
        anchor: "end",
        align: "top",
        offset: -5,
      },
    },
  ],
};
