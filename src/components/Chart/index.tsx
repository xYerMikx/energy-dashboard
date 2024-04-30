import { randomize } from "@/utils/randomize";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return tooltipItem.formattedValue + " kW";
        },
      },
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
      border: {
        dash: [7, 5],
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  onClick: (e, active) => {
    if (active.length === 0) {
      //
    } else {
      console.log(e);
    }
  },
};
const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const data: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(randomize),
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

export function Chart() {
  return (
    <div>
      <Bar options={options} plugins={[ChartDataLabels]} data={data} />
    </div>
  );
}
