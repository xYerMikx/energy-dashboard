import humidity from "@/images/humidity.svg";
import energy from "@/images/energy.svg";
import { Level } from "@/types/level";
import { dataLine, optionsLine } from "./lineChart";
import { dataBar, optionsBar } from "./barChart";

export const levels: Level[] = [
  {
    src: humidity,
    type: "Humidity",
    alt: "humidity",
    chartType: "line",
    data: dataLine,
    options: optionsLine,
  },
  {
    src: energy,
    type: "Energy",
    alt: "energy",
    chartType: "bar",
    data: dataBar,
    options: optionsBar,
  },
];
