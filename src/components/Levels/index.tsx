import { levels } from "@/constants/levels";
import styles from "./levels.module.scss";
import { LevelCard } from "../LevelCard";

export function Levels() {
  return (
    <section className={styles.levels}>
      <h2 className={styles.title}>Levels</h2>
      <div className={styles.cards}>
        {levels.map((level) => (
          <LevelCard {...level} key={level.alt} />
        ))}
      </div>
    </section>
  );
}
