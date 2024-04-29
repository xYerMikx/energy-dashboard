import Image from "next/image";
import styles from "./card.module.scss";
import arrowDown from "@/images/arrow-down.svg";

type LevelCardProps = {
  src: string;
  alt: string;
  type: string;
};

export function LevelCard({ alt, src, type }: LevelCardProps) {
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
      <div className={styles.graph}>Graph</div>
    </div>
  );
}
