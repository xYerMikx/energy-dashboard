"use client";

import Image from "next/image";
import styles from "./card.module.scss";
import { Chart } from "../Chart";
import { ChartData, ChartOptions } from "chart.js";

type LevelCardProps = {
  src: string;
  alt: string;
  type: string;
  options: ChartOptions;
  data: ChartData;
  chartType: "line" | "bar";
};

export function LevelCard({
  alt,
  src,
  type,
  chartType,
  data,
  options,
}: LevelCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <Image src={src} alt={alt} />
        <p className={styles.name}>{type}</p>
        <select name="" id="">
          <option value="Today">Today</option>
          <option value="Week">Week</option>
        </select>
      </div>
      <div className={styles.graph}>
        <Chart type={chartType} data={data} options={options} />
      </div>
    </div>
  );
}
