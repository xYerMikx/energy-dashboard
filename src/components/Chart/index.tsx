import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
  PointElement,
  LineElement
);

type ChartProps = {
  type: "line" | "bar";
  options: ChartOptions;
  data: ChartData;
};

const tooltip = {
  callbacks: {
    label: (tooltipItem: any) => {
      return tooltipItem.formattedValue + " kW";
    },
  },
};

export function Chart({ type, data, options }: ChartProps) {
  const renderChart = (type: "line" | "bar") => {
    let component;
    switch (type) {
      case "line":
        //@ts-ignore
        component = <Line options={options} data={data} />;
        break;

      case "bar":
        component = (
          <Bar
            //@ts-ignore
            options={{ ...options, plugins: { ...options.plugins, tooltip } }}
            plugins={[ChartDataLabels]}
            //@ts-ignore
            data={data}
          />
        );
        break;

      default:
        component = (
          //@ts-ignore
          <Bar options={options} plugins={[ChartDataLabels]} data={data} />
        );

        break;
    }
    return component;
  };

  return <div>{renderChart(type)}</div>;
}
